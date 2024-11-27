"use client";

import { useState } from "react";
import { BtnWhiteBg } from "../btn/btnWhiteBg";
// import { useState, useEffect } from "react";
import { AppointmentCount } from "../titles/appointmentCount";
import { useAppointmentQueue } from "@/app/contexts/appointmentQueueContext";

type TableProp = {
  tHeadOne: string;
  tHeadTwo: string;
  tHeadThree: string;
  tHeadFour: string;
};

// interface Appointment {
//   name: string;
//   description: string;
//   recordNumber: string;
//   weight: string;
//   fisicalDescription: string;
//   specie: string;
//   vet: string;
//   vetSpeciality: string;
//   appointmentStatus: string;
// }

export function TableOne({
  tHeadOne,
  tHeadTwo,
  tHeadThree,
  tHeadFour,
}: TableProp) {
  const { queueAppointments, removeAppointment } = useAppointmentQueue();
  // const [colorChange, setColorChange] = useState("text-black");
  const [activeIconId, setActiveIconId] = useState<string | null>(null);
  // const [appointments, setAppointments] = useState<Appointment[]>([]);

  // useEffect(() => {
  //   fetch("/components/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setAppointments(data))
  //     .catch((error) => console.error("Erro ao carregar dados:", error));
  // }, []);

  // return (
  //   <>
  //     <AppointmentCount count={queueAppointments.length} />
  //     <div className="flex-grow">
  //       <table className="table-auto w-full h-full rounded-lg shadow-md">
  //         <thead className="bg-lihtBlue-extralight text-gray-700">
  //           <tr>
  //             <th className="px-4 py-2 text-left roboto-regular">{tHeadOne}</th>
  //             <th className="px-4 py-2 text-center roboto-regular">
  //               {tHeadTwo}
  //             </th>
  //             <th className="px-4 py-2 text-center roboto-regular">
  //               {tHeadThree}
  //             </th>
  //             <th className="px-4 py-2 text-center roboto-regular">
  //               {tHeadFour}
  //             </th>
  //             <th className="px-4 py-2 text-center roboto-regular"></th>
  //           </tr>
  //         </thead>

  //         {queueAppointments.map((appointment, index) => {
  //           return (
  //             <tbody key={index} className="roboto-light p-3 hover:bg-gray-100">
  //               <tr>
  //                 <td className="flex flex-col self-start py-5 px-4">
  //                   <span className="text-2xl pb-1">
  //                     {appointment.patientNameOrPront}
  //                   </span>
  //                   <span className="text-xs">{`${appointment.patientInfo.owners_cpf} - ${appointment.patientInfo.species}`}</span>
  //                   <span className="text-xs">
  //                     {`${appointment.patientInfo.breed}, ${appointment.patientInfo.weight} ,${appointment.patientInfo.physical_characteristics}`}
  //                   </span>
  //                 </td>
  //                 <td className="text-center text-sm">
  //                   {appointment.appointmentReason}
  //                 </td>
  //                 <td className="text-center flex flex-col">
  //                   <span>{appointment.vet}</span>
  //                   <span className="text-gray-600 text-sm">
  //                     {appointment.vetSpeciality}
  //                   </span>
  //                 </td>
  //                 <td className="text-center">
  //                   {/* <span
  //                     className={`p-2 rounded-lg roboto-regular text-sm  ${
  //                       item.appointmentStatus === "Em atendimento"
  //                         ? "bg-blue-300"
  //                         : "bg-gamboge-light"
  //                     }`}
  //                   >
  //                     {item.appointmentStatus}
  //                   </span> */}
  //                 </td>
  //                 <td>
  //                   <BtnWhiteBg content="Ver Atendimento"></BtnWhiteBg>
  //                 </td>
  //               </tr>
  //             </tbody>
  //           );
  //         })}
  //       </table>
  //     </div>
  //   </>
  // );
  return (
    <>
      <AppointmentCount count={queueAppointments.length} />
      <div className="flex-grow">
        {queueAppointments.length === 0 ? (
          <p className="p-4 text-center flex flex-row justify-center items-center gap-5">
            <i className="fa-regular fa-calendar-xmark text-5xl text-gray-300"></i>
            <span>Nenhum atendimento agendado.</span>
          </p>
        ) : (
          <table className="table-auto w-full h-full rounded-lg shadow-md">
            <thead className="bg-lihtBlue-extralight text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left roboto-regular"></th>
                <th className="px-4 py-2 text-left roboto-regular">
                  {tHeadOne}
                </th>
                <th className="px-4 py-2 text-center roboto-regular">
                  {tHeadTwo}
                </th>
                <th className="px-4 py-2 text-center roboto-regular">
                  {tHeadThree}
                </th>
                <th className="px-4 py-2 text-center roboto-regular">
                  {tHeadFour}
                </th>
                <th className="px-4 py-2 text-center roboto-regular"></th>
                <th className="px-4 py-2 text-center roboto-regular"></th>
              </tr>
            </thead>
            <tbody>
              {queueAppointments.map((appointment, index) => (
                <tr
                  key={appointment.id}
                  className="roboto-light p-3 hover:bg-gray-100"
                >
                  <td className="text-center">{index + 1}</td>
                  <td className="flex flex-col self-start py-5 px-4">
                    <span className="text-2xl pb-1">
                      {appointment.patientNameOrPront}
                    </span>
                    <span className="text-xs">
                      {`${appointment.patientInfo.owners_cpf} - ${appointment.patientInfo.species}`}
                    </span>
                    <span className="text-xs">
                      {`${appointment.patientInfo.breed}, ${appointment.patientInfo.weight}, ${appointment.patientInfo.physical_characteristics}`}
                    </span>
                  </td>
                  <td className="text-center text-sm">
                    {appointment.appointmentReason}
                  </td>
                  <td className="text-center flex flex-col">
                    <span>{appointment.vet}</span>
                    <span className="text-gray-600 text-sm">
                      {appointment.vetSpeciality}
                    </span>
                  </td>
                  <td className="text-center">
                    <span
                      className={`p-2 rounded-lg roboto-regular text-sm  ${
                        appointment.status === "Próximo"
                          ? "bg-blue-300"
                          : "bg-gamboge-light"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td>
                    <i
                      className={`fa-solid fa-trash text-center ${
                        activeIconId === appointment.id
                          ? "text-red-600"
                          : "text-black"
                      }`}
                      onClick={() => removeAppointment(appointment.id)}
                      onMouseEnter={() => setActiveIconId(appointment.id)}
                      onMouseLeave={() => setActiveIconId(null)}
                    ></i>
                  </td>
                  <td className="px-3">
                    <BtnWhiteBg content="Atender" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
