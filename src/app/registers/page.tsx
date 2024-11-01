
import Link from "next/link";
import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";
import { BtnColorBg } from "../components/ui/btn/btnColorBg";

export default function Registration() {
  return (
    <>
      <Header />
      <SideBar />
      <div>
        <h1>Você está em Cadastros</h1>;
        <p>Este é o conteúdo da página de cadastros</p>;
      
      <div className="m-96">
        
          <Link href="/registers/register" >
          <BtnColorBg content="Novo cadastro" />
          </Link>
          </div>
       
        
      </div>
    </>
  );
}
