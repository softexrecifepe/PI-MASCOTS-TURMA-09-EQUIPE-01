import { BtnWhiteBg } from "../btn/btnWhiteBg";
import { useState, useEffect } from "react";
import { AppointmentCount } from "../titles/appointmentCount";

type TableProp = {
  tHeadOne: string;
  tHeadTwo: string;
  tHeadThree: string;
  tHeadFour: string;
};

interface Appointment {
  name: string;
  description: string;
  recordNumber: string;
  weight: string;
  fisicalDescription: string;
  specie: string;
  vet: string;
  vetSpeciality: string;
  appointmentStatus: string;
}

export function TableOne({
  tHeadOne,
  tHeadTwo,
  tHeadThree,
  tHeadFour,
}: TableProp) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetch("/components/data.json")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Erro ao carregar dados:", error));
  }, []);

  return (
    <>
      <AppointmentCount count={appointments.length} />
      <div className="flex-grow">
        <table className="table-auto w-full h-full rounded-lg shadow-md">
          <thead className="bg-lihtBlue-extralight text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left roboto-regular">{tHeadOne}</th>
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
            </tr>
          </thead>

          {appointments.map((item, index) => {
            return (
              <tbody key={index} className="roboto-light p-3 hover:bg-gray-100">
                <tr>
                  <td className="flex flex-col self-start py-5 px-4">
                    <span className="text-2xl pb-1">{item.name}</span>
                    <span className="text-xs">{`${item.recordNumber}`}</span>
                    <span className="text-xs">
                      {`${item.specie}, ${item.fisicalDescription}, ${item.weight}`}
                    </span>
                  </td>
                  <td className="text-center text-sm">{item.description}</td>
                  <td className="text-center flex flex-col">
                    <span>{item.vet}</span>
                    <span className="text-gray-600 text-sm">
                      {item.vetSpeciality}
                    </span>
                  </td>
                  <td className="text-center">
                    <span
                      className={`p-2 rounded-lg roboto-regular text-sm  ${
                        item.appointmentStatus === "Em atendimento"
                          ? "bg-blue-300"
                          : "bg-gamboge-light"
                      }`}
                    >
                      {item.appointmentStatus}
                    </span>
                  </td>
                  <td>
                    <BtnWhiteBg content="Ver Atendimento"></BtnWhiteBg>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
