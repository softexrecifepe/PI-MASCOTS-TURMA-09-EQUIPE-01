"use client";

import { Header } from "@/app/components/navigationScreen/header/header";
import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
import { BreadCrumb } from "@/app/components/ui/breadcrumbs/breadcrumb";
import GeneralBtn from "@/app/components/ui/btn/generalBtn";
import CardTypeAdmission from "@/app/components/ui/card/cardTypeAdmission";
import Tab from "@/app/components/ui/tabs/tab";
import { PetInformation } from "@/app/components/ui/titles/petInformation";
import { SectionTitle } from "@/app/components/ui/titles/sectionTitle";
import TimeLine from "@/app/components/ui/tl/timeLine";

export default function PatientAdmission() {
  const events = [
    {
      date: "2024-01-01",
      timeStamp: "14:10",
      title: "Evento 1",
      description: "Descrição do evento 1.",
    },
    {
      date: "2024-02-15",
      timeStamp: "15:11",
      title: "Evento 2",
      description: "Descrição do evento 2.",
    },
    {
      date: "2024-05-10",
      timeStamp: "22:17",
      title: "Evento 3",
      description: "Descrição do evento 3.",
    },
  ];

  return (
    <>
      <div className="flex h-screen">
        <SideBar></SideBar>
        <div className="flex-1 flex flex-col">
          <Header></Header>
          <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
            <BreadCrumb
              link="/admission"
              description="Voltar para Internamentos"
            />
            <SectionTitle
              iconClass="fa-solid fa-file-medical"
              sectionTitle="Ficha de Internação"
              color="text-auburn"
            />
            <div className="w-full border rounded-r-lg shadow-lg">
              <div className="bg-darkCyan-light py-1">
                <span className="text-lg text-white roboto-regular px-2">
                  Acompanhamento do paciente internado
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-20">
                  <div>
                    <PetInformation
                      usageType="internamento"
                      userType="Paciente"
                      pet_name="Garibaldo"
                      species="Cachorro"
                      breed="shi tzu"
                      gender="Macho"
                      age="5 anos"
                      fisicalDescription="branco"
                      weight="5 kg"
                      alergies="Dipirona"
                      owners_name="Camilla Barros"
                      owners_fone="(81) 9972221236"
                    />
                  </div>
                  <div>
                    <CardTypeAdmission
                      usageType="internamento"
                      boxLocation="B-12"
                      color_classification="bg-blue-500"
                      category="Observação"
                      vet="Dra. Camilla Barros"
                      discharge=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="">
                    <GeneralBtn
                      iconClass="fa-solid fa-pencil"
                      content="Editar"
                    ></GeneralBtn>
                  </div>
                  <div className="">
                    <GeneralBtn
                      iconClass="fa-solid fa-right-from-bracket"
                      content="Alta"
                    ></GeneralBtn>
                  </div>
                  <div className="">
                    <GeneralBtn
                      iconClass="fa-regular fa-heart"
                      content="óbito"
                    ></GeneralBtn>
                  </div>
                  <div className="">
                    <GeneralBtn
                      iconClass="fa-solid fa-arrows-up-down-left-right"
                      content="Box"
                    ></GeneralBtn>
                  </div>
                  <div className="">
                    <GeneralBtn
                      iconClass="fa-solid fa-ban"
                      content="Cancelar"
                    ></GeneralBtn>
                  </div>
                  <div className="">
                    <GeneralBtn
                      iconClass="fa-solid fa-print"
                      content="imprimir"
                    ></GeneralBtn>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-5 px-5">
                  <Tab labels={["Histórico", "Prescrição Médica"]}>
                    {/* first tab */}
                    <div>
                      {/* first tab options */}
                      <div className="py-5 flex flex-row gap-2">
                        <GeneralBtn iconClass="" content="Ocorrências" />
                        <GeneralBtn iconClass="" content="Peso" />
                        <GeneralBtn iconClass="" content="Relatório Médico" />
                      </div>
                      {/* first tab information */}
                      <div>
                        <TimeLine events={events} />
                      </div>
                    </div>
                    <div>
                      <h2>Informações da tab 2</h2>
                    </div>
                  </Tab>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
