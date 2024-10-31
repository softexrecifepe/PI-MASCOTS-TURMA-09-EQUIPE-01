// import { BtnColorBg } from "../btn/btnColorBg";
import { useState } from "react";
import { PatientSearcModal } from "../modal/patientSearchModal";
import { useAppointmentQueue } from "@/app/contexts/appointmentQueueContext";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVet, setSelectedVet] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");
  const { addAppointment } = useAppointmentQueue();

  // para o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // para a busca de pacientes no modal
  const handlePatientSearch = (
    name: string,
    additionalInfo: {
      owners_cpf: string;
      species: string;
      breed: string;
      weight: string;
      physical_characteristics: string;
    }
  ) => {
    setPatientNameOrPront(name);
    setPatientInfo(additionalInfo);
    closeModal();
  };

  // lista de vets
  const vets = [
    { vet: "Dra. Camilla Barros", vetSpeciality: "Veterinária Geral" },
    { vet: "Dra. Izabelle Alves", vetSpeciality: "Veterinária Geral" },
    { vet: "Dr. Lucas Galvão", vetSpeciality: "Nutrição Veterinária" },
    { vet: "Dr. Lauro", vetSpeciality: "Cirurgia Veterinária" },
    { vet: "Dr. Augusto Dantas", vetSpeciality: "Enfermaria Veterinária" },
  ];

  const selectedVetInfo = vets.find((vet) => vet.vet === selectedVet);

  // adicionar a fila
  const handleAddToqueue = () => {
    const atendimentos = {
      patientNameOrPront,
      patientInfo,
      appointmentReason,
      vet: selectedVet,
      vetSpeciality: selectedVetInfo?.vetSpeciality || "",
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
            <div className="flex flex-row gap-3">
              <input
                type="text"
                value={patientNameOrPront}
                onChange={(e) => setPatientNameOrPront(e.target.value)}
                className="border rounded-lg text-sm p-1 w-96 roboto-light"
                placeholder="Digite o cpf ou nome do paciente aqui"
              />

              <button
                type="button"
                onClick={openModal}
                className="justify-center items-center content-center"
              >
                <i className="fa-solid fa-magnifying-glass text-sm text-white bg-myrtleGreen p-2 rounded-lg"></i>
              </button>
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
            <div className="flex flex-row gap-3">
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
              <button type="button" onClick={handleAddToqueue}>
                Atribuir atendimento
              </button>
              {/* <BtnColorBg content="Atribuir Atendimento" /> */}
            </div>
          </div>
        </div>
      </form>
      {isModalOpen && (
        <PatientSearcModal
          onSearch={handlePatientSearch}
          onClose={closeModal}
        />
      )}
    </>
  );
}
