"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaCalendar, FaPlus } from "react-icons/fa";
import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";
import DaySchedule from "../components/ui/tablesSchedule/daySchedule";
import {
  MonthlySchedule,
  MonthlyScheduleItem,
} from "../components/ui/tablesSchedule/monthlySchedule";
import ScheduleModal from "./ScheduleModal";

const Schedule = () => {
  const [view, setView] = useState<"day" | "month">("day");
  const [daySchedule, setDaySchedule] = useState<any[]>([]);
  const [monthlySchedule, setMonthlySchedule] = useState<MonthlyScheduleItem[]>([]);

	// estados para modal de criação de compromisso na agenda
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [markingType, setMarkingType] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [hour, setHour] = useState<string>("");

	// data atual formatada
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

	// extrair o mês atual
  const parts = currentDate.split(" de ");
  const [currentMonth, setCurrentMonth] = useState(parts[1].toLowerCase());

  // Função para buscar na agenda 
  const fetchSchedule = async () => {
    try {
      console.log("Buscando dados do mês atual...");
      const response = await fetch("http://localhost:4000/schedule");
      if (!response.ok) {
        throw new Error("Erro ao buscar o schedule.");
      }
      const data = await response.json();

      const monthData = data[currentMonth];
      if (monthData) {
        setMonthlySchedule(monthData);
        console.log("Dados do mês atual retornados pela API:", monthData);
      } else {
        console.error(`Mês "${currentMonth}" não encontrado no schedule.`);
      }
    } catch (error) {
      console.error("Erro ao buscar a agenda:", error);
      alert("Erro ao buscar a agenda. Tente novamente.");
    }
  };

  // useEffect para carregar os dados da agenda
  useEffect(() => {
    fetchSchedule();
  }, [currentMonth]);

  // Navegação entre os meses
  const monthsArray = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "augusto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

	// função para alternar entre os meses
  const handleMonthChange = (direction: "prev" | "next") => {
    const currentIndex = monthsArray.indexOf(currentMonth);

    if (direction === "prev" && currentIndex > 0) {
      setCurrentMonth(monthsArray[currentIndex - 1]);
    } else if (direction === "next" && currentIndex < monthsArray.length - 1) {
      setCurrentMonth(monthsArray[currentIndex + 1]);
    }
  };

  // Função para capitalizar a primeira letra
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

	// função para criar um novo compromisso
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

		// estrutura do compromisso
    const newMarking = {
      name: capitalizeFirstLetter(markingType),
      color:
        markingType === "atendimento"
          ? "bg-blue-500"
          : markingType === "internamento"
          ? "bg-red-500"
          : "bg-green-500",
      hour,
    };

    try {
			// busca a agenda no JSON
      const response = await fetch("http://localhost:4000/schedule");
      if (!response.ok) throw new Error("Erro ao buscar a agenda.");

      const data = await response.json();

			// valida o mês e o dia
      const monthData = data[month];
      if (!monthData) return alert(`Mês "${month}" não encontrado.`);
      const dayData = monthData.find((d: { day: string }) => d.day === day);
      if (!dayData) return alert(`Dia "${day}" não encontrado.`);

      if (!dayData.marking) dayData.marking = [newMarking];
      else dayData.marking.push(newMarking);

      console.log("Estrutura atualizada para o mês:", monthData);

      const putResponse = await fetch(`http://localhost:4000/schedule`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, [month]: monthData }),
      });

      if (!putResponse.ok) throw new Error("Erro ao atualizar a agenda.");

      console.log("Compromisso adicionado com sucesso!");
      setModalOpen(false);
      setMarkingType("");
      setDay("");
      setMonth("");
      setHour("");

      // Atualizar a tabela automaticamente
      fetchSchedule();
    } catch (error) {
      console.error("Erro ao salvar compromisso:", error);
      alert(
        "Erro ao salvar compromisso! Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-100 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
          <div className="container mx-auto">
            {/* Link para Dashboard e Data Atual */}
            <div className="flex justify-between items-center mb-6">
              <Link
                href="/dashboard"
                className="flex items-center text-blue-600 hover:underline"
              >
                <FaArrowLeft className="mr-2 text-blue-600" size={16} />
                <span className="text-blue-600">Voltar para a dashboard</span>
              </Link>
              <div className="bg-blue-100 text-blue-700 px-4 py-2 shadow rounded">
                {currentDate}
              </div>
            </div>

            <div className="flex items-center mb-6">
              <FaCalendar className="text-3xl text-blue-600 mr-4" />
              <h1 className="roboto-light text-2xl">Agenda</h1>
            </div>

            <div className="flex items-baseline gap-x-2  mb-6 w-[450px]">
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded quicksand-semibold ${
                    view === "day"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                  onClick={() => setView("day")}
                >
                  Dia
                </button>
                <button
                  className={`px-4 py-2 rounded quicksand-semibold ${
                    view === "month"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                  onClick={() => setView("month")}
                >
                  Mês
                </button>
              </div>

              {/* Condicional para exibir controles de mês */}
              {view === "month" && (
                <div className="flex items space-x-0">
                  <button
                    onClick={() => handleMonthChange("prev")}
                    className="px-3 py-1 bg-blue-400 text-white rounded-l quicksand-semibold"
                  >
                    -
                  </button>
                  <div className="px-4 py-1 bg-blue-600 text-white quicksand-semibold text-center">
                    {capitalizeFirstLetter(currentMonth)}
                  </div>
                  <button
                    onClick={() => handleMonthChange("next")}
                    className="px-3 py-1 bg-blue-400 text-white rounded-r quicksand-semibold"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>

          {view === "day" ? (
            <DaySchedule schedule={daySchedule} />
          ) : (
            <MonthlySchedule schedule={monthlySchedule} />
          )}

          <ScheduleModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            markingType={markingType}
            setMarkingType={setMarkingType}
            day={day}
            setDay={setDay}
            month={month}
            setMonth={setMonth}
            hour={hour}
            setHour={setHour}
            handleSubmit={handleSubmit}
          />

          <div className="fixed bottom-4 right-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#1E5185] text-white rounded-lg w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#15426D] focus:outline-none"
            >
              <FaPlus className="text-xl" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Schedule;