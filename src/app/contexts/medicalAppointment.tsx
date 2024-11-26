// // "use client";

// // import { useContext, useState, ReactNode, createContext } from "react";
// // import { db } from "@/lib/firebase/firebase.config";
// // import {
// //   collection,
// //   doc,
// //   getDocs,
// //   setDoc,
// //   getDoc,
// //   addDoc,
// // } from "firebase/firestore";
// // import Cookies from "js-cookie";

// // // Tipos e interfaces
// // interface AppointmentData {
// //   appointmentType: string;
// //   title: string;
// //   vet: string;
// //   notes: string;
// //   send_to_admission: boolean;
// //   timeStamp: string;
// //   isLast?: boolean;
// // }

// // type MedicalAppointmentContextType = {
// //   appointmentHistory: AppointmentData[];
// //   addMedicalAppointment: (
// //     patientId: string,
// //     appointmentData: AppointmentData
// //   ) => void;
// //   loadPatientAppointments: (patientId: string) => void;
// //   currentPatientId: string | null;
// // };

// // const MedicalAppointmentContext = createContext<
// //   MedicalAppointmentContextType | undefined
// // >(undefined);

// // // cria o provider
// // export function MedicalAppointmentProvider({
// //   children,
// // }: {
// //   children: ReactNode;
// // }) {
// //   const [appointmentHistory, setAppointmentHistory] = useState<
// //     AppointmentData[]
// //   >([]);
// //   const [currentPatientId, setCurrentPatientId] = useState<string | null>(null);

// //   // // Load appointments for a specific patient from Firestore
// //   // const loadPatientAppointments = async (patientId: string) => {
// //   //   if (patientId === currentPatientId) return;

// //   //   console.log("Atualizando o currentPatientId para:", patientId);
// //   //   setCurrentPatientId(patientId);

// //   //   try {
// //   //     // Acessa a subcoleção de consultas do paciente no Firestore
// //   //     const appointmentsCollection = collection(
// //   //       db,
// //   //       `tutores/${patientId}/appointments`
// //   //     );
// //   //     const querySnapshot = await getDocs(appointmentsCollection);

// //   //     const appointments = querySnapshot.docs.map((doc) => ({
// //   //       ...doc.data(),
// //   //       id: doc.id,
// //   //     })) as AppointmentData[];

// //   //     setAppointmentHistory(appointments);
// //   //   } catch (error) {
// //   //     console.error("Erro ao carregar consultas do paciente:", error);
// //   //     setAppointmentHistory([]);
// //   //   }
// //   // };

// //   // Load appointments for a specific patient from Firestore
// // const loadPatientAppointments = async (patientId: string) => {
// //   if (patientId === currentPatientId) return;

// //   console.log("Atualizando o currentPatientId para:", patientId);
// //   setCurrentPatientId(patientId);

// //   try {
// //     // Acessa a subcoleção de consultas do paciente no Firestore
// //     const appointmentsCollection = collection(
// //       db,
// //       `tutores/${tutorId}/petsVinculados/${petId}/´pet-medical-appointment`
// //     );
// //     const querySnapshot = await getDocs(appointmentsCollection);

// //     const appointments: AppointmentData[] = querySnapshot.docs.map((doc) => {
// //       const data = doc.data();

// //       // Validação para garantir que os dados estejam no formato correto
// //       return {
// //         appointmentType: data.appointmentType || "",  // Adapte conforme a estrutura real dos dados
// //         title: data.title || "",
// //         vet: data.vet || "",
// //         notes: data.notes || "",
// //         send_to_admission: data.send_to_admission || false,
// //         timeStamp: data.timeStamp || "",
// //         isLast: data.isLast || false,
// //         id: doc.id,  // Adicionando o id do documento
// //       };
// //     });

// //     setAppointmentHistory(appointments);
// //   } catch (error) {
// //     console.error("Erro ao carregar consultas do paciente:", error);
// //     setAppointmentHistory([]);
// //   }
// // };

// //   // Function to add a medical appointment for a specific patient to Firestore
// //   const addMedicalAppointment = async (
// //     patientId: string,
// //     appointmentData: AppointmentData
// //   ) => {
// //     try {
// //       // Acessa a subcoleção de consultas do paciente e adiciona uma nova consulta
// //       const appointmentsCollection = collection(
// //         db,
// //         `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
// //       );

// //       await addDoc(appointmentsCollection, appointmentData);

// //       // Atualiza o estado se este for o paciente atual sendo visualizado
// //       if (patientId === currentPatientId) {
// //         setAppointmentHistory((prev) => [...prev, appointmentData]);
// //       }
// //     } catch (error) {
// //       console.error("Erro ao adicionar consulta:", error);
// //     }
// //   };

// //   const value = {
// //     appointmentHistory,
// //     addMedicalAppointment,
// //     loadPatientAppointments,
// //     currentPatientId,
// //   };

// //   return (
// //     <MedicalAppointmentContext.Provider value={value}>
// //       {children}
// //     </MedicalAppointmentContext.Provider>
// //   );
// // }

// // // chama o contexto
// // export function useMedicalAppointmentContext() {
// //   const context = useContext(MedicalAppointmentContext);
// //   if (context === undefined) {
// //     throw new Error(
// //       "useMedicalAppointmentContext must be used within a MedicalAppointmentProvider"
// //     );
// //   }
// //   return context;
// // }

// "use client";

// import {
//   useContext,
//   useState,
//   ReactNode,
//   createContext,
//   useEffect,
// } from "react";
// import { db } from "@/lib/firebase/firebase.config";
// import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";
// import { useRouter } from "next/router";
// // import Cookies from "js-cookie";

// // Tipos e interfaces
// interface AppointmentData {
//   appointmentType: string;
//   title: string;
//   vet: string;
//   notes: string;
//   send_to_admission: boolean;
//   timeStamp: string;
//   isLast?: boolean;
// }

// type MedicalAppointmentContextType = {
//   appointmentHistory: AppointmentData[];
//   addMedicalAppointment: (
//     tutorId: string,
//     petId: string,
//     appointmentData: AppointmentData
//   ) => void;
//   loadPatientAppointments: (tutorId: string, petId: string) => void;
//   currentPatientId: string | null;
//   currentTutorId: string | null; // Adicionando o currentTutorId
// };

// const MedicalAppointmentContext = createContext<
//   MedicalAppointmentContextType | undefined
// >(undefined);

// // cria o provider
// export function MedicalAppointmentProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [appointmentHistory, setAppointmentHistory] = useState<
//     AppointmentData[]
//   >([]);
//   const [currentPatientId, setCurrentPatientId] = useState<string | null>(null);
//   const [currentTutorId, setCurrentTutorId] = useState<string | null>(null);
//   const tutorIdFromUrl = useRouter().query.tutorId as string;

//   // Função para carregar as consultas de um paciente específico do Firestore
//   const loadPatientAppointments = async (tutorId: string, petId: string) => {
//     if (petId === currentPatientId) return;

//     console.log("Atualizando o currentPatientId para:", petId);
//     setCurrentPatientId(petId);

//     try {
//       // Acessa a subcoleção de consultas do pet no Firestore
//       const appointmentsCollection = collection(
//         db,
//         `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//       );
//       const querySnapshot = await getDocs(appointmentsCollection);

//       const appointments: AppointmentData[] = querySnapshot.docs.map((doc) => {
//         const data = doc.data();

//         // Validação para garantir que os dados estejam no formato correto
//         return {
//           appointmentType: data.appointmentType || "", // Adapte conforme a estrutura real dos dados
//           title: data.title || "",
//           vet: data.vet || "",
//           notes: data.notes || "",
//           send_to_admission: data.send_to_admission || false,
//           timeStamp: data.timeStamp || "",
//           isLast: data.isLast || false,
//           id: doc.id, // Adicionando o id do documento
//         };
//       });

//       setAppointmentHistory(appointments);
//     } catch (error) {
//       console.error("Erro ao carregar consultas do paciente:", error);
//       setAppointmentHistory([]);
//     }
//   };

//   // Função para obter os dados do tutorId do Firebase
//   useEffect(() => {
//     const fetchTutorId = async () => {
//       if (!tutorIdFromUrl) return; // Verifique se o tutorId da URL existe

//       try {
//         const tutorDoc = await getDoc(doc(db, "tutores", tutorIdFromUrl)); // Usando tutorId da URL
//         if (tutorDoc.exists()) {
//           setCurrentTutorId(tutorDoc.id); // Defina o tutorId a partir do Firestore

//         } else {
//           console.log("Tutor não encontrado!");
//         }
//       } catch (error) {
//         console.error("Erro ao buscar tutorId: ", error);
//       }
//     };

//     fetchTutorId();
//   }, [tutorIdFromUrl]);

//   // Função para adicionar uma nova consulta de um paciente no Firestore
//   const addMedicalAppointment = async (
//     tutorId: string,
//     petId: string,
//     appointmentData: AppointmentData
//   ) => {
//     try {
//       // Acessa a subcoleção de consultas do pet e adiciona uma nova consulta
//       const appointmentsCollection = collection(
//         db,
//         `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//       );

//       await addDoc(appointmentsCollection, appointmentData);

//       // Atualiza o estado se este for o paciente atual sendo visualizado
//       if (petId === currentPatientId) {
//         setAppointmentHistory((prev) => [...prev, appointmentData]);
//       }
//     } catch (error) {
//       console.error("Erro ao adicionar consulta:", error);
//     }
//   };

//   const value = {
//     appointmentHistory,
//     addMedicalAppointment,
//     loadPatientAppointments,
//     currentPatientId,
//     currentTutorId,
//   };

//   return (
//     <MedicalAppointmentContext.Provider value={value}>
//       {children}
//     </MedicalAppointmentContext.Provider>
//   );
// }

// // chama o contexto
// export function useMedicalAppointmentContext() {
//   const context = useContext(MedicalAppointmentContext);
//   if (context === undefined) {
//     throw new Error(
//       "useMedicalAppointmentContext must be used within a MedicalAppointmentProvider"
//     );
//   }
//   return context;
// }

// "use client";

// import {
//   useContext,
//   useState,
//   ReactNode,
//   createContext,
//   useEffect,
// } from "react";
// import { db } from "@/lib/firebase/firebase.config";
// import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";
// // import Cookies from "js-cookie";

// // Tipos e interfaces
// interface AppointmentData {
//   appointmentType: string;
//   title: string;
//   vet: string;
//   notes: string;
//   send_to_admission: boolean;
//   timeStamp: string;
//   isLast?: boolean;
// }

// type MedicalAppointmentContextType = {
//   appointmentHistory: AppointmentData[];
//   addMedicalAppointment: (
//     tutorId: string,
//     petId: string,
//     appointmentData: AppointmentData
//   ) => void;
//   loadPatientAppointments: (tutorId: string, petId: string) => void;
//   currentPatientId: string | null;
//   currentTutorId: string | null; // Adicionando o currentTutorId
// };

// const MedicalAppointmentContext = createContext<
//   MedicalAppointmentContextType | undefined
// >(undefined);

// // cria o provider
// export function MedicalAppointmentProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [appointmentHistory, setAppointmentHistory] = useState<
//     AppointmentData[]
//   >([]);
//   const [currentPatientId, setCurrentPatientId] = useState<string | null>(null);
//   const [currentTutorId, setCurrentTutorId] = useState<string | null>(null);

//   // Função para carregar as consultas de um paciente específico do Firestore
//   const loadPatientAppointments = async (tutorId: string, petId: string) => {
//     if (petId === currentPatientId) return; // Evita carregar se o ID do paciente já estiver correto

//     console.log("Atualizando o currentPatientId para:", petId);
//     setCurrentPatientId(petId);

//     try {
//       // Acessa a subcoleção de consultas do pet no Firestore
//       const appointmentsCollection = collection(
//         db,
//         `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//       );
//       const querySnapshot = await getDocs(appointmentsCollection);

//       const appointments: AppointmentData[] = querySnapshot.docs.map((doc) => {
//         const data = doc.data();
//         return {
//           appointmentType: data.appointmentType || "",
//           title: data.title || "",
//           vet: data.vet || "",
//           notes: data.notes || "",
//           send_to_admission: data.send_to_admission || false,
//           timeStamp: data.timeStamp || "",
//           isLast: data.isLast || false,
//           id: doc.id,
//         };
//       });

//       setAppointmentHistory(appointments);
//     } catch (error) {
//       console.error("Erro ao carregar consultas do paciente:", error);
//       setAppointmentHistory([]);
//     }
//   };

//   // Função para obter os dados do tutorId do Firebase
//   useEffect(() => {
//     const fetchTutorId = async () => {
//       const tutorIdFromUrl = "exemploTutorId"; // Substitua isso com a forma de obter o tutorId da URL ou estado global

//       if (!tutorIdFromUrl) return; // Verifique se o tutorId existe

//       try {
//         const tutorDoc = await getDoc(doc(db, "tutores", tutorIdFromUrl)); // Usando tutorId da URL
//         if (tutorDoc.exists()) {
//           setCurrentTutorId(tutorDoc.id); // Defina o tutorId a partir do Firestore
//         } else {
//           console.log("Tutor não encontrado!");
//         }
//       } catch (error) {
//         console.error("Erro ao buscar tutorId: ", error);
//       }
//     };

//     fetchTutorId();
//   }, []); // Essa função é chamada uma vez ao montar o componente

//   // Função para adicionar uma nova consulta de um paciente no Firestore
//   const addMedicalAppointment = async (
//     tutorId: string,
//     petId: string,
//     appointmentData: AppointmentData
//   ) => {
//     try {
//       // Acessa a subcoleção de consultas do pet e adiciona uma nova consulta
//       const appointmentsCollection = collection(
//         db,
//         `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//       );

//       await addDoc(appointmentsCollection, appointmentData);

//       // Atualiza o estado se este for o paciente atual sendo visualizado
//       if (petId === currentPatientId) {
//         setAppointmentHistory((prev) => [...prev, appointmentData]);
//       }
//     } catch (error) {
//       console.error("Erro ao adicionar consulta:", error);
//     }
//   };

//   const value = {
//     appointmentHistory,
//     addMedicalAppointment,
//     loadPatientAppointments,
//     currentPatientId,
//     currentTutorId,
//   };

//   return (
//     <MedicalAppointmentContext.Provider value={value}>
//       {children}
//     </MedicalAppointmentContext.Provider>
//   );
// }

// // chama o contexto
// export function useMedicalAppointmentContext() {
//   const context = useContext(MedicalAppointmentContext);
//   if (context === undefined) {
//     throw new Error(
//       "useMedicalAppointmentContext must be used within a MedicalAppointmentProvider"
//     );
//   }
//   return context;
// }

// useEffect(() => {
//   const fetchTutorAndPetId = async () => {
//     try {
//       // Buscando todos os pets vinculados ao tutor.
//       const petSnapshot = await getDocs(
//         collection(db, "tutores/{tutorId}/petsVinculados")
//       );

//       // Verifica se a consulta de pets retorna algum resultado
//       if (petSnapshot.empty) {
//         console.error("Nenhum pet encontrado para este tutor.");
//         return; // Retorna caso não haja pets encontrados
//       }

//       console.log(`Pets encontrados para o tutor: ${petSnapshot.size}`);
//       petSnapshot.docs.forEach((doc) => {
//         console.log("Pet encontrado:", doc.id, doc.data()); // Logs os pets encontrados
//       });

//       const petDoc = petSnapshot.docs[0]; // Pegando o primeiro pet
//       const petId = petDoc.id;
//       console.log("Pet ID:", petId);

//       // Acessa o tutorId através do caminho do documento
//       const tutorId = petDoc.ref.parent.parent?.id; // Obtém o tutorId do caminho
//       if (!tutorId) {
//         console.error("Tutor ID não encontrado.");
//         return;
//       }

//       console.log("Tutor ID extraído do caminho:", tutorId);

//       // Agora, busca o documento do tutor
//       const tutorDoc = await getDoc(doc(db, "tutores", tutorId));

//       if (!tutorDoc.exists()) {
//         console.error("Tutor não encontrado!");
//         return;
//       }

//       console.log("Dados do Tutor:", tutorDoc.data());

//       // Atualiza o estado com o tutorId e petId
//       setCurrentTutorId(tutorDoc.id);
//       setCurrentPatientId(petId);

//       // Carrega as consultas médicas para o pet
//       loadPatientAppointments(tutorId, petId);
//     } catch (error) {
//       console.error("Erro ao buscar tutorId e petId:", error);
//     }
//   };

//   fetchTutorAndPetId();
// }, [loadPatientAppointments]);

// useEffect(() => {
//   const fetchTutorAndPetId = async () => {
//     try {
//       // Aqui estamos buscando todos os pets do tutor
//       const petSnapshot = await getDocs(
//         collection(db, "tutores/{tutorId}/petsVinculados")
//       );

//       if (petSnapshot.empty) {
//         console.error("Nenhum pet encontrado para este tutor.");
//         return; // Retorna se não houver pets na coleção
//       }

//       console.log(`Pets encontrados para o tutor: ${petSnapshot.size}`);

//       // Exibindo todos os pets encontrados
//       petSnapshot.docs.forEach((doc) => {
//         console.log("Pet encontrado:", doc.id, doc.data());
//       });

//       const petDoc = petSnapshot.docs[0]; // Pegando o primeiro pet
//       const petId = petDoc.id;
//       console.log("Pet ID:", petId);

//       // Agora, para buscar o tutor, o tutorId será obtido do caminho do documento.
//       // O tutorId está implícito no caminho do documento
//       const tutorId = petDoc.ref.parent.parent?.id; // Obtém o tutorId do caminho do documento

//       if (!tutorId) {
//         console.error("Tutor ID não encontrado.");
//         return;
//       }

//       console.log("Tutor ID extraído do caminho:", tutorId); // Log tutorId

//       // Agora que sabemos que temos um tutorId, buscamos o documento do tutor
//       const tutorDoc = await getDoc(doc(db, "tutores", tutorId));

//       if (!tutorDoc.exists()) {
//         console.error("Tutor não encontrado!");
//         return;
//       }

//       console.log("Dados do Tutor:", tutorDoc.data());

//       // Defina o tutorId no estado
//       setCurrentTutorId(tutorDoc.id);

//       // Define o petId no estado
//       setCurrentPatientId(petId);

//       // Carrega as consultas do paciente
//       loadPatientAppointments(tutorId, petId);
//     } catch (error) {
//       console.error("Erro ao buscar tutorId e petId:", error);
//     }
//   };

//   fetchTutorAndPetId();
// }, [loadPatientAppointments]);

// useEffect(() => {
//   const fetchTutorAndPetId = async () => {
//     try {
//       // Buscando os dados no Firestore
//       const petSnapshot = await getDocs(
//         collection(db, "tutores/{tutorId}/petsVinculados")
//       );

//       if (petSnapshot.empty) {
//         console.error("Nenhum pet encontrado para este tutor.");
//         return; // Retorna se não houver pets na coleção
//       }

//       const petDoc = petSnapshot.docs[0]; // Pegando o primeiro pet
//       const tutorId = petDoc.data()?.tutorId;

//       if (!tutorId) {
//         console.error("Tutor ID não encontrado no petSnapshot.");
//         return;
//       }

//       console.log("Tutor ID:", tutorId); // Verifique o tutorId

//       // Agora que sabemos que temos um tutorId, buscamos o documento do tutor
//       const tutorDoc = await getDoc(doc(db, "tutores", tutorId));

//       if (!tutorDoc.exists()) {
//         console.error("Tutor não encontrado!");
//         return; // Retorna se o documento do tutor não existir
//       }

//       console.log("Dados do Tutor:", tutorDoc.data()); // Verifique os dados do tutor

//       // Define o tutorId no estado
//       setCurrentTutorId(tutorDoc.id);

//       // Pega o petId do primeiro pet
//       const petId = petDoc.id;
//       console.log("Pet ID:", petId); // Verifique o petId
//       setCurrentPatientId(petId);

//       // Carrega as consultas do paciente
//       loadPatientAppointments(tutorId, petId);
//     } catch (error) {
//       console.error("Erro ao buscar tutorId e petId:", error);
//     }
//   };

//   fetchTutorAndPetId();
// }, [loadPatientAppointments]);

// Função para obter o tutorId e petId do Firebase
// useEffect(() => {
//   const fetchTutorAndPetId = async () => {
//     try {
//       // Buscando os dados no Firestore...
//       const petSnapshot = await getDocs(
//         collection(db, "tutores/{tutorId}/petsVinculados")
//       );
//       const tutorId = petSnapshot.docs[0]?.data().tutorId;
//       console.log("Tutor ID:", tutorId); // Verifique o tutorId
//       const tutorDoc = await getDoc(doc(db, "tutores", tutorId));

//       if (tutorDoc.exists()) {
//         const tutorId = tutorDoc.id;
//         setCurrentTutorId(tutorId);

//         const petsCollection = collection(
//           db,
//           `tutores/${tutorId}/petsVinculados`
//         );
//         const petSnapshot = await getDocs(petsCollection);
//         if (!petSnapshot.empty) {
//           const petId = petSnapshot.docs[0].id;
//           console.log("Pet ID:", petId); // Verifique o petId
//           setCurrentPatientId(petId);

//           loadPatientAppointments(tutorId, petId);
//         }
//       } else {
//         console.log("Tutor não encontrado!");
//       }
//     } catch (error) {
//       console.error("Erro ao buscar tutorId e petId:", error);
//     }
//   };

//   fetchTutorAndPetId();
// }, [loadPatientAppointments]);

// Função para adicionar uma nova consulta de um paciente no Firestore
// const addMedicalAppointment = async (
//   tutorId: string,
//   petId: string,
//   appointmentData: AppointmentData
// ) => {
//   try {
//     // Verifique os dados antes de tentar adicionar no Firestore
//     console.log("Adicionando consulta com os dados:", {
//       tutorId,
//       petId,
//       appointmentData,
//     });

//     const appointmentsCollection = collection(
//       db,
//       `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//     );

//     await addDoc(appointmentsCollection, appointmentData);

//     // Atualiza o estado se este for o paciente atual sendo visualizado
//     if (petId === currentPatientId) {
//       setAppointmentHistory((prev) => [...prev, appointmentData]);
//     }
//   } catch (error) {
//     console.error("Erro ao adicionar consulta:", error);
//   }
// };

// "use client";

// import {
//   useContext,
//   useState,
//   ReactNode,
//   createContext,
//   useEffect,
//   useCallback,
// } from "react";
// import { db } from "@/lib/firebase/firebase.config";
// import { collection, getDocs, addDoc } from "firebase/firestore"; //doc, getDoc,
// import { useRouter } from "next/router";

// // Tipos e interfaces
// interface AppointmentData {
//   appointmentType: string;
//   title: string;
//   vet: string;
//   notes: string;
//   send_to_admission: boolean;
//   timeStamp: string;
//   isLast?: boolean;
// }

// type MedicalAppointmentContextType = {
//   appointmentHistory: AppointmentData[];
//   addMedicalAppointment: (
//     tutorId: string,
//     petId: string,
//     appointmentData: AppointmentData
//   ) => Promise<void>; // Tipando addMedicalAppointment
//   loadPatientAppointments: (tutorId: string, petId: string) => void;
//   currentPatientId: string | null;
//   currentTutorId: string | null;
//   setCurrentPatientId: React.Dispatch<React.SetStateAction<string | null>>; // Adicionando setCurrentPatientId
//   setCurrentTutorId: React.Dispatch<React.SetStateAction<string | null>>; // Adicionando setCurrentTutorId
// };

// const MedicalAppointmentContext = createContext<
//   MedicalAppointmentContextType | undefined
// >(undefined);

// // cria o provider
// export function MedicalAppointmentProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [appointmentHistory, setAppointmentHistory] = useState<
//     AppointmentData[]
//   >([]);
//   const [currentPatientId, setCurrentPatientId] = useState<string | null>(null);
//   const [currentTutorId, setCurrentTutorId] = useState<string | null>(null);

//   const router = useRouter();
//   const { tutorId, petId } = router.query; // pega os parâmetros tutorId e petId da URL

//   // // Função para carregar as consultas de um paciente específico do Firestore
//   // const loadPatientAppointments = async (tutorId: string, petId: string) => {
//   //   if (petId === currentPatientId) return; // Evita carregar se o ID do paciente já estiver correto

//   //   console.log("Atualizando o currentPatientId para:", petId);
//   //   setCurrentPatientId(petId);

//   //   try {
//   //     const appointmentsCollection = collection(
//   //       db,
//   //       `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//   //     );
//   //     const querySnapshot = await getDocs(appointmentsCollection);

//   //     const appointments: AppointmentData[] = querySnapshot.docs.map((doc) => {
//   //       const data = doc.data();
//   //       return {
//   //         appointmentType: data.appointmentType || "",
//   //         title: data.title || "",
//   //         vet: data.vet || "",
//   //         notes: data.notes || "",
//   //         send_to_admission: data.send_to_admission || false,
//   //         timeStamp: data.timeStamp || "",
//   //         isLast: data.isLast || false,
//   //         id: doc.id,
//   //       };
//   //     });

//   //     setAppointmentHistory(appointments);
//   //   } catch (error) {
//   //     console.error("Erro ao carregar consultas do paciente:", error);
//   //     setAppointmentHistory([]);
//   //   }
//   // };

//   // Função para carregar as consultas de um paciente específico do Firestore
//   const loadPatientAppointments = useCallback(
//     async (tutorId: string, petId: string) => {
//       if (petId === currentPatientId) return; // Evita carregar se o ID do paciente já estiver correto

//       console.log("Atualizando o currentPatientId para:", petId);
//       setCurrentPatientId(petId);

//       try {
//         // Acessa a subcoleção de consultas do pet no Firestore
//         const appointmentsCollection = collection(
//           db,
//           `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//         );
//         const querySnapshot = await getDocs(appointmentsCollection);

//         const appointments: AppointmentData[] = querySnapshot.docs.map(
//           (doc) => {
//             const data = doc.data();
//             return {
//               appointmentType: data.appointmentType || "",
//               title: data.title || "",
//               vet: data.vet || "",
//               notes: data.notes || "",
//               send_to_admission: data.send_to_admission || false,
//               timeStamp: data.timeStamp || "",
//               isLast: data.isLast || false,
//               id: doc.id,
//             };
//           }
//         );

//         setAppointmentHistory(appointments);
//       } catch (error) {
//         console.error("Erro ao carregar consultas do paciente:", error);
//         setAppointmentHistory([]);
//       }
//     },
//     [currentPatientId] // Passando dependência para currentPatientId
//   );

//   // / Aqui é onde você adiciona o useEffect para monitorar as mudanças de currentTutorId e currentPatientId
//   // useEffect(() => {
//   //   if (currentTutorId && currentPatientId) {
//   //     loadPatientAppointments(currentTutorId, currentPatientId);
//   //   }
//   // }, [currentTutorId, currentPatientId, loadPatientAppointments]);

//   // useEffect(() => {
//   //   const fetchTutorAndPetId = async () => {
//   //     try {
//   //       const tutorId = currentTutorId; // Obtenha o tutorId dinamicamente

//   //       if (!tutorId) {
//   //         console.error("Tutor ID não encontrado.");
//   //         return; // Retorna se não houver tutorId disponível
//   //       }

//   //       // Buscar pets do tutor
//   //       const petSnapshot = await getDocs(
//   //         collection(db, `tutores/${tutorId}/petsVinculados`)
//   //       );

//   //       if (petSnapshot.empty) {
//   //         console.error("Nenhum pet encontrado para este tutor.");
//   //         return;
//   //       }

//   //       // Pegando o primeiro pet encontrado para exemplo
//   //       const petDoc = petSnapshot.docs[0]; // Pegando o primeiro pet
//   //       const petId = petDoc.id;
//   //       console.log("Pet ID:", petId);

//   //       // Buscar as consultas para esse pet
//   //       const appointmentSnapshot = await getDocs(
//   //         collection(
//   //           db,
//   //           `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//   //         )
//   //       );

//   //       if (appointmentSnapshot.empty) {
//   //         console.error("Nenhuma consulta encontrada para este pet.");
//   //         return;
//   //       }

//   //       // Mapeando as consultas e ajustando a estrutura de dados para o tipo AppointmentData
//   //       const appointments: AppointmentData[] = appointmentSnapshot.docs.map(
//   //         (doc) => {
//   //           const data = doc.data();

//   //           // Garantindo que o objeto tem todos os campos necessários para ser do tipo AppointmentData
//   //           return {
//   //             appointmentType: data.appointmentType || "", // Garantindo que todos os campos existam
//   //             title: data.title || "",
//   //             vet: data.vet || "",
//   //             notes: data.notes || "",
//   //             send_to_admission: data.send_to_admission || false,
//   //             timeStamp: data.timeStamp || "",
//   //             isLast: data.isLast || false,
//   //             id: doc.id, // Incluindo o ID da consulta
//   //           };
//   //         }
//   //       );

//   //       // Atualizando o estado com as consultas
//   //       setAppointmentHistory(appointments);
//   //     } catch (error) {
//   //       console.error("Erro ao buscar tutorId, petId e consultas:", error);
//   //     }
//   //   };

//   //   fetchTutorAndPetId();
//   // }, [currentTutorId]); // Aqui a dependência de currentTutorId vai garantir que a busca ocorra quando o tutorId mudar

//   useEffect(() => {
//     const fetchTutorAndPetId = async () => {
//       try {
//         const tutorId = currentTutorId || router.query.tutorId;  // Pega o tutorId da rota ou do contexto
//         const petId = currentPatientId || router.query.petId;  // Pega o petId da rota ou do contexto

//         if (!tutorId || !petId) {
//           console.error("Tutor ID ou Pet ID não fornecido.");
//           return;
//         }

//         // Buscar as consultas para esse pet e tutor específicos
//         const appointmentSnapshot = await getDocs(
//           collection(db, `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`)
//         );

//         if (appointmentSnapshot.empty) {
//           console.error("Nenhuma consulta encontrada para este pet.");
//           return;
//         }

//         // Mapeando as consultas e ajustando a estrutura de dados para o tipo AppointmentData
//         const appointments: AppointmentData[] = appointmentSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             appointmentType: data.appointmentType || "",
//             title: data.title || "",
//             vet: data.vet || "",
//             notes: data.notes || "",
//             send_to_admission: data.send_to_admission || false,
//             timeStamp: data.timeStamp || "",
//             isLast: data.isLast || false,
//             id: doc.id,
//           };
//         });

//         setAppointmentHistory(appointments);
//       } catch (error) {
//         console.error("Erro ao buscar tutorId, petId e consultas:", error);
//       }
//     };

//     if (router.query.tutorId && router.query.petId) {
//       fetchTutorAndPetId();
//     }
//   }, [router.query.tutorId, router.query.petId, currentPatientId]);

//   // const addMedicalAppointment = async (
//   //   tutorId: string,
//   //   petId: string,
//   //   appointmentData: AppointmentData
//   // ) => {
//   //   try {
//   //     console.log("Adicionando consulta com os dados:", {
//   //       tutorId,
//   //       petId,
//   //       appointmentData,
//   //     });

//   //     // Verifica se tutorId e petId são válidos
//   //     if (!tutorId || !petId) {
//   //       console.error("Tutor ID ou Pet ID não fornecido");
//   //       return;
//   //     }

//   //     const appointmentsCollection = collection(
//   //       db,
//   //       `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//   //     );

//   //     // Adiciona a consulta
//   //     const docRef = await addDoc(appointmentsCollection, appointmentData);

//   //     // Verifica se a adição foi bem-sucedida
//   //     alert("Consulta adicionada com sucesso!");
//   //     console.log("Consulta adicionada com sucesso! ID:", docRef.id);

//   //     // Se for o paciente atual, atualize o histórico de consultas
//   //     if (petId === currentPatientId) {
//   //       setAppointmentHistory((prev) => [
//   //         ...prev,
//   //         { ...appointmentData, id: docRef.id },
//   //       ]);
//   //     }
//   //   } catch (error) {
//   //     console.error("Erro ao adicionar consulta:", error);
//   //   }
//   // };

//   const addMedicalAppointment = async (
//     tutorId: string,
//     petId: string,
//     appointmentData: AppointmentData
//   ) => {
//     try {
//       if (!tutorId || !petId) {
//         console.error("Tutor ID ou Pet ID não fornecido");
//         return;
//       }

//       const appointmentsCollection = collection(
//         db,
//         `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//       );

//       // Adiciona a consulta
//       const docRef = await addDoc(appointmentsCollection, appointmentData);

//       // Verifica se a adição foi bem-sucedida
//       alert("Consulta adicionada com sucesso!");
//       console.log("Consulta adicionada com sucesso! ID:", docRef.id);

//       // Se for o paciente atual, atualize o histórico de consultas
//       if (petId === currentPatientId) {
//         setAppointmentHistory((prev) => [
//           ...prev,
//           { ...appointmentData, id: docRef.id },
//         ]);
//       }
//     } catch (error) {
//       console.error("Erro ao adicionar consulta:", error);
//     }
//   };

//   const value = {
//     appointmentHistory,
//     addMedicalAppointment,
//     loadPatientAppointments,
//     currentPatientId,
//     currentTutorId,
//     setCurrentPatientId,
//     setCurrentTutorId,
//   };

//   return (
//     <MedicalAppointmentContext.Provider value={value}>
//       {children}
//     </MedicalAppointmentContext.Provider>
//   );
// }

// // chama o contexto
// export function useMedicalAppointmentContext() {
//   const context = useContext(MedicalAppointmentContext);
//   if (context === undefined) {
//     throw new Error(
//       "useMedicalAppointmentContext must be used within a MedicalAppointmentProvider"
//     );
//   }
//   return context;
// }

// "use client";

// import {
//   useContext,
//   useState,
//   ReactNode,
//   createContext,
//   useEffect,
//   useCallback,
// } from "react";
// import { db } from "@/lib/firebase/firebase.config";
// import { collection, getDocs, addDoc } from "firebase/firestore";
// import { useRouter } from "next/router";

// // Tipos e interfaces
// interface AppointmentData {
//   appointmentType: string;
//   title: string;
//   vet: string;
//   notes: string;
//   send_to_admission: boolean;
//   timeStamp: string;
//   isLast?: boolean;
// }

// type MedicalAppointmentContextType = {
//   appointmentHistory: AppointmentData[];
//   addMedicalAppointment: (
//     tutorId: string,
//     petId: string,
//     appointmentData: AppointmentData
//   ) => Promise<void>;
//   loadPatientAppointments: (tutorId: string, petId: string) => void;
//   currentPatientId: string | null;
//   currentTutorId: string | null;
//   setCurrentPatientId: React.Dispatch<React.SetStateAction<string | null>>;
//   setCurrentTutorId: React.Dispatch<React.SetStateAction<string | null>>;
// };

// const MedicalAppointmentContext = createContext<
//   MedicalAppointmentContextType | undefined
// >(undefined);

// // cria o provider
// export function MedicalAppointmentProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [appointmentHistory, setAppointmentHistory] = useState<
//     AppointmentData[]
//   >([]);
//   const [currentPatientId, setCurrentPatientId] = useState<string | null>(null);
//   const [currentTutorId, setCurrentTutorId] = useState<string | null>(null);
//   const [isClient, setIsClient] = useState(false);

//   const router = useRouter();
//   const { tutorId, petId } = router.query; // Pega os parâmetros tutorId e petId da URL

//   // Função para carregar as consultas de um paciente específico do Firestore
//   const loadPatientAppointments = useCallback(
//     async (tutorId: string, petId: string) => {
//       if (petId === currentPatientId) return; // Evita carregar se o ID do paciente já estiver correto

//       console.log("Atualizando o currentPatientId para:", petId);
//       setCurrentPatientId(petId);

//       try {
//         const appointmentsCollection = collection(
//           db,
//           `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//         );
//         const querySnapshot = await getDocs(appointmentsCollection);

//         const appointments: AppointmentData[] = querySnapshot.docs.map(
//           (doc) => {
//             const data = doc.data();
//             return {
//               appointmentType: data.appointmentType || "",
//               title: data.title || "",
//               vet: data.vet || "",
//               notes: data.notes || "",
//               send_to_admission: data.send_to_admission || false,
//               timeStamp: data.timeStamp || "",
//               isLast: data.isLast || false,
//               id: doc.id,
//             };
//           }
//         );

//         setAppointmentHistory(appointments);
//       } catch (error) {
//         console.error("Erro ao carregar consultas do paciente:", error);
//         setAppointmentHistory([]);
//       }
//     },
//     [currentPatientId] // Passando dependência para currentPatientId
//   );

//   // useEffect para verificar se o código está sendo executado no lado do cliente
//   useEffect(() => {
//     setIsClient(true); // Definimos que estamos no lado do cliente
//   }, []);

//   // useEffect para garantir que a consulta seja carregada assim que os IDs forem definidos
//   useEffect(() => {
//     if (!isClient) return; // Não faz nada se não estamos no lado do cliente
//     const tutorIdFromUrl = tutorId || currentTutorId; // Prioriza o tutorId da URL, mas usa o do contexto se disponível
//     const petIdFromUrl = petId || currentPatientId; // Prioriza o petId da URL, mas usa o do contexto se disponível

//     if (tutorIdFromUrl && petIdFromUrl) {
//       if (!currentTutorId || !currentPatientId) {
//         // Caso os IDs ainda não estejam configurados, define-os
//         setCurrentTutorId(tutorIdFromUrl as string);
//         setCurrentPatientId(petIdFromUrl as string);
//       }
//       // Carrega as consultas médicas assim que os IDs forem configurados
//       loadPatientAppointments(tutorIdFromUrl as string, petIdFromUrl as string);
//     }
//   }, [
//     tutorId,
//     petId,
//     currentTutorId,
//     currentPatientId,
//     loadPatientAppointments,
//     isClient,
//   ]);

//   // Função para adicionar uma consulta médica
//   const addMedicalAppointment = async (
//     tutorId: string,
//     petId: string,
//     appointmentData: AppointmentData
//   ) => {
//     try {
//       if (!tutorId || !petId) {
//         console.error("Tutor ID ou Pet ID não fornecido");
//         return;
//       }

//       const appointmentsCollection = collection(
//         db,
//         `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
//       );

//       // Adiciona a consulta
//       const docRef = await addDoc(appointmentsCollection, appointmentData);

//       // Verifica se a adição foi bem-sucedida
//       alert("Consulta adicionada com sucesso!");
//       console.log("Consulta adicionada com sucesso! ID:", docRef.id);

//       // Se for o paciente atual, atualize o histórico de consultas
//       if (petId === currentPatientId) {
//         setAppointmentHistory((prev) => [
//           ...prev,
//           { ...appointmentData, id: docRef.id },
//         ]);
//       }
//     } catch (error) {
//       console.error("Erro ao adicionar consulta:", error);
//     }
//   };

//   const value = {
//     appointmentHistory,
//     addMedicalAppointment,
//     loadPatientAppointments,
//     currentPatientId,
//     currentTutorId,
//     setCurrentPatientId,
//     setCurrentTutorId,
//   };

//   return (
//     <MedicalAppointmentContext.Provider value={value}>
//       {children}
//     </MedicalAppointmentContext.Provider>
//   );
// }

// // chama o contexto
// export function useMedicalAppointmentContext() {
//   const context = useContext(MedicalAppointmentContext);
//   if (context === undefined) {
//     throw new Error(
//       "useMedicalAppointmentContext must be used within a MedicalAppointmentProvider"
//     );
//   }
//   return context;
// }

"use client";

import {
  useContext,
  useState,
  ReactNode,
  createContext,
  useEffect,
  useCallback,
} from "react";
import { db } from "@/lib/firebase/firebase.config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useSearchParams } from "next/navigation"; // Alteração para usar useSearchParams

// Tipos e interfaces
interface AppointmentData {
  appointmentType: string;
  title: string;
  vet: string;
  notes: string;
  send_to_admission: boolean;
  timeStamp: string;
  isLast?: boolean;
}

type MedicalAppointmentContextType = {
  appointmentHistory: AppointmentData[];
  addMedicalAppointment: (
    tutorId: string,
    petId: string,
    appointmentData: AppointmentData
  ) => Promise<void>;
  loadPatientAppointments: (tutorId: string, petId: string) => void;
  currentPatientId: string | null;
  currentTutorId: string | null;
  setCurrentPatientId: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentTutorId: React.Dispatch<React.SetStateAction<string | null>>;
  tutorId: string | null; // Tutor ID (se necessário em outro ponto do contexto)
  petId: string | null;
};

const MedicalAppointmentContext = createContext<
  MedicalAppointmentContextType | undefined
>(undefined);

// cria o provider
export function MedicalAppointmentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [appointmentHistory, setAppointmentHistory] = useState<
    AppointmentData[]
  >([]);
  const [currentPatientId, setCurrentPatientId] = useState<string | null>(null);
  const [currentTutorId, setCurrentTutorId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Usando useSearchParams para pegar os parâmetros de consulta na URL
  const searchParams = useSearchParams();
  const tutorId = searchParams.get("tutorId");
  const petId = searchParams.get("petId");

  // Função para carregar as consultas de um paciente específico do Firestore
  const loadPatientAppointments = useCallback(
    async (tutorId: string, petId: string) => {
      if (petId === currentPatientId) return; // Evita carregar se o ID do paciente já estiver correto

      console.log("Atualizando o currentPatientId para:", petId);
      setCurrentPatientId(petId);

      try {
        const appointmentsCollection = collection(
          db,
          `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
        );
        const querySnapshot = await getDocs(appointmentsCollection);

        const appointments: AppointmentData[] = querySnapshot.docs.map(
          (doc) => {
            const data = doc.data();
            return {
              appointmentType: data.appointmentType || "",
              title: data.title || "",
              vet: data.vet || "",
              notes: data.notes || "",
              send_to_admission: data.send_to_admission || false,
              timeStamp: data.timeStamp || "",
              isLast: data.isLast || false,
              id: doc.id,
            };
          }
        );

        setAppointmentHistory(appointments);
      } catch (error) {
        console.error("Erro ao carregar consultas do paciente:", error);
        setAppointmentHistory([]);
      }
    },
    [currentPatientId] // Passando dependência para currentPatientId
  );

  // useEffect para verificar se o código está sendo executado no lado do cliente
  useEffect(() => {
    setIsClient(true); // Definimos que estamos no lado do cliente
  }, []);

  // useEffect para garantir que a consulta seja carregada assim que os IDs forem definidos
  useEffect(() => {
    if (!isClient) return; // Não faz nada se não estamos no lado do cliente
    const tutorIdFromUrl = tutorId || currentTutorId; // Prioriza o tutorId da URL, mas usa o do contexto se disponível
    const petIdFromUrl = petId || currentPatientId; // Prioriza o petId da URL, mas usa o do contexto se disponível

    if (tutorIdFromUrl && petIdFromUrl) {
      if (!currentTutorId || !currentPatientId) {
        // Caso os IDs ainda não estejam configurados, define-os
        setCurrentTutorId(tutorIdFromUrl as string);
        setCurrentPatientId(petIdFromUrl as string);
      }
      // Carrega as consultas médicas assim que os IDs forem configurados
      loadPatientAppointments(tutorIdFromUrl as string, petIdFromUrl as string);
    }
  }, [
    tutorId,
    petId,
    currentTutorId,
    currentPatientId,
    loadPatientAppointments,
    isClient,
  ]);

  // Função para adicionar uma consulta médica
  const addMedicalAppointment = async (
    tutorId: string,
    petId: string,
    appointmentData: AppointmentData
  ) => {
    try {
      if (!tutorId || !petId) {
        console.error("Tutor ID ou Pet ID não fornecido");
        return;
      }

      const appointmentsCollection = collection(
        db,
        `tutores/${tutorId}/petsVinculados/${petId}/pet-medical-appointment`
      );

      // Adiciona a consulta
      const docRef = await addDoc(appointmentsCollection, appointmentData);

      // Verifica se a adição foi bem-sucedida
      alert("Consulta adicionada com sucesso!");
      console.log("Consulta adicionada com sucesso! ID:", docRef.id);

      // Se for o paciente atual, atualize o histórico de consultas
      if (petId === currentPatientId) {
        setAppointmentHistory((prev) => [
          ...prev,
          { ...appointmentData, id: docRef.id },
        ]);
      }
    } catch (error) {
      console.error("Erro ao adicionar consulta:", error);
    }
  };

  const value = {
    appointmentHistory,
    addMedicalAppointment,
    loadPatientAppointments,
    currentPatientId,
    currentTutorId,
    setCurrentPatientId,
    setCurrentTutorId,
    tutorId,
    petId,
  };

  return (
    <MedicalAppointmentContext.Provider value={value}>
      {children}
    </MedicalAppointmentContext.Provider>
  );
}

// chama o contexto
export function useMedicalAppointmentContext() {
  const context = useContext(MedicalAppointmentContext);
  if (context === undefined) {
    throw new Error(
      "useMedicalAppointmentContext must be used within a MedicalAppointmentProvider"
    );
  }
  return context;
}
