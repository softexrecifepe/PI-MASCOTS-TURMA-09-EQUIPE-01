"use client";

import { useEffect, useState } from "react";
import { CardTypePatient } from "../ui/card/cardTypepatient";

interface patient {
  name: string;
  admissionDate: string;
  exitDate: string;
}

export default function Patient() {
  const [patient, setpatient] = useState<patient[]>([]);

  useEffect(() => {
    fetch("/components/data.json")
      .then((response) => response.json())
      .then((data) => setpatient(data))
      .catch((error) => console.error("Erro ao carregar dados:", error));
  }, []);

  return (
    <>
      <div className="pl-32">
        <div className="flex items-center pb-5">
          <i
            className="pl-4 pr-4 fa-solid fa-file-medical text-red-700 text-5xl"
            aria-hidden="true"
          ></i>
          <a
            href="#" //ATT CAMINHO DEPOIS QUE AS PAG ESTIVEREM FEITAS
            className="flex-1 roboto-light text-2xl flex items-center"
          >
            Acompanhamento de pacientes internados
          </a>
        </div>

        <div className="flex flex-row gap-4 mb-20">
          {patient.map((feat, index) => (
            <CardTypePatient
              key={index}
              name={feat.name}
              admissionDate={feat.admissionDate}
              exitDate={feat.exitDate}
            />
          ))}
        </div>
      </div>
    </>
  );
}
