"use client";
import { useState } from "react";
import Link from "next/link";

type CardProp = {
  icon: string;
  name: string;
  schedule: string;
  hoverColor?: string;
};

export function CardTypeSchedule({
  icon,
  name,
  schedule,
  hoverColor = "text-black",
}: CardProp) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`p-5 border shadow-lg grid grid-cols-1 gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 ${
          isHovered ? hoverColor : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
          <Link href={""}>
            <span className="text-blue-600 text-sm">Ver mais informações</span>
          </Link>
        </div>
      </div>
    </>
  );
}
