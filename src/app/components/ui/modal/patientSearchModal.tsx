// import { fetchPatients } from "@/app/api/getPatients";
// import localData from "../../../../../public/components/data.json";
import { useState, useEffect } from "react";

// interface PatientsJson {
//   icon: string;
//   name: string;
//   schedule: string;
//   description: string;
//   recordNumber: string;
//   admissionDate: string;
//   exitDate: string;
//   weight: string;
//   fisicalDescription: string;
//   specie: string;
//   vet: string;
//   vetSpeciality: string;
//   appointmentStatus: string;
// }

interface PetData {
  recordNumber: string; // ou number, dependendo do formato no JSON
  name: string;
  specie: string;
  gender: string;
  breed: string;
  weight: string;
  fisicalDescription: string;
  owners_cpf: string;
}

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
  onSearch: (
    name: string,
    additionalInfo: {
      owners_cpf: string;
      species: string;
      breed: string;
      weight: string;
      physical_characteristics: string;
    }
  ) => void;
  onClose: () => void;
};

export function PatientSearcModal({
  onSearch,
  onClose,
}: PatientSearchModalProps) {
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch("/components/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setAppointments(data))
  //     .catch((error) => console.error("Erro ao carregar dados:", error));
  // }, []);

  // // pegar da api
  // useEffect(() => {
  //   const loadPatients = async () => {
  //     try {
  //       const data = await fetchPatients();

  //       const localDataMapped = localData.map((item) => ({
  //         pet_id: parseInt(item.recordNumber),
  //         pet_name: item.name,
  //         species: item.specie,
  //         gender: item.gender,
  //         age: "",
  //         breed: item.breed,
  //         weight: item.weight,
  //         physical_characteristics: item.fisicalDescription,
  //         owners_cpf: item.owners_cpf,
  //       }));

  //       // const combinedData = [...data, ...localDataMapped];

  //       console.log("Dados da API:", data);
  //       setPatients(localDataMapped);
  //     } catch (error) {
  //       console.error("Erro ao carregar os dados dos pacientes: ", error);
  //     }
  //   };

  //   loadPatients();
  // }, []);

  useEffect(() => {
    fetch("/components/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Mapeando os dados recebidos
        const localDataMapped = data.map((item: PetData) => ({
          pet_id: parseInt(item.recordNumber),
          pet_name: item.name,
          species: item.specie,
          gender: item.gender,
          age: "",
          breed: item.breed,
          weight: item.weight,
          physical_characteristics: item.fisicalDescription,
          owners_cpf: item.owners_cpf,
        }));
        // Definindo o estado com os dados mapeados
        setPatients(localDataMapped);
      })
      .catch((error) => console.error("Erro ao carregar dados:", error));
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

  const selectPatient = (
    name: string,
    additionalInfo: {
      owners_cpf: string;
      species: string;
      breed: string;
      weight: string;
      physical_characteristics: string;
    }
  ) => {
    onSearch(name, additionalInfo);
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
                  onClick={() =>
                    selectPatient(patient.pet_name, {
                      owners_cpf: patient.owners_cpf,
                      species: patient.species,
                      breed: patient.breed,
                      weight: patient.weight,
                      physical_characteristics:
                        patient.physical_characteristics,
                    })
                  }
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{patient.pet_name}</span>
                    <span className="text-xs text-gray-600">
                      {patient.owners_cpf} - {patient.species}
                    </span>
                    <span className="text-xs text-gray-600">
                      {`${patient.breed}, ${patient.weight}, ${patient.physical_characteristics}`}
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
