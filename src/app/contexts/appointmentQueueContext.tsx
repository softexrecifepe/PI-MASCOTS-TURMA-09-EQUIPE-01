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
  id: string;
  patientNameOrPront: string;
  patientInfo: PatientInfo;
  appointmentReason: string;
  vet: string;
  vetSpeciality: string;
  status: "Próximo" | "Aguardando"; // Status do atendimento
};

type AppointmentQueueContextType = {
  queueAppointments: Atendimento[]; // Fila de atendimentos
  addAppointment: (atendimento: Omit<Atendimento, "id">) => void; // Função para adicionar atendimentos
  removeAppointment: (id: string) => void;
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
  const addAppointment = (atendimento: Omit<Atendimento, "id">) => {
    const newAppointment: Atendimento = {
      ...atendimento,
      id: Date.now().toString(), // Gera um ID único
      status: queueAppointments.length === 0 ? "Próximo" : "Aguardando",
    };
    setQueueAppointments((prev) => [...prev, newAppointment]);
  };

  const removeAppointment = (id: string) => {
    setQueueAppointments((prev) => {
      const updatedQueue = prev.filter((appointment) => appointment.id !== id);

      // Atualiza o status do primeiro item restante na fila para "Próximo"
      if (updatedQueue.length > 0) {
        updatedQueue[0].status = "Próximo";
      }

      return updatedQueue;
    });
  };

  return (
    // provedor do contexto
    <AppointmentQueueContext.Provider
      value={{ queueAppointments, addAppointment, removeAppointment }}
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
