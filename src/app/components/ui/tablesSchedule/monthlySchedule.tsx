import React from "react";

interface MonthlyCommitment {
  name: string;
  color: string;
}

interface MonthlyScheduleItem {
  day: string;
  commitments: MonthlyCommitment[] | null;
}

interface MonthlyScheduleProps {
  schedule: MonthlyScheduleItem[];
}

const MonthlySchedule: React.FC<MonthlyScheduleProps> = ({ schedule }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg w-full">
      <div className="grid grid-cols-7 gap-0">
        {schedule.map((item, index) => (
          <div key={index} className="border p-2 h-40">
            <div className="text-sm font-bold">{item.day}</div>
            <div className="mt-2">
              {item.commitments &&
                item.commitments.map((commitment, i) => (
                  <div
                    key={i}
                    className={`rounded-lg px-2 py-1 mb-1 ${commitment.color} text-white`}
                  >
                    {commitment.name}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlySchedule;