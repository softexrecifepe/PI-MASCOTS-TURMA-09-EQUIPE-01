import { AboutMascots } from "../components/homePage/AboutMascots";
import { FooterHomePage } from "../components/homePage/footerHomePage";
import { GeneralHeader } from "../components/ui/headers/generalHeader";

export default function OurServices() {
  return (
    <>
      {/* depois precisa ajustar o conteúdo da página */}
      <GeneralHeader></GeneralHeader>
      <AboutMascots></AboutMascots>
      <FooterHomePage></FooterHomePage>
    </>
  );
}
