"use client";

// import { useState, useEffect } from "react";
import { CardTypeAppointments } from "../ui/card/cardTypeAppointments";
// import { useAppointmentQueue } from "@/app/contexts/appointmentQueueContext";

// interface Appointment {
//   name: string;
//   description: string;
//   recordNumber: string;
// }

export function Appointments() {
  // const [appointments, setAppointments] = useState<Appointment[]>([]);

  // useEffect(() => {
  //   fetch("/components/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setAppointments(data))
  //     .catch((error) => console.error("Erro ao carregar dados:", error));
  // }, []);

  // const { queueAppointments } = useAppointmentQueue();

  return (
    <>
      <div className="pl-32">
        <div className="flex items-center pb-5">
          <i
            className="pl-4 pr-4 fa-solid fa-suitcase-medical text-lapisLazuli text-5xl"
            aria-hidden="true"
          ></i>
          <a
            href="#"
            className="flex-1 roboto-light text-2xl flex items-center"
          >
            Atendimentos
          </a>
        </div>

        <div className="flex flex-row gap-4 mb-20">
          <CardTypeAppointments />
        </div>
      </div>
    </>
  );
}
