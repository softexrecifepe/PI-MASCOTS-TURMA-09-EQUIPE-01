import React from "react";

interface ScheduleModalProps {
	day: string;
	hour: string;
	month: string;
	modalOpen: boolean;
	markingType: string;
	setDay: (day: string) => void;
	setHour: (hour: string) => void;
	setMonth: (month: string) => void;
  setModalOpen: (open: boolean) => void;
  setMarkingType: (type: string) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({
  day,
	hour,
	month,
	modalOpen,
	markingType,
	setDay,
	setHour,
	setMonth,
	handleSubmit,
	setModalOpen,
  setMarkingType,  
}) => {
  if (!modalOpen) return null;

  // Função para capturar dia, mês e hora no formato correto
  const handleDateChange = (value: string) => {
    const [date, time] = value.split("T"); // Divide em data (YYYY-MM-DD) e hora (HH:mm)
    const [_, monthNumber, day] = date.split("-"); // Extrai mês e dia (ignora o ano)

    // Usando switch para determinar o nome do mês
    let formattedMonth = "";
    switch (monthNumber) {
      case "01":
        formattedMonth = "janeiro";
        break;
      case "02":
        formattedMonth = "fevereiro";
        break;
      case "03":
        formattedMonth = "março";
        break;
      case "04":
        formattedMonth = "abril";
        break;
      case "05":
        formattedMonth = "maio";
        break;
      case "06":
        formattedMonth = "junho";
        break;
      case "07":
        formattedMonth = "julho";
        break;
      case "08":
        formattedMonth = "agosto";
        break;
      case "09":
        formattedMonth = "setembro";
        break;
      case "10":
        formattedMonth = "outubro";
        break;
      case "11":
        formattedMonth = "novembro";
        break;
      case "12":
        formattedMonth = "dezembro";
        break;
      default:
        console.error("Mês inválido fornecido.");
        return; // Não continua se o mês for inválido
    }

    console.log(`Data processada: Dia ${day}, Mês ${formattedMonth}, Hora ${time}`);

    setDay(day); // Atualiza o estado do dia
    setMonth(formattedMonth); // Atualiza o estado do mês
    setHour(time); // Atualiza o estado da hora
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <h2 className="text-xl font-semibold mb-4">Agendar Compromisso</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Tipo de Compromisso */}
          <div>
            <label
              htmlFor="markingType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tipo de Compromisso
            </label>
            <select
              id="markingType"
              value={markingType}
              onChange={(e) => setMarkingType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Selecione o tipo
              </option>
              <option value="atendimento">Atendimento</option>
              <option value="internamento">Internamento</option>
              <option value="exame">Exame</option>
            </select>
          </div>

          {/* Data e Hora */}
          <div>
            <label
              htmlFor="dateTime"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Data e Hora
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              onChange={(e) => handleDateChange(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Botões */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Agendar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;