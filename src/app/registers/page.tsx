"use client";
import Link from "next/link";
import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";
import { BtnColorBg } from "../components/ui/btn/btnColorBg";
import { BreadCrumb } from "../components/ui/breadcrumbs/breadcrumb";
import { SectionTitle } from "../components/ui/titles/sectionTitle";

export default function Registration() {
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
            <BreadCrumb
              link="/dashboard"
              description="Voltar para a dashboard"
            />
            <SectionTitle
              iconClass="fa-regular fa-folder-open"
              sectionTitle="Cadastros"
              color="text-gamboge"
            ></SectionTitle>

            <div className="mt-8">
              <Link href={"/registers/register"}>
                <BtnColorBg content="Novo cadastro" />
              </Link>
            </div>
          </main>
        </div>
      </div>
      {/* <Header />
      <SideBar />
      <div>
        <h1>Você está em Cadastros</h1>;
        <p>Este é o conteúdo da página de cadastros</p>;
      
      <div className="m-96">
        
          <Link href="/registers/register" >
          <BtnColorBg content="Novo cadastro" />
          </Link>
          </div>
       
        
      </div> */}
    </>
  );
}
