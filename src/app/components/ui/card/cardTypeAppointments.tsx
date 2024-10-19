"use client";
import { useState } from "react";
import Link from "next/link";

type CardProp = {
  name: string;
  description: string,
  hoverColor?: string;
};

export function CardTypeAppointments({
  name,
  description,
  hoverColor = "text-black",
}: CardProp) {
  const [isHovered, setIsHovered] = useState(false);

  const limitDescription = (desc: string, wordCount: number) => {
    const words = desc.split(" ");
    return words.length > wordCount ? words.slice(0, wordCount).join(" ") + "..." : desc;
  };

  return (
    <>
      <div
        className={`border border-darkCyan h-40 w-auto overflow-hidden p-5 p-5 border rounded-xl shadow-lg grid grid-cols-1 gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10  ${
          isHovered ? hoverColor : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h3 className="roboto-medium text-black text-2xl">{name}</h3>
        </div>
        <div className="text-star roboto-light text-gray-500 text-sm">
          <p className="truncate">{limitDescription(description, 5)}</p>
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