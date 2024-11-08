import { useState } from "react";

type YearsType = {
  year: string;
  date: string;
  hour: string;
  type: string;
  reason: string;
};

export default function ProfileTab() {
  const [activeTab, setActiveTab] = useState("Histórico");

  const years: YearsType[] = [
    {
      year: "2024",
      date: "24/09",
      hour: "11:00",
      type: "Atendimento",
      reason: "Consulta com veterinário",
    },
    {
      year: "2024",
      date: "11/05",
      hour: "11:00",
      type: "internamento",
      reason: "Alta do internamento - Paciente liberado",
    },
    {
      year: "2024",
      date: "10/05",
      hour: "11:00",
      type: "Exames",
      reason: "Hemograma Completo",
    },
    {
      year: "2024",
      date: "09/05",
      hour: "11:00",
      type: "Internamento",
      reason: "Admitido na internação",
    },
    {
      year: "2023",
      date: "04/11",
      hour: "10:00",
      type: "Atendimento",
      reason: "Consulta com veterinário",
    },
  ];

  return (
    <div className="border w-full p-4 bg-white border-b-2 shadow-md rounded">
      <div className="flex space-x-4 border-b w-full">
        <button
          className={` tab-btn py-2 px-4 ${
            activeTab === "Histórico"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Histórico")}
        >
          Histórico
        </button>
        <button
          className={`tab-btn py-2 px-4 ${
            activeTab === "Procedimentos"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Procedimentos")}
        >
          Procedimentos
        </button>
      </div>
      <div className="mt-4">
        <div className="py-3 flex flex-row justify-between content-center border-b">
          {activeTab === "Histórico" && (
            <div>
              <form>
                <select value="" className="px-10 py-2">
                  {years.map((option, index) => (
                    <option key={index}>{option.year}</option>
                  ))}
                </select>
              </form>
            </div>
          )}
          <div
            className={`flex flex-row gap-5 ${
              activeTab !== "Histórico"
                ? "w-full justify-end"
                : "justify-between"
            }`}
          >
            <button className="border border-myrtleGreen text-myrtleGreen px-5 py-1">
              Enviar Mensagem
            </button>
            <button className="bg-myrtleGreen text-white px-5 py-1">
              Editar Perfil
            </button>
          </div>
        </div>
        {activeTab === "Histórico" && (
          <div className="flex flex-row">
            <div className="border-r w-fit pr-10 flex flex-col">
              {years.map((item, index) => (
                <div key={index}>
                  <div className="py-3 text-tuftsBlue">{item.year}</div>
                  <div className="flex flex-col border-l-4 border-tuftsBlue">
                    <span className="pl-3">
                      {item.date} - {item.hour}
                    </span>
                    <span className="pl-3">{item.type}</span>
                    <span className="pl-3">{item.reason}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* <!-- Primeira linha --> */}
            <div className="py-10 px-5">
              <div className="flex flex-row flex-wrap gap-5">
                <div className="flex flex-col flex-wrap gap-3 bg-tuftsBlue px-10 py-5 rounded-tl-xl rounded-br-xl justify-center items-center">
                  <i className="fa-solid fa-suitcase-medical text-white text-3xl"></i>
                  <span className="text-white text-lg">Atendimento</span>
                </div>
                <div className="flex flex-col gap-3 bg-auburn px-10 py-5 rounded-tl-xl rounded-br-xl justify-center items-center">
                  <i className="fa-solid fa-file-medical text-white text-3xl"></i>
                  <span className="text-white text-lg">Internamento</span>
                </div>
                <div className="flex flex-col flex-wrap gap-3 bg-tuftsBlue px-10 py-5 rounded-tl-xl rounded-br-xl justify-center items-center">
                  <i className="fa-solid fa-suitcase-medical text-white text-3xl"></i>
                  <span className="text-white text-lg">Atendimento</span>
                </div>
                <div className="flex flex-col gap-3 bg-auburn px-10 py-5 rounded-tl-xl rounded-br-xl justify-center items-center">
                  <i className="fa-solid fa-file-medical text-white text-3xl"></i>
                  <span className="text-white text-lg">Internamento</span>
                </div>
              </div>
            </div>
            {/* <!-- Segunda linha --> */}
            <div className="py-5 px-5">
              <div className="flex flex-row  flex-wrap gap-5"></div>
            </div>
          </div>
        )}
        {activeTab === "Procedimentos" && <div>Conteúdo da Tab 2</div>}
      </div>
    </div>
  );
}
