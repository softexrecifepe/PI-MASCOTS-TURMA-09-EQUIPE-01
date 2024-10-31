"use client";
import { ReactNode, useContext } from "react";
import { useState, createContext } from "react";

type PatientInfo = {
  owners_cpf: string;
  species: string;
  breed: string;
  weight: string;
  physical_characteristics: string;
};

type Atendimento = {
  patientNameOrPront: string;
  patientInfo: PatientInfo;
  appointmentReason: string;
  vet: string;
  vetSpeciality: string; // Adiciona a especialidade do veterinário
};

type AppointmentQueueContextType = {
  queueAppointments: Atendimento[]; // Fila de atendimentos
  addAppointment: (atendimento: Atendimento) => void; // Função para adicionar atendimentos
};

const AppointmentQueueContext = createContext<
  AppointmentQueueContextType | undefined
>(undefined);

export function AppointmentQueueProvider({
  children,
}: {
  children: ReactNode;
}) {
  // criando o estado
  const [queueAppointments, setQueueAppointments] = useState<Atendimento[]>([]);

  // criando uma função para adicionar a fila
  const addAppointment = (atendimento: Atendimento) => {
    setQueueAppointments((prev) => [...prev, atendimento]);
  };

  return (
    // provedor do contexto
    <AppointmentQueueContext.Provider
      value={{ queueAppointments, addAppointment }}
    >
      {children}
    </AppointmentQueueContext.Provider>
  );
}

export function useAppointmentQueue() {
  const context = useContext(AppointmentQueueContext);
  if (!context) {
    throw new Error(
      "useAppointmentQueue deve ser usado dentro de um AppointmentQueueProvider"
    );
  }
  return context;
}
