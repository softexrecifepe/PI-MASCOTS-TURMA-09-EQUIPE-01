import React from "react";

export interface MonthlyMarking {
  name: string;
  color: string;
}

export interface MonthlyScheduleItem {
  day: string;
  marking: { name: string; color: string }[] | null;
}

export interface MonthlyScheduleProps {
  schedule: MonthlyScheduleItem[];
}

export const MonthlySchedule: React.FC<MonthlyScheduleProps> = ({ schedule }) => {
  // Verificar se o componente recebe os dados corretamente
  console.log("Dados recebidos em MonthlySchedule:", schedule);

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg w-full">
      <div className="grid grid-cols-7 gap-0">
			{schedule.map((item, index) => {
				console.log("Dia processado:", item.day, "Marking:", item.marking);
				return (
					<div key={index} className="border p-2 h-40">
						<div className="text-sm font-bold">{item.day}</div>
						<div className="mt-2">
							{Array.isArray(item.marking) && item.marking.length > 0 &&
								item.marking.map((marking, i) => {
									console.log("Renderizando marking para o dia:", item.day, marking);
									return (
										<div
											key={i}
											className={`rounded-lg px-2 py-1 mb-1 ${marking.color} text-white`}
										>
											{marking.name}
										</div>
									);
								})}
						</div>
					</div>
				);
			})}
      </div>
    </div>
  );
};