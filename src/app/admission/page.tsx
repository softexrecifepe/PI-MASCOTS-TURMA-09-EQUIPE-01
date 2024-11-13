"use client";
import data from "../../../public/components/data.json";
import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";
import { BreadCrumb } from "../components/ui/breadcrumbs/breadcrumb";
import CardTypeAdmission from "../components/ui/card/cardTypeAdmission";
import { SectionTitle } from "../components/ui/titles/sectionTitle";

export default function Admission() {
  // const tagColors = [
  //   { category: "Observação", color: "bg-green-500" },
  //   { category: "Atenção Leve", color: "bg-bluee-500" },
  //   { category: "Cuidado Moderado", color: "bg-gamboge-dark" },
  //   { category: "Urgente", color: "bg-redCrayola" },
  //   { category: "Emergência", color: "bg-auburn" },
  // ];

  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
            <BreadCrumb
              link="/dashboard"
              description="Voltar para a Dashboard"
            />
            <SectionTitle
              iconClass="fa-solid fa-file-medical"
              sectionTitle="Internamentos"
              color="text-auburn"
            />
            <div className="flex flex-col gap-5">
              <div className="py-5 px-5 flex flex-col gap-10 border shadow-md text-2xl roboto-regular">
                <h2 className="">Pacientes internados</h2>
                {/* <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {data.map((item) => (
                    <CardTypeAdmission
                      key={item.owners_cpf}
                      pet_name={item.name}
                      breed={item.breed}
                      weight={item.weight}
                      discharge={item.exitDate}
                      owners_cpf={item.owners_cpf}
                      boxLocation={item.boxLocation}
                      color_classification={item.color_classification}
                      category={item.category}
                      profilePic={item.link_profilePic}
                    />
                  ))}
                </div> */}
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {data.map((item) => {
                    if (item.category === "Aguardando Classificação")
                      return null;

                    return (
                      <CardTypeAdmission
                        key={item.owners_cpf}
                        usageType="geral"
                        pet_name={item.name}
                        breed={item.breed}
                        weight={item.weight}
                        discharge={item.exitDate}
                        owners_cpf={item.owners_cpf}
                        boxLocation={item.boxLocation}
                        color_classification={item.color_classification}
                        category={item.category}
                        profilePic={item.link_profilePic}
                        vet={item.vet}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="py-5 px-5 flex flex-col gap-10 border shadow-md text-2xl roboto-regular">
                <h2 className="">Pacientes em triagem</h2>
                {/* <div className="flex flex-row flex-wrap gap-5">
                  <CardTypeAdmission
                    pet_name="Bolinha"
                    breed="SRD"
                    weight="15kg"
                    owners_cpf="000000"
                    boxLocation="G-01"
                    color_classification="bg-gray-500"
                    category="Aguardando classificação"
                    profilePic="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <CardTypeAdmission
                    pet_name="Bellinha Barros"
                    breed="SRD"
                    weight="15kg"
                    owners_cpf="000000"
                    boxLocation="G-01"
                    color_classification="bg-gray-500"
                    category="Aguardando classificação"
                    profilePic="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div> */}
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {data.map((item) => {
                    if (item.category !== "Aguardando Classificação")
                      return null;

                    return (
                      <CardTypeAdmission
                        key={item.owners_cpf}
                        usageType="Geral"
                        pet_name={item.name}
                        breed={item.breed}
                        weight={item.weight}
                        discharge={item.exitDate}
                        owners_cpf={item.owners_cpf}
                        boxLocation={item.boxLocation}
                        color_classification={item.color_classification}
                        category={item.category}
                        profilePic={item.link_profilePic}
                        vet={item.vet}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
