import { AboutPetSys } from "./components/homePage/aboutPetSys";
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
        title="Sistema veterinário para clínicas, hospitais e petshops"
        subtitle="Um sistema para a gestão cotidiana do seu negócio"
      />
      <ServicesInfo />
      <AboutPetSys
        imgUrl="https://i.ytimg.com/vi/HqaWK3M1Ta8/maxresdefault.jpg"
        imgAlt="Logo FAP e Softex Pernambuco"
      />
      <Devs />
      <FooterHomePage />
    </>
  );
}
