"use client";

// import { useRouter } from "next/router";
// import { useState } from "react";
import { useMedicalAppointmentContext } from "@/app/contexts/medicalAppointment";

export default function CardTypeAppointmentProfile() {
  //   const router = useRouter();
  const { currentPatientId } = useMedicalAppointmentContext();
  // Pega o ID diretamente dos parâmetros da URL
  //   const { id } = router.query;

  // Função para lidar com o clique no botão
  const handleNavigateToPatient = () => {
    const patientId = currentPatientId; // Usa o `currentPatientId` ou o `id` dos params da rota
    if (patientId) {
      // Adiciona a rota dinamicamente com o ID do paciente
    } else {
      console.error("O ID do paciente está nulo.");
    }
  };
  return (
    <>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        <div className="flex flex-col flex-wrap gap-3 bg-tuftsBlue w-52 px-10 py-5 rounded-tl-xl rounded-br-xl justify-center items-center">
          <button onClick={handleNavigateToPatient}>atender</button>
        </div>
        <div className="flex flex-col gap-3 bg-auburn px-10 py-5 w-52 rounded-tl-xl rounded-br-xl justify-center items-center"></div>
        <div className="flex flex-col flex-wrap gap-3 bg-redCrayola w-52 px-10 py-5 rounded-tl-xl rounded-br-xl justify-center items-center">
          <i className="fa-solid fa-flask text-white text-3xl"></i>
          <span className="text-white text-lg">Exames</span>
        </div>
        <div className="flex flex-col gap-3 bg-grape px-10 py-5 w-52 rounded-tl-xl rounded-br-xl justify-center items-center">
          <i className="fa-solid fa-prescription-bottle-medical text-white text-3xl"></i>
          <span className="text-white text-lg">Prescrições</span>
        </div>
        <div className="flex flex-col gap-3 bg-gamboge px-10 py-5 w-52 rounded-tl-xl rounded-br-xl justify-center items-center">
          <i className="fa-solid fa-weight-scale text-white text-3xl"></i>
          <span className="text-white text-lg">Peso</span>
        </div>
      </div>
    </>
  );
}
