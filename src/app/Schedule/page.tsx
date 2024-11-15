"use client"
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaCalendar } from "react-icons/fa";
import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";
import DaySchedule from "../components/ui/tablesSchedule/daySchedule";
import MonthlySchedule from "../components/ui/tablesSchedule/monthlySchedule";

const Schedule = () => {
  const [view, setView] = useState("day");
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const daySchedule = [
    { time: "08 h", commitment: null },
    { time: "09 h", commitment: null },
    { time: "10 h", commitment: null },
    { time: "11 h", commitment: null },
    { time: "12 h", commitment: null },
    { time: "13 h", commitment: null },
    {
      time: "14 h",
      commitment: "Atendimento - Doguinho Silva",
      color: "bg-blue-500",
    },
    {
      time: "15 h",
      commitment: "Internamento - Doguinho Silva",
      color: "bg-[#9E2C39]",
    },
    { time: "16 h", commitment: null },
    {
      time: "17 h",
      commitment: "Exame - Doguinho Silva",
      color: "bg-[#EA3E51]",
    },
    { time: "18 h", commitment: null },
    { time: "19 h", commitment: null },
    { time: "20 h", commitment: null },
    { time: "21 h", commitment: null },
    { time: "22 h", commitment: null },
    { time: "23 h", commitment: null },
  ];
  const monthlySchedule = [
    { day: "01", commitments: null },
    { day: "02", commitments: null },
    { day: "03", commitments: null },
    { day: "04", commitments: null },
    { day: "05", commitments: null },
    { day: "06", commitments: null },
    { day: "07", commitments: null },
    { day: "08", commitments: null },
    { day: "09", commitments: null },
    { day: "10", commitments: null },
    { day: "11", commitments: null },
    { day: "12", commitments: null },
    { day: "13", commitments: null },
    { day: "14", commitments: null },
    { day: "15", commitments: null },
    { day: "16", commitments: null },
    { day: "17", commitments: null },
    { day: "18", commitments: null },
    { day: "19", commitments: null },
    { day: "20", commitments: null },
    { day: "21", commitments: null },
    { day: "22", commitments: null },
    { day: "23", commitments: null },
    {
      day: "24",
      commitments: [
        { name: "Atendimento", color: "bg-blue-500" },
        { name: "Internamento", color: "bg-[#9E2C39]" },
        { name: "Exame", color: "bg-[#EA3E51]" },
      ],
    },
    { day: "25", commitments: null },
    { day: "26", commitments: null },
    { day: "27", commitments: null },
    { day: "28", commitments: null },
    { day: "29", commitments: null },
    { day: "30", commitments: null },
    { day: "31", commitments: null },
  ];

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-100 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
          <div className="container mx-auto">
            <Link
              href="/dashboard"
              className="flex items-center text-blue-600 hover:underline mb-4"
            >
              <FaArrowLeft className="mr-2 text-gray-900" />
              <span className="text-green-600 ">Voltar para a dashboard</span>
            </Link>

            <div className="flex items-center mb-6 ">
              <FaCalendar className="text-3xl text-blue-600 mr-4" />
              <h1 className="roboto-light text-2xl">Agenda Diária</h1>
            </div>

            <div className="flex items-center justify-between mb-6 w-[450px]">
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
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded quicksand-semibold">
                  Ano
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button>
                  <FaArrowLeft />
                </button>
                <span>{currentDate}</span>
                <button>
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {view === "day" ? (
              <DaySchedule schedule={daySchedule} />
            ) : (
              <MonthlySchedule schedule={monthlySchedule} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Schedule;