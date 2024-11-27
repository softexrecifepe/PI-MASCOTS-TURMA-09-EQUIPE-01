"use client";

import { TableOne } from "@/app/components/ui/tables/table";
// import { useState, useEffect } from "react";
// import { useAppointmentQueue } from "@/app/contexts/appointmentQueueContext";

export default function ShowAppointmentsList() {
  // const { queueAppointments } = useAppointmentQueue();
  // const [appointments, setAppointments] = useState(queueAppointments);

  // useEffect(() => {
  //   // Atualiza a lista de atendimentos sempre que queueAppointments mudar
  //   setAppointments(queueAppointments);
  // }, [queueAppointments]);

  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-bold mb-4">Lista de Atendimentos</h1>
    //   {queueAppointments.length === 0 ? (
    //     <p>Nenhum atendimento agendado.</p>
    //   ) : (
    //     <table className="table-auto w-full">
    //       <thead>
    //         <tr>
    //           <th className="px-4 py-2">Nome do Paciente</th>
    //           <th className="px-4 py-2">Veterinário</th>
    //           <th className="px-4 py-2">Razão do Atendimento</th>
    //           <th className="px-4 py-2">Status</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {queueAppointments.map((appointment) => (
    //           <tr key={appointment.id}>
    //             <td className="border px-4 py-2">
    //               {appointment.patientNameOrPront}
    //             </td>
    //             <td className="border px-4 py-2">{appointment.vet}</td>
    //             <td className="border px-4 py-2">
    //               {appointment.appointmentReason}
    //             </td>
    //             <td className="border px-4 py-2">{appointment.status}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   )}
    // </div>
    <div className="py-5 px-5">
      <TableOne
        tHeadOne="Nome do Paciente"
        tHeadTwo="Motivo do Atendimento"
        tHeadThree="Veterinário Responsável"
        tHeadFour="Status do atendimento"
      />
    </div>
  );
}
