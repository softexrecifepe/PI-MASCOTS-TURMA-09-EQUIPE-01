import React from "react";

interface DayScheduleItem {
  time: string;
  marking?: string | null; // Marcação opcional
  color?: string;
}

interface DayScheduleProps {
  schedule: DayScheduleItem[];
}

const generateDefaultSchedule = (): DayScheduleItem[] => {
  const defaultSchedule: DayScheduleItem[] = [];
  for (let hour = 8; hour <= 22; hour++) {
    const time = `${hour.toString().padStart(2, "0")}:00`;
    defaultSchedule.push({ time, marking: null });
  }
  return defaultSchedule;
};

const mergeSchedules = (
  defaultSchedule: DayScheduleItem[],
  userSchedule: DayScheduleItem[]
): DayScheduleItem[] => {
  const scheduleMap = new Map(defaultSchedule.map((item) => [item.time, item]));
  userSchedule.forEach((item) => {
    if (scheduleMap.has(item.time)) {
      scheduleMap.set(item.time, item);
    }
  });
  return Array.from(scheduleMap.values());
};

const DaySchedule: React.FC<DayScheduleProps> = ({ schedule }) => {
  const defaultSchedule = generateDefaultSchedule();
  const finalSchedule = mergeSchedules(defaultSchedule, schedule);

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg w-[450px]">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-50">
            <th className="border-b p-2 text-left w-24">Usuário 1</th>
            <th className="border-b p-2 text-left text-sm text-green-600 roboto-light tracking-wider">
              Veterinário
            </th>
          </tr>
        </thead>
        <tbody>
          {finalSchedule.map((item, index) => (
            <tr key={index}>
              {/* Horário na coluna esquerda */}
              <td className="border-b p-2 text-left roboto-light bg-gray-100">
                {item.time}
              </td>
              {/* Marcação na coluna direita */}
              <td className="border-b p-2">
                {item.marking ? (
                  <div
                    className={`${item.color} roboto-medium text-white rounded-lg px-2 py-1`}
                  >
                    {item.marking}
                  </div>
                ) : (
                  <div> </div> // Espaço vazio se não houver marcação
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaySchedule;