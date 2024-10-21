"use client";

import { useState, useEffect } from "react";
import { CardTypeSchedule } from "@/app/components/ui/card/cardTypeSchedule";

interface consultasDias {
  icon: string;
  name: string;
  schedule: string;
}

export function Schedule() {
  const [consultasDia, setconsultasDia] = useState<consultasDias[]>([]);

  useEffect(() => {
    fetch("/components/data.json")
      .then((response) => response.json())
      .then((data) => setconsultasDia(data))
      .catch((error) => console.error("Erro ao carregar dados:", error));
  }, []);

  return (
    <>
      <div className="pl-32">
        <div className="flex items-center pb-5">
          <i
            className="pl-4 pr-4 fa-solid fa-calendar text-lapisLazuli text-5xl"
            aria-hidden="true"
          ></i>
          <a
            href="#"
            className="flex-1 roboto-light text-2xl flex items-center"
          >
            Agenda do Dia
          </a>
        </div>

        <div className="flex flex-row gap-4 mb-20">
          {consultasDia.map((feat, index) => (
            <CardTypeSchedule
              key={index}
              icon={feat.icon}
              name={feat.name}
              schedule={feat.schedule}
            />
          ))}
        </div>
      </div>
    </>
  );
}
