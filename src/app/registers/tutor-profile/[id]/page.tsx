"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
// import data from "../../../../../public/components/data.json";
import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
import { Header } from "@/app/components/navigationScreen/header/header";
import { BreadCrumb } from "@/app/components/ui/breadcrumbs/breadcrumb";
import { TutorInformation } from "@/app/components/ui/titles/tutorInformation";
// import { PetInformation } from "@/app/components/ui/titles/petInformation";
import CircularProgress from "@mui/material/CircularProgress";
import Tab from "@/app/components/ui/tabs/tab";
import GeneralBtn from "@/app/components/ui/btn/generalBtn";

// type Tutor = {
//   id: string;
//   icon: string;
//   name: string;
//   owners_cpf: string;
//   owners_name: string;
//   owners_fone: string;
//   owners_email: string;
//   schedule: string;
//   description: string;
//   recordNumber: string;
//   admissionDate: string;
//   exitDate: string;
//   weight: string;
//   breed: string;
//   gender: string;
//   fisicalDescription: string;
//   specie: string;
//   alergies: string;
//   vet: string;
//   vetSpeciality: string;
//   appointmentStatus: string;
//   age: string;
//   boxLocation: string;
//   category: string;
//   color_classification: string;
//   link_profilePic: string;
// };

type Tutor = {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: string;
};

export default function TutorProfile() {
  const params = useParams();
  const id = params["id"];

  const [tutor, setTutor] = useState<Tutor | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Função para buscar os dados do tutor do JSON Server
      const fetchTutorData = async () => {
        try {
          const response = await fetch(`http://localhost:4000/tutores/${id}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar dados do tutor.");
          }
          const data = await response.json();
          setTutor(data); // Define o estado com os dados recebidos
        } catch (error) {
          console.error(error);
          setTutor(null); // Se ocorrer um erro, define tutor como null
        } finally {
          setIsLoading(false); // Dados carregados, desativa o estado de carregamento
        }
      };

      fetchTutorData();
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
  if (!tutor) {
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
                    Informações do Tutor
                  </span>
                </div>
                <div className="flex flex-row justify-between py-7 px-7">
                  <div className="flex flex-row gap-20">
                    <TutorInformation
                      userType="Tutor"
                      tutor_name={tutor?.nome}
                      owners_cpf={tutor?.cpf}
                      foneNumber={tutor?.telefone}
                      email={tutor?.email}
                    ></TutorInformation>
                    {/* <PetInformation
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
                  ></PetInformation> */}
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
                        content="Mensagem"
                      ></GeneralBtn>
                    </div>
                    <div className="">
                      <GeneralBtn
                        iconClass="fa-regular fa-heart"
                        content="Email"
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
              </div>
              <div className="">
                <Tab labels={["Pets Cadastrados", "Pagamentos"]}>
                  <div>Informações sobre pets cadastrados</div>
                  <div>Informações sobre pagamentos</div>
                </Tab>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
