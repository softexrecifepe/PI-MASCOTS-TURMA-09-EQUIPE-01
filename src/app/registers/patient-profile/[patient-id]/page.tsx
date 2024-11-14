import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
import data from "../../../../../public/components/data.json";
import { Header } from "@/app/components/navigationScreen/header/header";
import { BreadCrumb } from "@/app/components/ui/breadcrumbs/breadcrumb";
import { TutorInformation } from "@/app/components/ui/titles/tutorInformation";
import { PetInformation } from "@/app/components/ui/titles/petInformation";
import ProfileTab from "@/app/components/ui/tabs/profileTab";

type Patient = {
  userType: string | undefined;
  tutor_name: string | undefined;
  owners_cpf: string | undefined;
  foneNumber: string | undefined;
  email: string | undefined;
  hospitalStatus: string | undefined;
  usageType: string | undefined;
  pet_name: string | undefined;
  species: string | undefined;
  gender: string | undefined;
  fisicalDescription: string | undefined;
  weight: string | undefined;
  link_profilePic: string | undefined;
  alergies: string | undefined;
  age: string | undefined;
};

interface Params {
  params: {
    id: string;
  };
}

// para gerar rotas dinâmicas
export async function generateStaticParams() {
  // para gerar rotas com os id's
  return data.map((patient) => ({
    id: patient.id.toString(),
  }));
}

// função para renderizar o perfil
export default function PatientProfileId({ params }: Params) {
  const patient = data.find((p) => p.id.toString() === params.id);

  if (!params) {
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
              <div className="flex flex-row gap-10">
                <TutorInformation
                  userType="Tutor"
                  tutor_name={patient?.owners_name}
                  owners_cpf={patient?.owners_cpf}
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
                  alergies=""
                  age=""
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
