"use client";
import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";
import { BreadCrumb } from "../components/ui/breadcrumbs/breadcrumb";
import { FormAppointment } from "../components/ui/forms/appointmentsForms";
import { TableOne } from "../components/ui/tables/table";
import { SectionTitle } from "../components/ui/titles/sectionTitle";

export default function MedicalAppointment() {
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
            <BreadCrumb description="Voltar para a dashboard" />
            <SectionTitle
              iconClass="fa-solid fa-suitcase-medical"
              sectionTitle="Atendimentos"
            ></SectionTitle>
            <FormAppointment />
            <div className="mt-10">
              <h2 className="text-2xl roboto-medium">
                Pacientes para atendimento &#x00028;0&#x00029;
              </h2>
            </div>
            <div className="mt-8">
              <TableOne
                tHeadOne="Nome do Paciente"
                tHeadTwo="Veterinário Responsável"
                tHeadThree="Status do Atendimento"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
