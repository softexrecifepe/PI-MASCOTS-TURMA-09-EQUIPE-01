"use client";
import Image from "next/image";
import img3 from "../../assets/images/img3.jpg";
import { TitlesWithText } from "../ui/lists/titlesWithText";

export function AboutMascots() {
  return (
    <section className="flex flex-row gap-10 pl-20 pr-20 mt-28 mb-36">
      <div className="flex flex-col gap-5">
        <Image
          className="max-w-[500px] max-h-[500px]"
          src={img3}
          alt=""
        ></Image>
      </div>
      <div className="flex flex-col items-start gap-5">
        <div>
          <h6
            id="about-project"
            className="text-myrtleGreen-light border-b-2 border-darkCyan pb-2 roboto-light scroll-mt-32"
          >
            Sobre o Projeto
          </h6>
        </div>
        <TitlesWithText></TitlesWithText>
      </div>
    </section>
  );
}
