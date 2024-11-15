"use client";

import { Header } from "@/app/components/navigationScreen/header/header";
import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
import { BreadCrumb } from "@/app/components/ui/breadcrumbs/breadcrumb";
import ProfileTab from "@/app/components/ui/tabs/profileTab";
import { PetInformation } from "@/app/components/ui/titles/petInformation";
import { TutorInformation } from "@/app/components/ui/titles/tutorInformation";

export default function PatientProfile() {
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
            <BreadCrumb
              link="/registers"
              description="Voltar para a busca de cadastros"
            ></BreadCrumb>
            <div className="flex flex-col gap-10">
              <div className="flex flex-row gap-10">
                <TutorInformation
                  userType="Tutor"
                  tutor_name="Camilla Barros"
                  owners_cpf="000.000.000.00"
                  foneNumber="(81) 90000-0000"
                  email="exemple@gmail.com"
                ></TutorInformation>
                <PetInformation
                  hospitalStatus="Em atendimento"
                  userType="Paciente"
                  usageType="Profile"
                  pet_name="Bellinha"
                  species="Cachorro"
                  gender="fêmea"
                  fisicalDescription="Branca com manchas pretas"
                  weight="10kg"
                  link_profilePic=""
                ></PetInformation>
              </div>
              <div className="">
                <ProfileTab></ProfileTab>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}