"use client";
import Link from "next/link";

type CardProp = {
  icon: string;
  name: string;
  schedule: string;
};

export function CardTypeSchedule({ icon, name, schedule }: CardProp) {
  return (
    <>
      <div
        className={`p-5 border shadow-lg grid grid-cols-1 gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 
        }`}
      >
        <div className={`flex text-4xl items-center`}>
          <i className={icon}></i>
        </div>
        <div>
          <h3 className="roboto-medium text-black text-2xl">{name}</h3>
        </div>
        <div className="text-star roboto-light text-gray-500 text-sm">
          <p>{schedule}</p>
        </div>
        <div>
          <Link href={"/schedule"}>
            <span className="text-blue-600 text-sm">Ver mais informações</span>
          </Link>
        </div>
      </div>
    </>
  );
}
