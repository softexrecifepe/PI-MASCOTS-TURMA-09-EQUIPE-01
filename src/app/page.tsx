"use client"
import { useState } from "react";
import { AboutMascots } from "./components/homePage/AboutMascots";
import { BgHomePage } from "./components/homePage/bgHomePage";
import { Devs } from "./components/homePage/devs";
import { FooterHomePage } from "./components/homePage/footerHomePage";
import { HeaderHomePage } from "./components/homePage/headerHomePage";
import { Info } from "./components/homePage/info";
import { ServicesInfo } from "./components/homePage/servicesInfo";

export default function Home() {
  return (
    <>
      <HeaderHomePage />
      <BgHomePage />
      <Info
        title=" é o melhor sistema veterinário para clínicas, hospitais e petshops"
        subtitle="Um sistema para a gestão cotidiana do seu negócio"
      />
      <ServicesInfo />
      <AboutMascots />
      <Devs />
      <FooterHomePage />
    </>
  );
}
