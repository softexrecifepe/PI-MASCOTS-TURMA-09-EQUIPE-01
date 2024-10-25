"use client";
import { BtnWhiteBg } from "../ui/btn/btnWhiteBg";
import { UseScrollPosition } from "@/app/hooks/useScrollPosition";
import Link from "next/link";

export function HeaderHomePage() {
  //usando o hook useScrollPosition
  const isScrolled = UseScrollPosition(300);

  return (
    <div
      id="header"
      className={`w-full z-50 p-6 flex flex-row justify-between gap-10 fixed top-0 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black transition-all duration-800 ease-out"
          : "bg-transparent"
      }`}
    >
      <div>
        <span
          className={`text-white font-bold text-2xl p-2 border border-white roboto-regular`}
        >
          <Link href={"/"}>Mascot&#39;s</Link>
        </span>
      </div>
      <div className="flex flex-row gap-4 content-center items-center">
        <nav className="">
          <ul
            className={`roboto-light list-none flex flex-row gap-4 items-center text-white font-semibold`}
          >
            <li className="p-1 hover:text-darkCyan transition-colors duration-300">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="p-1 hover:text-darkCyan transition-colors duration-300">
              <Link href={"#our-services"}>Funcionalidades</Link>
            </li>
            <li className="p-1 hover:text-darkCyan transition-colors duration-300">
              <Link href={"#about-project"}>Sobre o projeto</Link>
            </li>
            <li className="p-1 hover:text-darkCyan transition-colors duration-300">
              <Link href={"#devs"}>Desenvolvedores</Link>
            </li>
            <li className="p-1 hover:text-darkCyan transition-colors duration-300">
              <a href="https://github.com/softexrecifepe/PI-MASCOTS-TURMA-09-EQUIPE-01">
                GitHub do projeto
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="/login">
            <BtnWhiteBg content="Acessar o Mascot's" />
          </Link>
        </div>
      </div>
    </div>
  );
}
