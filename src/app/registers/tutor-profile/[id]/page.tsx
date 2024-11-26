"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
import { Header } from "@/app/components/navigationScreen/header/header";
import { BreadCrumb } from "@/app/components/ui/breadcrumbs/breadcrumb";
import { TutorInformation } from "@/app/components/ui/titles/tutorInformation";
import CircularProgress from "@mui/material/CircularProgress";
import Tab from "@/app/components/ui/tabs/tab";
import GeneralBtn from "@/app/components/ui/btn/generalBtn";
import GeneralModal from "@/app/components/ui/modal/generalModal";
import { jsPDF } from "jspdf";
import { db } from "@/lib/firebase/firebase.config"; // Importe a configuração do Firebase
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
// import { useRouter } from 'next/router';
import usePets from "@/app/hooks/usePets";
import { Avatar } from "@mui/material";

interface Pet {
  id: string;
  nome: string;
  raca: string;
  idade: string;
  genero: string;
  // Adicionar outros campos relevantes aqui
}

type Tutor = {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: string;
};

export default function TutorProfile() {
  // const router = useRouter();
  // const { id } = router.query; // Captura o ID da URL

  // para a pegar o id na rota
  const params = useParams();
  // const id = params["id"];
  const id = Array.isArray(params["id"]) ? params["id"][0] : params["id"];

  const { pets } = usePets(id);

  // estados
  const [tutor, setTutor] = useState<Tutor | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPetImage = async () => {
      if (!pets || pets.length === 0) return;

      try {
        // Suponha que você quer pegar o primeiro pet ou fazer uma busca condicional
        const petId = pets[0].id; // Aqui você pode definir qual pet vai ser considerado para pegar a imagem
        const petDocRef = doc(db, `tutores/${id}/petsVinculados/${petId}`);
        const petDoc = await getDoc(petDocRef);

        if (petDoc.exists()) {
          const url = petDoc.data()?.imagem;
          setImageUrl(url || null);
        } else {
          console.log("Pet não encontrado");
        }
      } catch (error) {
        console.error("Erro ao recuperar a imagem do pet:", error);
      }
    };

    fetchPetImage();
  }, [id, pets]); // Agora, o efeito será disparado sempre que o id ou os pets mudarem

  // useEffect(() => {
  //   if (id) {
  //     // Função para buscar os dados do tutor do JSON Server
  //     const fetchTutorData = async () => {
  //       try {
  //         const response = await fetch(`http://localhost:4000/tutores/${id}`);
  //         if (!response.ok) {
  //           throw new Error("Erro ao buscar dados do tutor.");
  //         }
  //         const data = await response.json();
  //         setTutor(data); // Define o estado com os dados recebidos
  //       } catch (error) {
  //         console.error(error);
  //         setTutor(null); // Se ocorrer um erro, define tutor como null
  //       } finally {
  //         setIsLoading(false); // Dados carregados, desativa o estado de carregamento
  //       }
  //     };

  //     fetchTutorData();
  //   }
  // }, [id]);

  // useEffect(() => {
  //   if (id) {
  //     // Função para buscar os dados do tutor do Firestore
  //     const fetchTutorData = async () => {
  //       try {
  //         const docRef = doc(db, "tutores", id); // Busca o documento pelo ID
  //         const docSnap = await getDoc(docRef);

  //         if (docSnap.exists()) {
  //           setTutor({ id: docSnap.id, ...docSnap.data() } as Tutor); // Define o estado com os dados recebidos
  //         } else {
  //           console.error("Tutor não encontrado.");
  //           setTutor(null);
  //         }
  //       } catch (error) {
  //         console.error("Erro ao buscar dados do tutor:", error);
  //         setTutor(null); // Se ocorrer um erro, define tutor como null
  //       } finally {
  //         setIsLoading(false); // Dados carregados, desativa o estado de carregamento
  //       }
  //     };

  //     fetchTutorData();
  //   }
  // }, [id]);

  //   // Função para buscar dados do tutor no Firestore
  // const fetchTutorData = async (id: string) => {
  //   try {
  //     // Use o `doc` passando `db`, o nome da coleção e o ID do documento
  //     const docRef = doc(db, "tutores", id);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       const data = docSnap.data();
  //       return {
  //         id: docSnap.id,
  //         ...data,
  //       };
  //     } else {
  //       console.error("Documento não encontrado!");
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error("Erro ao buscar dados do Firestore:", error);
  //     return null;
  //   }
  // };

  // Função para buscar dados do tutor no Firestore
  const fetchTutorData = async (id: string) => {
    try {
      // Acessa o Firestore e pega o documento pelo ID
      const docRef = doc(db, "tutores", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
        } as Tutor;
      } else {
        console.error("Documento não encontrado!");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar dados do Firestore:", error);
      return null;
    }
  };

  // useEffect para buscar os dados ao carregar a página
  useEffect(() => {
    if (id) {
      // Busca os dados do Firestore ao montar o componente
      const fetchData = async () => {
        try {
          const tutorData = await fetchTutorData(id);
          setTutor(tutorData);
        } catch (error) {
          console.error("Erro ao buscar dados do tutor:", error);
          setTutor(null);
        } finally {
          setIsLoading(false); // Dados carregados, desativa o estado de carregamento
        }
      };

      fetchData();
    }
  }, [id]);

  // para gerar o relatório baixado em pdf
  const handleGeneratePDF = async () => {
    if (!tutor) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Relatório do Tutor - ${tutor.nome}`, 10, 10);

    doc.setFontSize(12);
    doc.text(`Nome: ${tutor.nome}`, 10, 20);
    doc.text(`CPF: ${tutor.cpf}`, 10, 30);
    doc.text(`Telefone: ${tutor.telefone}`, 10, 40);
    doc.text(`Email: ${tutor.email}`, 10, 50);
    doc.text(`Endereço: ${tutor.endereco}`, 10, 60);

    // Verifica os dados dos pets antes de tentar gerar o PDF
    const petsData = await fetchPetsData(tutor.id);
    if (!Array.isArray(petsData)) {
      console.error("Erro ao carregar dados dos pets.");
      return;
    }

    doc.text("Pets Vinculados:", 10, 70);
    petsData.forEach((pet: Pet, index: number) => {
      doc.text(`Pet ${index + 1}: ${pet.nome}`, 10, 80 + index * 10);
      doc.text(`Ra: ${pet.raca}`, 10, 90 + index * 10);
      doc.text(`Idade: ${pet.idade}`, 10, 100 + index * 10);
    });

    doc.save("relatorio_tutor.pdf");
  };

  // const fetchPetsData = async (tutorId: string) => {
  //   const response = await fetch(
  //     `http://localhost:4000/pets?tutorId=${tutorId}`
  //   );
  //   if (!response.ok) {
  //     console.error("Erro ao buscar dados dos pets");
  //     return [];
  //   }
  //   return response.json();
  // };

  const fetchPetsData = async (tutorId: string) => {
    try {
      const petsRef = collection(db, "pets");
      const q = query(petsRef, where("tutorId", "==", tutorId)); // Filtra os pets pelo ID do tutor
      const querySnapshot = await getDocs(q);

      const pets = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Pet[];

      return pets;
    } catch (error) {
      console.error("Erro ao buscar dados dos pets:", error);
      return [];
    }
  };

  // para abrir modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // para fechar modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // para salvar dados editados no modal
  const handleSave = (updatedData: Record<string, string>) => {
    setTutor((prev) => {
      if (prev) {
        return { ...prev, ...updatedData }; // Atualiza o tutor com os novos dados
      }
      return prev;
    });
  };

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
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <GeneralBtn
                      iconClass="fa-solid fa-pencil"
                      content="Editar"
                      onClick={handleOpenModal}
                    ></GeneralBtn>
                    <GeneralBtn
                      iconClass="fa-solid fa-comment-sms"
                      content="SMS"
                    ></GeneralBtn>
                    <GeneralBtn
                      iconClass="fa-solid fa-envelope"
                      content="Email"
                    ></GeneralBtn>
                    <GeneralBtn
                      iconClass="fa-solid fa-print"
                      content="imprimir"
                      onClick={handleGeneratePDF}
                    ></GeneralBtn>
                    {/* <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div> */}
                  </div>
                </div>
              </div>
              <div className="">
                <Tab labels={["Pets Cadastrados", "Pagamentos"]}>
                  <div className="py-5 px-5">
                    <div>
                      {pets.length > 0 ? (
                        <ul className="flex flex-col gap-5">
                          {pets.map((pet) => (
                            <li
                              key={pet.id}
                              className="flex flex-row gap-5 items-center"
                            >
                              <div>
                                <Avatar
                                  alt="imagem do usuário"
                                  src={imageUrl ? imageUrl : undefined}
                                  sx={{ width: 50, height: 50 }}
                                ></Avatar>
                              </div>
                              <div>
                                <div className="flex flex-col gap-1 ">
                                  <span className="text-l roboto-medium w-40 text-blue-500">
                                    {pet.nome}
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    {pet.raca}, {pet.idade} anos, {pet.genero}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <GeneralBtn
                                  iconClass=""
                                  content="Ver perfil"
                                ></GeneralBtn>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>Nenhum pet encontrado.</p>
                      )}
                    </div>
                  </div>
                  <div>Informações sobre pagamentos</div>
                </Tab>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* modal */}

      {/* <GeneralModal
        isOpen={openModal}
        onClose={handleCloseModal}
        onSave={handleSave}
        fields={[
          { name: "nome", label: "Nome", type: "text", value: tutor.nome },
          { name: "cpf", label: "CPF", type: "text", value: tutor.cpf },
          {
            name: "telefone",
            label: "Telefone",
            type: "text",
            value: tutor.telefone,
          },
          { name: "email", label: "Email", type: "email", value: tutor.email },
          {
            name: "endereco",
            label: "Endereço",
            type: "text",
            value: tutor.endereco,
          },
        ]}
        title="Editar Tutor"
        id={tutor.id}
        url="http://localhost:4000/tutores" // Passando o endpoint como prop
        method="PATCH" // Passando o método HTTP como prop
      /> */}
      <GeneralModal
        isOpen={openModal}
        onClose={handleCloseModal}
        onSave={handleSave}
        fields={[
          { name: "nome", label: "Nome", type: "text", value: tutor.nome },
          { name: "cpf", label: "CPF", type: "text", value: tutor.cpf },
          {
            name: "telefone",
            label: "Telefone",
            type: "text",
            value: tutor.telefone,
          },
          { name: "email", label: "Email", type: "email", value: tutor.email },
          {
            name: "endereco",
            label: "Endereço",
            type: "text",
            value: tutor.endereco,
          },
        ]}
        title="Editar Tutor"
        id={tutor.id}
        collectionName="tutores" // Nome da coleção no Firestore
      />
    </>
  );
}
