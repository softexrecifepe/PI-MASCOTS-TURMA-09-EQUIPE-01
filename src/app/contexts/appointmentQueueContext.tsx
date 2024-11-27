"use client";
import { ReactNode, useContext, useEffect } from "react";
import { useState, createContext } from "react";

// inicio da definição dos tipos

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
  status: "Próximo" | "Aguardando";
};

type AppointmentQueueContextType = {
  queueAppointments: Atendimento[]; // Fila de atendimentos
  addAppointment: (atendimento: Omit<Atendimento, "id">) => void; // Função para adicionar atendimentos
  removeAppointment: (id: string) => void;
}; // final da definição dos tipos

// criando o contexto
const AppointmentQueueContext = createContext<
  AppointmentQueueContextType | undefined
>(undefined);

export function AppointmentQueueProvider({
  children,
}: {
  children: ReactNode;
}) {
  // criando o estado e inicializa com um array vazio
  const [queueAppointments, setQueueAppointments] = useState<Atendimento[]>([]);

  // Carrega os dados do localStorage apenas no cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAppointments = localStorage.getItem("appointments");
      if (storedAppointments) {
        setQueueAppointments(JSON.parse(storedAppointments));
      }
    }
  }, []);

  // Armazena os atendimentos no localStorage sempre que eles mudam
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("appointments", JSON.stringify(queueAppointments));
      } catch (error) {
        console.error("Failed to save appointments to localStorage:", error);
      }
    }
  }, [queueAppointments]);

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
