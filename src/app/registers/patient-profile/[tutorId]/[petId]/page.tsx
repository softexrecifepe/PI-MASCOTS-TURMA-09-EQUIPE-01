"use client";
import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
// import data from "../../../../../public/components/data.json";
import { Header } from "@/app/components/navigationScreen/header/header";
import { BreadCrumb } from "@/app/components/ui/breadcrumbs/breadcrumb";
import { TutorInformation } from "@/app/components/ui/titles/tutorInformation";
import { PetInformation } from "@/app/components/ui/titles/petInformation";
import ProfileTab from "@/app/components/ui/tabs/profileTab";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "@/lib/firebase/firebase.config";
import { ref, getDownloadURL } from "firebase/storage";
// import EditPetModal from "@/app/components/ui/modal/editPetModal";

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
  // const id = Array.isArray(params["id"]) ? params["id"][0] : params["id"];
  // const tutorId = params["tutorId"];
  // const petId = params["petId"];

  // para pegar os ids e passar na rota
  const params = useParams();
  const tutorId = Array.isArray(params["tutorId"])
    ? params["tutorId"][0]
    : params["tutorId"];
  const petId = Array.isArray(params["petId"])
    ? params["petId"][0]
    : params["petId"];

  // estados
  const [patient, setPatient] = useState<Patient | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (id) {
  //     // Simula o carregamento de dados
  //     setTimeout(() => {
  //       const foundPatient = data.find((p) => p.id === id);
  //       if (foundPatient) {
  //         setPatient(foundPatient);
  //       } else {
  //         setPatient(null);
  //       }
  //       setIsLoading(false); // Dados carregados, desativa o estado de carregamento
  //     }, 300); // Simula um atraso de 1 segundo (pode remover se quiser carregar instantaneamente)
  //   }
  // }, [id]);

  // useEffect(() => {
  //   console.log("Tutor ID:", tutorId);
  //   console.log("Pet ID:", petId);

  //   // Verifica se tutorId ou petId estão ausentes e interrompe o carregamento
  //   if (!tutorId || !petId) {
  //     setIsLoading(false); // Para o estado de carregamento se os parâmetros não estiverem presentes
  //     return; // Não continua a execução do código
  //   }

  //   const fetchPatientData = async () => {
  //     if (tutorId && petId) {
  //       try {
  //         // Referência ao documento do pet no Firestore usando tutorId e petId
  //         const docRef = doc(db, "tutores", tutorId, "petsVinculados", petId);
  //         const docSnap = await getDoc(docRef);

  //         if (docSnap.exists()) {
  //           // Recuperando os dados do Firestore
  //           const petData = docSnap.data();

  //           // Acesse o nome do tutor e do pet de forma separada
  //           const tutorRef = doc(db, "tutores", tutorId); // A referência ao tutor
  //           const tutorSnap = await getDoc(tutorRef);

  //           let tutorName = ""; // Inicializa o nome do tutor
  //           if (tutorSnap.exists()) {
  //             tutorName = tutorSnap.data().nome; // Nome do tutor
  //           }

  //           const patientData = {
  //             id: docSnap.id,
  //             owners_name: tutorName, // "nome" do tutor
  //             owners_cpf: petData.cpf, // exemplo de outro campo que pode ser diferente
  //             owners_fone: petData.telefone,
  //             owners_email: petData.email,
  //             name: petData.nome, // "nome" do pet (também é "nome" no Firestore, mas para o pet)
  //             specie: petData.especie,
  //             breed: petData.raca,
  //             gender: petData.genero,
  //             fisicalDescription: petData.fisicalDescription,
  //             weight: petData.peso,
  //             link_profilePic: petData.link_profilePic,
  //             alergies: petData.alergias,
  //             age: petData.idade,
  //             // outros campos conforme necessário
  //           };

  //           setPatient(patientData as Patient);
  //         } else {
  //           setPatient(null);
  //         }
  //       } catch (error) {
  //         console.error("Erro ao buscar os dados do paciente:", error);
  //         setPatient(null);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   fetchPatientData();
  // }, [tutorId, petId]);

  // useEffect(() => {
  //   console.log("Tutor ID:", tutorId);
  //   console.log("Pet ID:", petId);

  //   // Verifica se tutorId ou petId estão ausentes e interrompe o carregamento
  //   if (!tutorId || !petId) {
  //     setIsLoading(false); // Para o estado de carregamento se os parâmetros não estiverem presentes
  //     return; // Não continua a execução do código
  //   }

  //   const fetchPatientData = async () => {
  //     if (tutorId && petId) {
  //       try {
  //         // Referência ao documento do pet no Firestore usando tutorId e petId
  //         const petRef = doc(db, "tutores", tutorId, "petsVinculados", petId);
  //         const petSnap = await getDoc(petRef);

  //         if (petSnap.exists()) {
  //           const petData = petSnap.data();

  //           // Acessa o nome do tutor e os dados do pet de forma separada
  //           const tutorRef = doc(db, "tutores", tutorId); // Referência ao tutor
  //           const tutorSnap = await getDoc(tutorRef);

  //           let tutorName = "";
  //           let tutorCpf = "";
  //           let tutorFone = "";
  //           let tutorEmail = "";

  //           if (tutorSnap.exists()) {
  //             const tutorData = tutorSnap.data();
  //             tutorName = tutorData.nome || ""; // Nome do tutor
  //             tutorCpf = tutorData.cpf || ""; // CPF do tutor
  //             tutorFone = tutorData.telefone || ""; // Telefone do tutor
  //             tutorEmail = tutorData.email || ""; // Email do tutor
  //           }

  //           // Referência ao Firebase Storage para a imagem de profilePic
  //           const profilePicPath = petData.link_profilePic;
  //           const storage = getStorage();
  //           const profilePicRef = ref(
  //             storage,
  //             `pets/${tutorId}/${petId}/images/${profilePicPath}`
  //           );

  //           // Obter a URL de download da imagem
  //           const profilePicUrl = await getDownloadURL(profilePicRef);

  //           const patientData = {
  //             id: petSnap.id,
  //             owners_name: tutorName, // Nome do tutor
  //             owners_cpf: tutorCpf, // CPF do tutor
  //             owners_fone: tutorFone, // Telefone do tutor
  //             owners_email: tutorEmail, // Email do tutor
  //             name: petData.nome, // Nome do pet
  //             specie: petData.especie,
  //             breed: petData.raca,
  //             gender: petData.genero,
  //             fisicalDescription: petData.fisicalDescription,
  //             weight: petData.peso,
  //             link_profilePic: profilePicUrl,
  //             alergies: petData.alergias,
  //             age: petData.idade,
  //             // Outros campos conforme necessário
  //           };

  //           setPatient(patientData as Patient);
  //         } else {
  //           setPatient(null); // Caso o pet não seja encontrado
  //         }
  //       } catch (error) {
  //         console.error("Erro ao buscar os dados do paciente:", error);
  //         setPatient(null); // Caso ocorra algum erro
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   fetchPatientData();
  // }, [tutorId, petId]);

  // // Dentro do useEffect onde você busca os dados do pet
  // useEffect(() => {
  //   console.log("Tutor ID:", tutorId);
  //   console.log("Pet ID:", petId);

  //   // Verifica se tutorId ou petId estão ausentes e interrompe o carregamento
  //   if (!tutorId || !petId) {
  //     setIsLoading(false); // Para o estado de carregamento se os parâmetros não estiverem presentes
  //     return; // Não continua a execução do código
  //   }

  //   const fetchPatientData = async () => {
  //     if (tutorId && petId) {
  //       try {
  //         // Referência ao documento do pet no Firestore usando tutorId e petId
  //         const petRef = doc(db, "tutores", tutorId, "petsVinculados", petId);
  //         const petSnap = await getDoc(petRef);

  //         if (petSnap.exists()) {
  //           const petData = petSnap.data();

  //           // Acessa o nome do tutor e os dados do pet de forma separada
  //           const tutorRef = doc(db, "tutores", tutorId); // Referência ao tutor
  //           const tutorSnap = await getDoc(tutorRef);

  //           let tutorName = "";
  //           let tutorCpf = "";
  //           let tutorFone = "";
  //           let tutorEmail = "";

  //           if (tutorSnap.exists()) {
  //             const tutorData = tutorSnap.data();
  //             tutorName = tutorData.nome || ""; // Nome do tutor
  //             tutorCpf = tutorData.cpf || ""; // CPF do tutor
  //             tutorFone = tutorData.telefone || ""; // Telefone do tutor
  //             tutorEmail = tutorData.email || ""; // Email do tutor
  //           }

  //           // Verifica se a URL da imagem está disponível no Firestore
  //           const profilePicPath = petData.link_profilePic;

  //           if (profilePicPath) {
  //             // A URL da imagem depende de como você a salvou no Firestore.
  //             // Aqui, ajustamos o caminho do Firebase Storage para incluir a referência correta
  //             const storage = getStorage();
  //             const profilePicRef = ref(
  //               storage,
  //               `pets/${tutorId}/${petId}/images/${profilePicPath}`
  //             );

  //             // Obter a URL de download da imagem
  //             const profilePicUrl = await getDownloadURL(profilePicRef);

  //             const patientData = {
  //               id: petSnap.id,
  //               owners_name: tutorName, // Nome do tutor
  //               owners_cpf: tutorCpf, // CPF do tutor
  //               owners_fone: tutorFone, // Telefone do tutor
  //               owners_email: tutorEmail, // Email do tutor
  //               name: petData.nome, // Nome do pet
  //               specie: petData.especie,
  //               breed: petData.raca,
  //               gender: petData.genero,
  //               fisicalDescription: petData.fisicalDescription,
  //               weight: petData.peso,
  //               link_profilePic: profilePicUrl, // URL da imagem do perfil
  //               alergies: petData.alergias,
  //               age: petData.idade,
  //               // Outros campos conforme necessário
  //             };

  //             setPatient(patientData as Patient);
  //           } else {
  //             setPatient(null); // Caso o link da imagem não exista
  //           }
  //         } else {
  //           setPatient(null); // Caso o pet não seja encontrado
  //         }
  //       } catch (error) {
  //         console.error("Erro ao buscar os dados do paciente:", error);
  //         setPatient(null); // Caso ocorra algum erro
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   fetchPatientData();
  // }, [tutorId, petId]);

  // useEffect(() => {
  //   console.log("Tutor ID:", tutorId);
  //   console.log("Pet ID:", petId);

  //   // Verifica se tutorId ou petId estão ausentes e interrompe o carregamento
  //   if (!tutorId || !petId) {
  //     setIsLoading(false); // Para o estado de carregamento se os parâmetros não estiverem presentes
  //     return; // Não continua a execução do código
  //   }

  //   const fetchPatientData = async () => {
  //     if (tutorId && petId) {
  //       try {
  //         // Referência ao documento do pet no Firestore
  //         const petRef = doc(db, "tutores", tutorId, "petsVinculados", petId);
  //         const petSnap = await getDoc(petRef);

  //         if (petSnap.exists()) {
  //           const petData = petSnap.data();
  //           console.log("Dados do pet:", petData); // Verifique se o petData está correto

  //           // Referência ao Firestore para o tutor
  //           const tutorRef = doc(db, "tutores", tutorId);
  //           const tutorSnap = await getDoc(tutorRef);

  //           let tutorName = "";
  //           let tutorCpf = "";
  //           let tutorFone = "";
  //           let tutorEmail = "";

  //           if (tutorSnap.exists()) {
  //             const tutorData = tutorSnap.data();
  //             tutorName = tutorData.nome || ""; // Nome do tutor
  //             tutorCpf = tutorData.cpf || ""; // CPF do tutor
  //             tutorFone = tutorData.telefone || ""; // Telefone do tutor
  //             tutorEmail = tutorData.email || ""; // Email do tutor
  //           }

  //           // Verifique o caminho da imagem no Firebase Storage
  //           const storage = getStorage();
  //           const profilePicRef = ref(
  //             storage,
  //             `pets/${petData.link_profilePic}`
  //           );
  //           const profilePicUrl = await getDownloadURL(profilePicRef);

  //           console.log("URL da imagem:", profilePicUrl); // Verifique se a URL está correta

  //           // Formatar os dados do paciente
  //           const patientData = {
  //             id: petSnap.id,
  //             owners_name: tutorName,
  //             owners_cpf: tutorCpf,
  //             owners_fone: tutorFone,
  //             owners_email: tutorEmail,
  //             name: petData.nome,
  //             specie: petData.especie,
  //             breed: petData.raca,
  //             gender: petData.genero,
  //             fisicalDescription: petData.fisicalDescription,
  //             weight: petData.peso,
  //             link_profilePic: profilePicUrl,
  //             alergies: petData.alergias,
  //             age: petData.idade,
  //           };

  //           setPatient(patientData as Patient);
  //         } else {
  //           console.error("Pet não encontrado!");
  //           setPatient(null); // Caso o pet não seja encontrado
  //         }
  //       } catch (error) {
  //         console.error("Erro ao buscar os dados do paciente:", error);
  //         setPatient(null); // Caso ocorra algum erro
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   fetchPatientData();
  // }, [tutorId, petId]);

  // const [modalOpen, setModalOpen] = useState(false);

  // const handleOpenModal = () => setModalOpen(true);
  // const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    console.log("Tutor ID:", tutorId);
    console.log("Pet ID:", petId);

    if (!tutorId || !petId) {
      setIsLoading(false);
      return;
    }

    const fetchPatientData = async () => {
      if (tutorId && petId) {
        try {
          const petRef = doc(db, "tutores", tutorId, "petsVinculados", petId);
          const petSnap = await getDoc(petRef);

          if (petSnap.exists()) {
            const petData = petSnap.data();
            console.log("Dados do pet:", petData);

            // Obter o caminho correto para a imagem do perfil
            const profilePicLink = petData.link_profilePic || ""; // Caso tenha um caminho para a imagem
            let profilePicUrl = "";

            if (profilePicLink) {
              // O caminho correto para o Firebase Storage
              const profilePicRef = ref(
                storage,
                `pets/${petData.tutorId}/${petData.petId}/${profilePicLink}`
              );

              try {
                profilePicUrl = await getDownloadURL(profilePicRef);
              } catch (error) {
                console.error("Erro ao obter imagem:", error);
                profilePicUrl = "path/to/default/image.jpg"; // Imagem padrão
              }
            }

            const tutorRef = doc(db, "tutores", tutorId);
            const tutorSnap = await getDoc(tutorRef);

            let tutorName = "";
            let tutorCpf = "";
            let tutorFone = "";
            let tutorEmail = "";

            if (tutorSnap.exists()) {
              const tutorData = tutorSnap.data();
              tutorName = tutorData.nome || "";
              tutorCpf = tutorData.cpf || "";
              tutorFone = tutorData.telefone || "";
              tutorEmail = tutorData.email || "";
            }

            const patientData = {
              id: petSnap.id,
              owners_name: tutorName,
              owners_cpf: tutorCpf,
              owners_fone: tutorFone,
              owners_email: tutorEmail,
              name: petData.nome,
              specie: petData.especie,
              breed: petData.raca,
              gender: petData.genero,
              fisicalDescription: petData.fisicalDescription,
              weight: petData.peso,
              link_profilePic: profilePicUrl,
              alergies: petData.alergias,
              age: petData.idade,
            };

            setPatient(patientData as Patient);
          } else {
            console.error("Pet não encontrado!");
            setPatient(null);
          }
        } catch (error) {
          console.error("Erro ao buscar os dados do paciente:", error);
          setPatient(null);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchPatientData();
  }, [tutorId, petId]);

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
