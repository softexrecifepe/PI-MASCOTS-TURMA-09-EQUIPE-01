import { fetchPatients } from "@/app/api/getPatients";
import { useState, useEffect } from "react";

interface Patient {
  pet_id: number;
  pet_name: string;
  species: string;
  gender: string;
  age: string;
  breed: string;
  weight: string;
  physical_characteristics: string;
  owners_cpf: string;
}

type PatientSearchModalProps = {
  onSearch: (searchTerm: string) => void;
  onClose: () => void;
};

export function PatientSearcModal({
  onSearch,
  onClose,
}: PatientSearchModalProps) {
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // pegar da api
  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        console.log("Dados da API:", data);
        setPatients(data);
      } catch (error) {
        console.error("Erro ao carregar os dados dos pacientes: ", error);
      }
    };

    loadPatients();
  }, []);

  // para ver o que está sendo carregado
  useEffect(() => {
    console.log("Pacientes carregados:", patients);
  }, [patients]);

  // para filtrar com um termo
  useEffect(() => {
    console.log("searchTerm:", searchTerm);
    if (searchTerm.trim() === "") {
      setFilteredPatients([]);
    } else {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = patients.filter(
        (patient) =>
          patient.pet_name.toLowerCase().includes(lowercasedTerm) ||
          patient.owners_cpf.toLowerCase().includes(lowercasedTerm)
      );
      console.log("Pacientes filtrados:", filtered); // Verifique os pacientes filtrados
      setFilteredPatients(filtered);
    }
  }, [searchTerm, patients]);

  const selectPatient = (name: string) => {
    onSearch(name);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Pesquisar Paciente</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome do paciente"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-lg text-sm"
            required
          />

          {filteredPatients.length > 0 ? (
            <ul className="max-h-64 overflow-y-auto">
              {filteredPatients.map((patient) => (
                <li
                  key={patient.owners_cpf}
                  className="p-2 cursor-pointer hover:bg-gray-100 border-b"
                  onClick={() => selectPatient(patient.pet_name)}
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{patient.pet_name}</span>
                    <span className="text-xs text-gray-600">
                      {patient.owners_cpf} - {patient.species}
                    </span>
                    <span className="text-xs text-gray-600">
                      {patient.breed}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center mt-4">
              Nenhum paciente encontrado
            </p>
          )}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black p-2 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
