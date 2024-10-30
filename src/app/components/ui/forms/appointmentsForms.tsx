import { BtnColorBg } from "../btn/btnColorBg";
import { useState } from "react";
import { PatientSearcModal } from "../modal/patientSearchModal";

export function FormAppointment() {
  const [patientNameOrPront, setPatientNameOrPront] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePatientSearch = (name: string) => {
    setPatientNameOrPront(name);
    closeModal();
  };

  const vets = [
    { vet: "Dra. Camilla Barros", vetSpeciality: "Veterinária Geral" },
    { vet: "Dra. Izabelle Alves", vetSpeciality: "Veterinária Geral" },
    { vet: "Dr. Lucas Galvão", vetSpeciality: "Nutrição Veterinária" },
    { vet: "Dr. Lauro", vetSpeciality: "Cirurgia Veterinária" },
    { vet: "Dr. Augusto Dantas", vetSpeciality: "Enfermaria Veterinária" },
  ];
  return (
    <>
      <form className="flex flex-col gap-8 border shadow-md py-5 px-5 rounded-lg">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="roboto-medium">
              Nº de prontuário ou nome do paciente
            </label>
            <div className="flex flex-row gap-3">
              <input
                type="text"
                value={patientNameOrPront}
                onChange={(e) => setPatientNameOrPront(e.target.value)}
                className="border rounded-lg text-sm p-1 w-96 roboto-light"
                placeholder="PRT-00000 ou nome do paciente"
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
              <BtnColorBg content="Atribuir Atendimento" />
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
