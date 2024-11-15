"use client";
import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
import data from "../../../../../public/components/data.json";
import { Header } from "@/app/components/navigationScreen/header/header";
import { BreadCrumb } from "@/app/components/ui/breadcrumbs/breadcrumb";
import { TutorInformation } from "@/app/components/ui/titles/tutorInformation";
import { PetInformation } from "@/app/components/ui/titles/petInformation";
import ProfileTab from "@/app/components/ui/tabs/profileTab";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

// type Patient = {
//   userType: string;
//   owners_name: string;
//   owners_cpf: string;
//   owners_fone: string;
//   owners_email: string;
//   hospitalStatus: string;
//   usageType: string;
//   name: string;
//   specie: string;
//   breed: string;
//   gender: string;
//   fisicalDescription: string;
//   weight: string;
//   link_profilePic: string;
//   alergies: string;
//   age: string;
// };

type Patient = {
  id: string;
  icon: string;
  name: string;
  owners_cpf: string;
  owners_name: string;
  owners_fone: string;
  owners_email: string;
  schedule: string;
  description: string;
  recordNumber: string;
  admissionDate: string;
  exitDate: string;
  weight: string;
  breed: string;
  gender: string;
  fisicalDescription: string;
  specie: string;
  alergies: string;
  vet: string;
  vetSpeciality: string;
  appointmentStatus: string;
  age: string;
  boxLocation: string;
  category: string;
  color_classification: string;
  link_profilePic: string;
};

// interface Params {
//   params: {
//     id: string;
//   };
// }

// para gerar rotas dinâmicas
// export async function generateStaticParams() {
//   // para gerar rotas com os id's
//   return data.map((patient) => ({
//     id: patient.id.toString(),
//   }));
// }

// função para renderizar o perfil
export default function PatientProfileId() {
  const params = useParams();
  const id = params["id"];

  // estados
  const [patient, setPatient] = useState<Patient | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simula o carregamento de dados
      setTimeout(() => {
        const foundPatient = data.find((p) => p.id === id);
        if (foundPatient) {
          setPatient(foundPatient);
        } else {
          setPatient(null);
        }
        setIsLoading(false); // Dados carregados, desativa o estado de carregamento
      }, 300); // Simula um atraso de 1 segundo (pode remover se quiser carregar instantaneamente)
    }
  }, [id]);

  // condição de carregamento
  if (isLoading) {
    return (
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
            <BreadCrumb
              link="/registers"
              description="Voltar para a busca de cadastros"
            ></BreadCrumb>
            <div className="flex flex-row gap-5 justify-center items-center h-screen">
              <CircularProgress color="success" />
              <span>Carregando....</span>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // condição de paciente não encontrado
  if (!patient) {
    return <div>Paciente não encontrado.</div>;
  }

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
              <div className=" flex flex-col shadow-md border">
                <div className="w-full bg-darkCyan py-2">
                  <span className="text-white text-xl px-2">
                    Informações do Paciente
                  </span>
                </div>
                <div className="flex flex-row  py-7 px-7">
                  <TutorInformation
                    userType="Tutor"
                    tutor_name={patient?.owners_name}
                    owners_cpf={patient?.owners_cpf}
                    foneNumber={patient?.owners_fone}
                    email={patient?.owners_email}
                  ></TutorInformation>
                  <PetInformation
                    hospitalStatus=""
                    userType="Paciente"
                    usageType="Profile"
                    pet_name={patient?.name}
                    species={patient?.specie}
                    breed={patient?.breed}
                    gender={patient?.gender}
                    fisicalDescription={patient?.fisicalDescription}
                    weight={patient?.weight}
                    link_profilePic={patient?.link_profilePic}
                    alergies={patient?.alergies}
                    age={patient?.age}
                  ></PetInformation>
                </div>
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
