"use client";
import { useState } from "react";
import Link from "next/link";

type CardProp = {
  iconClass: string;
  title: string;
  description: string;
  hoverColor?: string;
};

export function CardTypeOne({
  iconClass,
  title,
  description,
  hoverColor = "text-black",
}: CardProp) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`w-64 p-10 border rounded-xl shadow-lg grid grid-cols-1 gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 ${
          isHovered ? hoverColor : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`text-4xl transition-colors duration-300 ease-in-out `}>
          <i className={iconClass}></i>
        </div>
        <div>
          <h3 className="roboto-medium text-black text-2xl">{title}</h3>
        </div>
        <div className="text-star roboto-light text-gray-500 text-sm">
          <p>{description}</p>
        </div>
        <div>
          <Link href={"/OurServices"}>
            <span className="text-blue-600 text-sm">Veja mais</span>
          </Link>
        </div>
      </div>
    </>
  );
}
