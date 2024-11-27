import { useAppointmentQueue } from "@/app/contexts/appointmentQueueContext";
import { useEffect, useState } from "react";

type PatientInfo = {
  owners_cpf: string;
  species: string;
  breed: string;
  weight: string;
  physical_characteristics: string;
};

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

type Atendimento = {
  patientNameOrPront: string;
  patientInfo: PatientInfo;
  appointmentReason: string;
  vet: string;
  vetSpeciality: string;
  status: "Próximo" | "Aguardando";
};

export function FormAppointment() {
  // criando estados
  const [patientNameOrPront, setPatientNameOrPront] = useState("");
  const [patientInfo, setPatientInfo] = useState({
    owners_cpf: "",
    species: "",
    breed: "",
    weight: "",
    physical_characteristics: "",
  });
  const [selectedVet, setSelectedVet] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");
  const { addAppointment } = useAppointmentQueue();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);

  // pegar os dados do json
  useEffect(() => {
    fetch("/components/data.json")
      .then((response) => response.json())
      .then((data) => {
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
        setPatients(localDataMapped);
      })
      .catch((error) => console.error("Erro ao carregar dados:", error));
  }, []);

  // Filtra pacientes com base no termo de busca
  useEffect(() => {
    if (patientNameOrPront.trim() === "") {
      setFilteredPatients([]);
    } else {
      const lowercasedTerm = patientNameOrPront.toLowerCase();
      const filtered = patients.filter(
        (patient) =>
          patient.pet_name.toLowerCase().includes(lowercasedTerm) ||
          patient.owners_cpf.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredPatients(filtered);
    }
  }, [patientNameOrPront, patients]);

  // lista de vets
  const vets = [
    { vet: "Dra. Camilla Barros", vetSpeciality: "Veterinária Geral" },
    { vet: "Dra. Izabelle Alves", vetSpeciality: "Veterinária Geral" },
    { vet: "Dr. Lucas Galvão", vetSpeciality: "Nutrição Veterinária" },
    { vet: "Dr. Lauro", vetSpeciality: "Cirurgia Veterinária" },
    { vet: "Dr. Augusto Dantas", vetSpeciality: "Enfermaria Veterinária" },
  ];

  // se o nome do vet for encontrado, selectedVet terá o nome e a especialidade
  const selectedVetInfo = vets.find((vet) => vet.vet === selectedVet);

  const selectPatient = (patient: Patient) => {
    setPatientNameOrPront(patient.pet_name); // Define o nome do paciente no campo de entrada
    setPatientInfo({
      owners_cpf: patient.owners_cpf,
      species: patient.species,
      breed: patient.breed,
      weight: patient.weight,
      physical_characteristics: patient.physical_characteristics,
    });
    //setFilteredPatients([])
    setTimeout(() => setFilteredPatients([]), 50); // Limpa a lista filtrada
  };

  // adicionar a fila
  const handleAddToqueue = () => {
    const atendimentos: Atendimento = {
      patientNameOrPront,
      patientInfo,
      appointmentReason,
      vet: selectedVet,
      vetSpeciality: selectedVetInfo?.vetSpeciality || "",
      status: "Aguardando",
    };

    // para formar a fila
    addAppointment(atendimentos);
    // para limpar os campos
    setPatientNameOrPront("");
    setAppointmentReason("");
    setPatientInfo({
      owners_cpf: "",
      species: "",
      breed: "",
      weight: "",
      physical_characteristics: "",
    });
    setSelectedVet("");
  };

  return (
    <>
      <form className="flex flex-col gap-8 border shadow-md py-5 px-5 rounded-lg">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="roboto-medium">
              CPF do tutor ou nome do paciente
            </label>
            <div className="flex flex-col gap-3 relative">
              <input
                type="text"
                value={patientNameOrPront}
                onChange={(e) => setPatientNameOrPront(e.target.value)}
                className="border rounded-lg text-sm p-1 w-96 roboto-light"
                placeholder="Digite o cpf ou nome do paciente aqui"
              />
              {filteredPatients.length > 0 && (
                <ul
                  style={{ top: "100%" }}
                  className="absolute bg-white border border-gray-300 w-96 mt-1 rounded z-10 shadow-lg max-h-48 overflow-y-auto"
                >
                  {filteredPatients.map((patient) => (
                    <li
                      key={patient.owners_cpf}
                      className="p-2 cursor-pointer hover:bg-gray-100 border-b"
                      onClick={() => selectPatient(patient)}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {patient.pet_name}
                        </span>
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
              )}

              {/* <button
                type="button"
                onClick={openModal}
                className="justify-center items-center content-center"
              >
                <i className="fa-solid fa-magnifying-glass text-sm text-white bg-myrtleGreen p-2 rounded-lg"></i>
              </button> */}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="roboto-medium">
              Motivo do Atendimento
            </label>
            <input
              type="text"
              value={appointmentReason}
              onChange={(event) => setAppointmentReason(event.target.value)}
              placeholder="Descreva o motivo do atendimento"
              className="border rounded-lg text-sm p-1 w-96 roboto-light"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="roboto-medium">
              Veterinário
            </label>
            <div className="flex flex-row gap-5">
              <select
                className="p-2 rounded-lg bg-white border text-sm"
                defaultValue=""
                value={selectedVet}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSelectedVet(e.target.value)
                }
              >
                <option disabled value={""}>
                  Selecione um veterinário
                </option>
                {vets.map((item, index) => (
                  <option key={index} value={item.vet}>
                    {item.vet} - {item.vetSpeciality}
                  </option>
                ))}
              </select>
              <button
                className="border border-darkCyan text-darkCyan hover:bg-myrtleGreen hover:text-white transition-all duration-200 ease-in-out roboto-medium text-sm rounded-md px-2 py-1"
                type="button"
                onClick={handleAddToqueue}
              >
                Atribuir atendimento
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* {isModalOpen && (
        <PatientSearcModal
          onSearch={handlePatientSearch}
          onClose={closeModal}
        />
      )} */}
    </>
  );
}
