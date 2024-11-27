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
            <BreadCrumb
              link="/dashboard"
              description="Voltar para a dashboard"
            />
            <SectionTitle
              iconClass="fa-solid fa-suitcase-medical"
              sectionTitle="Atendimentos"
              color="text-tuftsBlue"
            ></SectionTitle>
            <FormAppointment />
            <div className="mt-8">
              <TableOne
                tHeadOne="Nome do Paciente"
                tHeadTwo="Motivo do Atendimento"
                tHeadThree="Veterinário Responsável"
                tHeadFour="Status do atendimento"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
