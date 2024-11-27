"use client";

import { BtnWhiteBg } from "../btn/btnWhiteBg";

import Link from "next/link";

export function GeneralHeader() {
  return (
    <div
      id="header"
      className={`w-full bg-black z-50 p-6 flex flex-row justify-between gap-10 fixed top-0 transition-all duration-500 ease-in-out`}
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
          <Link href={"/Login"}>
            <BtnWhiteBg content="Acessar o Mascot's" />
          </Link>
        </div>
      </div>
    </div>
  );
}
