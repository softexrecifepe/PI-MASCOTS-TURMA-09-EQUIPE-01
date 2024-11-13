import React from "react";

interface DayScheduleItem {
  time: string;
  commitment: string | null;
  color?: string;
}

interface DayScheduleProps {
  schedule: DayScheduleItem[];
}

const DaySchedule: React.FC<DayScheduleProps> = ({ schedule }) => {
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
          {schedule.map((item, index) => (
            <tr key={index}>
              <td className="border-b p-2 text-left roboto-light bg-gray-100">
                {item.time}
              </td>
              <td className="border-b p-2">
                {item.commitment ? (
                  <div
                    className={`${item.color} roboto-medium text-white rounded-lg px-2 py-1`}
                  >
                    {item.commitment}
                  </div>
                ) : (
                  <div> </div>
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