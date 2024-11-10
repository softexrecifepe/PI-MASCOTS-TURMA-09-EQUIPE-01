import { useState } from "react";

type YearsType = {
  year: string;
  date: string;
  hour: string;
  type: string;
  reason: string;
};

export default function ProfileTab() {
  // estado para a aba ativa
  const [activeTab, setActiveTab] = useState("Histórico");
  // estado para o ano selecionado
  const [selectedYear, setSelectedYear] = useState("");

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

  // para agrupar items por ano
  const groupedYears = years.reduce(
    (acc: Record<string, YearsType[]>, item: YearsType) => {
      if (!acc[item.year]) {
        acc[item.year] = []; // Inicializa o array para o ano específico
      }
      acc[item.year].push(item); // Adiciona o item ao array do ano
      return acc;
    },
    {} as Record<string, YearsType[]>
  );

  // para setar o ano atual
  const currentYear = new Date().getFullYear().toString();

  // // Dados a serem exibidos conforme o ano selecionado
  // const displayedData = selectedYear ? groupedYears[selectedYear] || [] : years;

  // função para determinar uma cor de borda de acordo com o tipo de serviço
  const getBorderColor = (type: string) => {
    const normalizedType = type.toLowerCase();

    const typeMap: Record<string, string> = {
      atendimento: "border-tuftsBlue",
      internamento: "border-auburn",
      exames: "border-redCrayola",
      prescrições: "border-grape",
      peso: "border-gamboge",
    };

    return typeMap[normalizedType] || "border-gray-400";
  };

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
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-10 py-2"
                >
                  {[currentYear, ...Object.keys(groupedYears)]
                    .filter(
                      (value, index, self) => self.indexOf(value) === index
                    )
                    .map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
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
              {Object.keys(groupedYears).map((year, index) => (
                <div key={index}>
                  {/* Exibir o ano apenas uma vez */}
                  {(selectedYear === "" || selectedYear === year) && (
                    <div>
                      <div className="py-3 text-tuftsBlue">{year}</div>
                      <div className="flex flex-col gap-4">
                        {groupedYears[year].map((item, index) => (
                          <div
                            key={index}
                            className={`flex flex-col border-l-4 ${getBorderColor(
                              item.type
                            )}`}
                          >
                            <span className="pl-3 text-gray-400 text-sm">
                              {item.date} - {item.hour}
                            </span>
                            <span className="pl-3 roboto-regular">
                              {item.type}
                            </span>
                            <span className="pl-3 roboto-light text-sm">
                              {item.reason}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Primeira linha */}
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
            {/* Segunda linha */}
            <div className="py-5 px-5">
              <div className="flex flex-row flex-wrap gap-5"></div>
            </div>
          </div>
        )}
        {activeTab === "Procedimentos" && <div>Conteúdo da Tab 2</div>}
      </div>
    </div>
  );
}
