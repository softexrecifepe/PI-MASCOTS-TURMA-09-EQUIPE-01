"use client";
import Link from "next/link";
import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";
import { BreadCrumb } from "../components/ui/breadcrumbs/breadcrumb";
import { BtnColorBg } from "../components/ui/btn/btnColorBg";
import { SectionTitle } from "../components/ui/titles/sectionTitle";
import SearchRegisteredTutor from "../registers-search/page";

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

            <div className="mt-3">
              <Link href={"/registers/register"}>
                <BtnColorBg content="Novo tutor" />
              </Link>
            </div>
            <div className="mt-6">
              <SearchRegisteredTutor />
            </div>
          </main>
        </div>
      </div>

    </>
  );
}
