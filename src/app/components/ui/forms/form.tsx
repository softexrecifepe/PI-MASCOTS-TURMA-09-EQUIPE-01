// "use client";

// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import { useMedicalAppointmentContext } from "@/app/contexts/medicalAppointment";

// export default function GeneralForm() {
//   const context = useMedicalAppointmentContext(); // Acessa o contexto

//   // Verifica se o contexto está carregado corretamente
//   if (!context) {
//     throw new Error("MedicalAppointmentContext não está disponível!");
//   }

//   // pega o contexto
//   const { addMedicalAppointment, currentPatientId } = context;

//   // para inputs
//   const [textareaValue, setTextareaValue] = useState<string>("");
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [selectedVet, setSelectedVet] = useState<string>("");
//   const [sendToAdmission, setSendToAdmission] = useState<boolean>(false);
//   // para data e hora
//   const [currentDate, setCurrentDate] = useState<string>("");
//   const [currentTime, setCurrentTime] = useState<string>("");
//   const [title, setTitle] = useState<string>("");

//   // Captura a data e hora iniciais quando o componente é montado
//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const formattedDate = format(now, "dd/MM/yyyy");
//       const formattedTime = format(now, "HH:mm");

//       setCurrentDate(formattedDate);
//       setCurrentTime(formattedTime);
//     };

//     updateDateTime(); // Atualiza a data e hora ao carregar o componente

//     // Definindo um intervalo para atualizar a hora a cada minuto
//     const intervalId = setInterval(updateDateTime, 60000);

//     return () => clearInterval(intervalId); // Limpeza do intervalo quando o componente desmontar
//   }, []);

//   // Função para lidar com a mudança no select do veterinário
//   const handleVetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedVet(e.target.value);
//   };

//   // Função para lidar com a mudança de seleção
//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setSelectedOption(value);

//     // Atualiza o textarea com base na opção selecionada
//     if (value === "Dermatologia Veterinária") {
//       const valueToSet =
//         "Anamnese:\nexame físico:\ndiagnóstico:\noutras considerações:";
//       setTextareaValue(valueToSet); // Valor inicial para dermatologia
//     } else if (value === "Nutrição Veterinária") {
//       setTextareaValue(
//         "Histórico nutricional:\nAlimentos recomendados:\nObservações adicionais:"
//       );
//     } else if (value === "Clínica Geral") {
//       setTextareaValue(
//         "Queixa principal:\nExame físico:\nDiagnóstico:\nPlano terapêutico:"
//       );
//     } else if (value === "Neurologia Veterinária") {
//       setTextareaValue(
//         "Anamnese neurológica:\nExame neurológico:\nDiagnóstico neurológico:"
//       );
//     } else if (value === "Cirurgia Veterinária") {
//       setTextareaValue(
//         "Tipo de cirurgia:\nObjetivo da cirurgia:\nObservações pré-operatórias:"
//       );
//     } else {
//       setTextareaValue(""); // Limpa o conteúdo do textarea se nenhuma opção for selecionada
//     }
//   };

//   // Função para lidar com mudanças no textarea
//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setTextareaValue(e.target.value); // Atualiza o valor do textarea conforme o usuário digita
//   };

//   // Função para lidar com a mudança no checkbox de internação
//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSendToAdmission(e.target.checked);
//   };

//   // Função para lidar com a mudança no input "Resumo"
//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value); // Atualiza o valor do título conforme o usuário digita
//   };

//   // Verifica se o currentPatientId é null
//   if (!currentPatientId) {
//     throw new Error("patientId não foi encontrado no contexto!");
//   }

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const currentTimestamp = new Date().toISOString();

//     // Criando o objeto com todas as propriedades exigidas pelo tipo AppointmentData
//     const event = {
//       appointmentType: selectedOption, // Tipo de atendimento
//       title: title, // Título (você pode ajustar isso conforme necessário)
//       vet: selectedVet, // Veterinário (aqui você pode pegar o valor selecionado do formulário)
//       notes: textareaValue, // Notas (valor do textarea)
//       send_to_admission: sendToAdmission, // Supondo que essa opção seja fixa, ou você pode adicionar lógica para controlar isso
//       timeStamp: currentTimestamp, // Timestamp da consulta
//     };

//     const patientId = currentPatientId;

//     // Adicionando o evento à linha do tempo usando o contexto
//     addMedicalAppointment(patientId, event);

//     // Resetando o formulário
//     setSelectedOption("");
//     setTextareaValue("");
//     setSelectedVet(""); // Limpar o veterinário
//     setSendToAdmission(false); // Limpar o checkbox
//   };

//   return (
//     <>
//       <form className="px-5 py-10" onSubmit={handleFormSubmit}>
//         <div className="flex flex-col gap-5">
//           <div className="flex flex-row gap-5 items-center">
//             <span className="text-blue-400 text-lg roboto-regular">
//               {currentDate}
//             </span>
//             <span className="text-gray-400 text-sm roboto-regular">
//               {currentTime}
//             </span>
//           </div>
//           <div className="flex flex-row gap-5">
//             <div className="flex flex-col gap-2">
//               <label>Tipo de atendimento</label>
//               <select
//                 name="Tipo de atendimento"
//                 id="tipo"
//                 className="px-2 py-2"
//                 value={selectedOption}
//                 onChange={handleSelectChange}
//                 required
//               >
//                 <option value="" disabled>
//                   Selecione um tipo de atendimento
//                 </option>
//                 <option value="Dermatologia Veterinária">
//                   Consulta em Dermatologia
//                 </option>
//                 <option value="Nutrição Veterinária">
//                   Consulta em Nutrição
//                 </option>
//                 <option value="Clínica Geral">Clínico Geral</option>
//                 <option value="Neurologia Veterinária">
//                   Consulta em Neurologia
//                 </option>
//                 <option value="Cirurgia Veterinária">
//                   Cirugia Veterinária
//                 </option>
//               </select>
//             </div>
//             <div className="flex flex-col gap-2 w-full ">
//               <label>Resumo</label>
//               <input
//                 type="text"
//                 name="resumo"
//                 value={title}
//                 onChange={handleTitleChange}
//                 className="w-full border px-1 py-1"
//               />
//             </div>
//           </div>
//           {/* <div className="flex flex-col gap-5">
//             <label>Resumo</label>
//             <input type="text" className="w-2/4 border" />
//           </div> */}
//           <div className="flex flex-col gap-2">
//             <label>Veterinário responsável</label>
//             <select
//               name="veterinário"
//               value={selectedVet}
//               onChange={handleVetChange}
//               className="w-2/4 px-2 py-2"
//             >
//               <option value="" disabled selected>
//                 Selecione um veterinário
//               </option>
//               <option value="Camilla Barros - Clínica Geral">
//                 Camilla Barros
//               </option>
//               <option value="Izabelle Alves - Clínica Geral">
//                 Izabelle Alves
//               </option>
//               <option value="Lucas Galvão - Nutrição Veterinária">
//                 Lucas Galvão
//               </option>
//               <option value="Augusto Dantas - Cirurgia Veterinária">
//                 Augusto Dantas
//               </option>
//             </select>
//           </div>
//           <div>
//             <textarea
//               value={textareaValue}
//               onChange={handleTextareaChange}
//               name="notes"
//               className="w-full h-96 border"
//             ></textarea>
//           </div>
//           <div className="flex flex-row justify-between">
//             <div className="flex flex-row gap-2">
//               <input
//                 type="checkbox"
//                 checked={sendToAdmission}
//                 onChange={handleCheckboxChange}
//               />
//               <label>Ir para internação</label>
//             </div>
//             <div className="flex flex-row gap-5">
//               <button className="px-3 py-2 bg-gray-300 roboto-regular text-sm">
//                 Cancelar
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-darkCyan text-white roboto-regular text-sm"
//               >
//                 Salvar
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import { useMedicalAppointmentContext } from "@/app/contexts/medicalAppointment";
// import { db } from "@/lib/firebase/firebase.config"; // Ajuste com o caminho para sua configuração Firebase
// import { doc, collection, addDoc } from "firebase/firestore";

// export default function GeneralForm() {
//   const context = useMedicalAppointmentContext(); // Acessa o contexto

//   if (!context) {
//     throw new Error("MedicalAppointmentContext não está disponível!");
//   }

//   const { currentPatientId, currentTutorId } = context; // Agora inclui tutorId e patientId

//   const [textareaValue, setTextareaValue] = useState<string>("");
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [selectedVet, setSelectedVet] = useState<string>("");
//   const [sendToAdmission, setSendToAdmission] = useState<boolean>(false);
//   const [currentDate, setCurrentDate] = useState<string>("");
//   const [currentTime, setCurrentTime] = useState<string>("");
//   const [title, setTitle] = useState<string>("");

//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const formattedDate = format(now, "dd/MM/yyyy");
//       const formattedTime = format(now, "HH:mm");

//       setCurrentDate(formattedDate);
//       setCurrentTime(formattedTime);
//     };

//     updateDateTime();

//     const intervalId = setInterval(updateDateTime, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     if (currentPatientId && currentTutorId) {
//       context.loadPatientAppointments(currentTutorId, currentPatientId);
//     }
//   }, [currentPatientId, currentTutorId, context]);

//   const handleVetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedVet(e.target.value);
//   };

//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setSelectedOption(value);

//     if (value === "Dermatologia Veterinária") {
//       setTextareaValue(
//         "Anamnese:\nexame físico:\ndiagnóstico:\noutras considerações:"
//       );
//     } else if (value === "Nutrição Veterinária") {
//       setTextareaValue(
//         "Histórico nutricional:\nAlimentos recomendados:\nObservações adicionais:"
//       );
//     } else if (value === "Clínica Geral") {
//       setTextareaValue(
//         "Queixa principal:\nExame físico:\nDiagnóstico:\nPlano terapêutico:"
//       );
//     } else if (value === "Neurologia Veterinária") {
//       setTextareaValue(
//         "Anamnese neurológica:\nExame neurológico:\nDiagnóstico neurológico:"
//       );
//     } else if (value === "Cirurgia Veterinária") {
//       setTextareaValue(
//         "Tipo de cirurgia:\nObjetivo da cirurgia:\nObservações pré-operatórias:"
//       );
//     } else {
//       setTextareaValue("");
//     }
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setTextareaValue(e.target.value);
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSendToAdmission(e.target.checked);
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };

//   useEffect(() => {
//     if (currentPatientId && currentTutorId) {
//       context.loadPatientAppointments(currentTutorId, currentPatientId); // Isso deve funcionar agora
//     }
//   }, [currentPatientId, currentTutorId, context]);

//   if (!currentPatientId || !currentTutorId) {
//     throw new Error("patientId ou tutorId não foram encontrados no contexto!");
//   }

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const currentTimestamp = new Date().toISOString();

//     // Criando o objeto com todas as propriedades exigidas pelo tipo AppointmentData
//     const event = {
//       appointmentType: selectedOption,
//       title: title,
//       vet: selectedVet,
//       notes: textareaValue,
//       send_to_admission: sendToAdmission,
//       timeStamp: currentTimestamp,
//     };

//     try {
//       // Referência ao documento do paciente e subcoleção de consultas
//       const docRef = doc(
//         db,
//         "tutores",
//         currentTutorId,
//         "petsVinculados",
//         currentPatientId
//       );
//       const appointmentsRef = collection(docRef, "pet-medical-appointment");

//       // Adicionando o novo atendimento na subcoleção
//       await addDoc(appointmentsRef, event);

//       // Resetando o formulário
//       setSelectedOption("");
//       setTextareaValue("");
//       setSelectedVet("");
//       setSendToAdmission(false);
//       setTitle("");
//     } catch (error) {
//       console.error("Erro ao adicionar atendimento:", error);
//     }
//   };

//   return (
//     <>
//       <form className="px-5 py-10" onSubmit={handleFormSubmit}>
//         <div className="flex flex-col gap-5">
//           <div className="flex flex-row gap-5 items-center">
//             <span className="text-blue-400 text-lg roboto-regular">
//               {currentDate}
//             </span>
//             <span className="text-gray-400 text-sm roboto-regular">
//               {currentTime}
//             </span>
//           </div>
//           <div className="flex flex-row gap-5">
//             <div className="flex flex-col gap-2">
//               <label>Tipo de atendimento</label>
//               <select
//                 name="Tipo de atendimento"
//                 id="tipo"
//                 className="px-2 py-2"
//                 value={selectedOption}
//                 onChange={handleSelectChange}
//                 required
//               >
//                 <option value="" disabled>
//                   Selecione um tipo de atendimento
//                 </option>
//                 <option value="Dermatologia Veterinária">
//                   Consulta em Dermatologia
//                 </option>
//                 <option value="Nutrição Veterinária">
//                   Consulta em Nutrição
//                 </option>
//                 <option value="Clínica Geral">Clínico Geral</option>
//                 <option value="Neurologia Veterinária">
//                   Consulta em Neurologia
//                 </option>
//                 <option value="Cirurgia Veterinária">
//                   Cirugia Veterinária
//                 </option>
//               </select>
//             </div>
//             <div className="flex flex-col gap-2 w-full">
//               <label>Resumo</label>
//               <input
//                 type="text"
//                 name="resumo"
//                 value={title}
//                 onChange={handleTitleChange}
//                 className="w-full border px-1 py-1"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col gap-2">
//             <label>Veterinário responsável</label>
//             <select
//               name="veterinário"
//               value={selectedVet}
//               onChange={handleVetChange}
//               className="w-2/4 px-2 py-2"
//             >
//               <option value="" disabled selected>
//                 Selecione um veterinário
//               </option>
//               <option value="Camilla Barros - Clínica Geral">
//                 Camilla Barros
//               </option>
//               <option value="Izabelle Alves - Clínica Geral">
//                 Izabelle Alves
//               </option>
//               <option value="Lucas Galvão - Nutrição Veterinária">
//                 Lucas Galvão
//               </option>
//               <option value="Augusto Dantas - Cirurgia Veterinária">
//                 Augusto Dantas
//               </option>
//             </select>
//           </div>
//           <div>
//             <textarea
//               value={textareaValue}
//               onChange={handleTextareaChange}
//               name="notes"
//               className="w-full h-96 border"
//             ></textarea>
//           </div>
//           <div className="flex flex-row justify-between">
//             <div className="flex flex-row gap-2">
//               <input
//                 type="checkbox"
//                 checked={sendToAdmission}
//                 onChange={handleCheckboxChange}
//               />
//               <label>Ir para internação</label>
//             </div>
//             <div className="flex flex-row gap-5">
//               <button className="px-3 py-2 bg-gray-300 roboto-regular text-sm">
//                 Cancelar
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-darkCyan text-white roboto-regular text-sm"
//               >
//                 Salvar
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import { useMedicalAppointmentContext } from "@/app/contexts/medicalAppointment";
// import { db } from "@/lib/firebase/firebase.config"; // Ajuste com o caminho para sua configuração Firebase
// import { doc, collection, getDocs, addDoc } from "firebase/firestore";

// export default function GeneralForm() {
//   const context = useMedicalAppointmentContext(); // Acessa o contexto

//   if (!context) {
//     throw new Error("MedicalAppointmentContext não está disponível!");
//   }

//   const {
//     currentPatientId,
//     currentTutorId,
//     setCurrentPatientId,
//     setCurrentTutorId,
//   } = context; // Agora inclui tutorId e patientId

//   const [textareaValue, setTextareaValue] = useState<string>("");
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [selectedVet, setSelectedVet] = useState<string>("");
//   const [sendToAdmission, setSendToAdmission] = useState<boolean>(false);
//   const [currentDate, setCurrentDate] = useState<string>("");
//   const [currentTime, setCurrentTime] = useState<string>("");
//   const [title, setTitle] = useState<string>("");

//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const formattedDate = format(now, "dd/MM/yyyy");
//       const formattedTime = format(now, "HH:mm");

//       setCurrentDate(formattedDate);
//       setCurrentTime(formattedTime);
//     };

//     updateDateTime();

//     const intervalId = setInterval(updateDateTime, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Primeiro useEffect para buscar o tutorId e petId, caso não estejam no contexto
//   useEffect(() => {
//     const fetchTutorAndPetId = async () => {
//       try {
//         // Buscando os dados no Firestore se não estiverem no contexto
//         if (!currentTutorId || !currentPatientId) {
//           const tutorSnapshot = await getDocs(collection(db, "tutores"));

//           if (!tutorSnapshot.empty) {
//             const tutorDoc = tutorSnapshot.docs[0]; // Pega o primeiro tutor
//             const tutorId = tutorDoc.id;
//             setCurrentTutorId(tutorId); // Atualiza o tutorId

//             const petsCollection = collection(
//               db,
//               `tutores/${tutorId}/petsVinculados`
//             );
//             const petSnapshot = await getDocs(petsCollection);

//             if (!petSnapshot.empty) {
//               const petId = petSnapshot.docs[0].id; // Pega o primeiro pet
//               setCurrentPatientId(petId); // Atualiza o petId
//             }
//           } else {
//             console.log("Nenhum tutor encontrado");
//           }
//         }
//       } catch (error) {
//         console.error("Erro ao buscar tutorId e petId:", error);
//       }
//     };

//     fetchTutorAndPetId();
//   }, [
//     currentTutorId,
//     currentPatientId,
//     setCurrentTutorId,
//     setCurrentPatientId,
//   ]);

//   // Efetuar o carregamento das consultas apenas se os IDs estiverem disponíveis
//   useEffect(() => {
//     if (currentPatientId && currentTutorId) {
//       context.loadPatientAppointments(currentTutorId, currentPatientId);
//     }
//   }, [currentPatientId, currentTutorId, context]);

//   const handleVetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedVet(e.target.value);
//   };

//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setSelectedOption(value);

//     if (value === "Dermatologia Veterinária") {
//       setTextareaValue(
//         "Anamnese:\nexame físico:\ndiagnóstico:\noutras considerações:"
//       );
//     } else if (value === "Nutrição Veterinária") {
//       setTextareaValue(
//         "Histórico nutricional:\nAlimentos recomendados:\nObservações adicionais:"
//       );
//     } else if (value === "Clínica Geral") {
//       setTextareaValue(
//         "Queixa principal:\nExame físico:\nDiagnóstico:\nPlano terapêutico:"
//       );
//     } else if (value === "Neurologia Veterinária") {
//       setTextareaValue(
//         "Anamnese neurológica:\nExame neurológico:\nDiagnóstico neurológico:"
//       );
//     } else if (value === "Cirurgia Veterinária") {
//       setTextareaValue(
//         "Tipo de cirurgia:\nObjetivo da cirurgia:\nObservações pré-operatórias:"
//       );
//     } else {
//       setTextareaValue("");
//     }
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setTextareaValue(e.target.value);
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSendToAdmission(e.target.checked);
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const currentTimestamp = new Date().toISOString();

//     const event = {
//       appointmentType: selectedOption,
//       title: title,
//       vet: selectedVet,
//       notes: textareaValue,
//       send_to_admission: sendToAdmission,
//       timeStamp: currentTimestamp,
//     };

//     // Verifique se os IDs são válidos antes de acessar o Firestore
//     if (currentTutorId && currentPatientId) {
//       try {
//         // Certifique-se de que currentTutorId e currentPatientId não sejam nulos
//         const docRef = doc(
//           db,
//           "tutores",
//           currentTutorId, // Tutor ID
//           "petsVinculados",
//           currentPatientId // Pet ID
//         );
//         const appointmentsRef = collection(docRef, "pet-medical-appointment");

//         await addDoc(appointmentsRef, event);

//         setSelectedOption("");
//         setTextareaValue("");
//         setSelectedVet("");
//         setSendToAdmission(false);
//         setTitle("");
//       } catch (error) {
//         console.error("Erro ao adicionar atendimento:", error);
//       }
//     }

//     if (!currentPatientId || !currentTutorId) {
//       throw new Error(
//         "patientId ou tutorId não foram encontrados no contexto!"
//       );
//     }

//     return (
//       <>
//         <form className="px-5 py-10" onSubmit={handleFormSubmit}>
//           <div className="flex flex-col gap-5">
//             <div className="flex flex-row gap-5 items-center">
//               <span className="text-blue-400 text-lg roboto-regular">
//                 {currentDate}
//               </span>
//               <span className="text-gray-400 text-sm roboto-regular">
//                 {currentTime}
//               </span>
//             </div>
//             <div className="flex flex-row gap-5">
//               <div className="flex flex-col gap-2">
//                 <label>Tipo de atendimento</label>
//                 <select
//                   name="Tipo de atendimento"
//                   id="tipo"
//                   className="px-2 py-2"
//                   value={selectedOption}
//                   onChange={handleSelectChange}
//                   required
//                 >
//                   <option value="" disabled>
//                     Selecione um tipo de atendimento
//                   </option>
//                   <option value="Dermatologia Veterinária">
//                     Consulta em Dermatologia
//                   </option>
//                   <option value="Nutrição Veterinária">
//                     Consulta em Nutrição
//                   </option>
//                   <option value="Clínica Geral">Clínico Geral</option>
//                   <option value="Neurologia Veterinária">
//                     Consulta em Neurologia
//                   </option>
//                   <option value="Cirurgia Veterinária">
//                     Cirugia Veterinária
//                   </option>
//                 </select>
//               </div>
//               <div className="flex flex-col gap-2 w-full">
//                 <label>Resumo</label>
//                 <input
//                   type="text"
//                   name="resumo"
//                   value={title}
//                   onChange={handleTitleChange}
//                   className="w-full border px-1 py-1"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label>Veterinário responsável</label>
//               <select
//                 name="veterinário"
//                 value={selectedVet}
//                 onChange={handleVetChange}
//                 className="w-2/4 px-2 py-2"
//               >
//                 <option value="" disabled selected>
//                   Selecione um veterinário
//                 </option>
//                 <option value="Camilla Barros - Clínica Geral">
//                   Camilla Barros
//                 </option>
//                 <option value="Izabelle Alves - Clínica Geral">
//                   Izabelle Alves
//                 </option>
//                 <option value="Lucas Galvão - Nutrição Veterinária">
//                   Lucas Galvão
//                 </option>
//                 <option value="Augusto Dantas - Cirurgia Veterinária">
//                   Augusto Dantas
//                 </option>
//               </select>
//             </div>
//             <div>
//               <textarea
//                 value={textareaValue}
//                 onChange={handleTextareaChange}
//                 name="notes"
//                 className="w-full h-96 border"
//               ></textarea>
//             </div>
//             <div className="flex flex-row justify-between">
//               <div className="flex flex-row gap-2">
//                 <input
//                   type="checkbox"
//                   checked={sendToAdmission}
//                   onChange={handleCheckboxChange}
//                 />
//                 <label>Ir para internação</label>
//               </div>
//               <div className="flex flex-row gap-5">
//                 <button className="px-3 py-2 bg-gray-300 roboto-regular text-sm">
//                   Cancelar
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-darkCyan text-white roboto-regular text-sm"
//                 >
//                   Salvar
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </>
//     );
//   };
// }

// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import { useMedicalAppointmentContext } from "@/app/contexts/medicalAppointment";
// import { db } from "@/lib/firebase/firebase.config"; // Ajuste com o caminho para sua configuração Firebase
// import { collection, getDocs } from "firebase/firestore"; //addDoc doc,

// export default function GeneralForm() {
//   const context = useMedicalAppointmentContext(); // Acessa o contexto

//   if (!context) {
//     throw new Error("MedicalAppointmentContext não está disponível!");
//   }

//   const {
//     currentPatientId,
//     currentTutorId,
//     setCurrentPatientId,
//     setCurrentTutorId,
//     addMedicalAppointment,
//   } = context; // Agora inclui tutorId e patientId

//   const [textareaValue, setTextareaValue] = useState<string>("");
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [selectedVet, setSelectedVet] = useState<string>("");
//   const [sendToAdmission, setSendToAdmission] = useState<boolean>(false);
//   const [currentDate, setCurrentDate] = useState<string>("");
//   const [currentTime, setCurrentTime] = useState<string>("");
//   const [title, setTitle] = useState<string>("");

//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const formattedDate = format(now, "dd/MM/yyyy");
//       const formattedTime = format(now, "HH:mm");

//       setCurrentDate(formattedDate);
//       setCurrentTime(formattedTime);
//     };

//     updateDateTime();

//     const intervalId = setInterval(updateDateTime, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Primeiro useEffect para buscar o tutorId e petId, caso não estejam no contexto
//   useEffect(() => {
//     const fetchTutorAndPetId = async () => {
//       try {
//         // Buscando os dados no Firestore se não estiverem no contexto
//         if (!currentTutorId || !currentPatientId) {
//           const tutorSnapshot = await getDocs(collection(db, "tutores"));

//           if (!tutorSnapshot.empty) {
//             const tutorDoc = tutorSnapshot.docs[0]; // Pega o primeiro tutor
//             const tutorId = tutorDoc.id;
//             setCurrentTutorId(tutorId); // Atualiza o tutorId

//             const petsCollection = collection(
//               db,
//               `tutores/${tutorId}/petsVinculados`
//             );
//             const petSnapshot = await getDocs(petsCollection);

//             if (!petSnapshot.empty) {
//               const petId = petSnapshot.docs[0].id; // Pega o primeiro pet
//               setCurrentPatientId(petId); // Atualiza o petId
//             }
//           } else {
//             console.log("Nenhum tutor encontrado");
//           }
//         }
//       } catch (error) {
//         console.error("Erro ao buscar tutorId e petId:", error);
//       }
//     };

//     fetchTutorAndPetId();
//   }, [
//     currentTutorId,
//     currentPatientId,
//     setCurrentTutorId,
//     setCurrentPatientId,
//   ]);

//   // Efetuar o carregamento das consultas apenas se os IDs estiverem disponíveis
//   useEffect(() => {
//     if (currentPatientId && currentTutorId) {
//       context.loadPatientAppointments(currentTutorId, currentPatientId);
//     }
//   }, [currentPatientId, currentTutorId, context]);

//   const handleVetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedVet(e.target.value);
//   };

//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setSelectedOption(value);

//     if (value === "Dermatologia Veterinária") {
//       setTextareaValue(
//         "Anamnese:\nexame físico:\ndiagnóstico:\noutras considerações:"
//       );
//     } else if (value === "Nutrição Veterinária") {
//       setTextareaValue(
//         "Histórico nutricional:\nAlimentos recomendados:\nObservações adicionais:"
//       );
//     } else if (value === "Clínica Geral") {
//       setTextareaValue(
//         "Queixa principal:\nExame físico:\nDiagnóstico:\nPlano terapêutico:"
//       );
//     } else if (value === "Neurologia Veterinária") {
//       setTextareaValue(
//         "Anamnese neurológica:\nExame neurológico:\nDiagnóstico neurológico:"
//       );
//     } else if (value === "Cirurgia Veterinária") {
//       setTextareaValue(
//         "Tipo de cirurgia:\nObjetivo da cirurgia:\nObservações pré-operatórias:"
//       );
//     } else {
//       setTextareaValue("");
//     }
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setTextareaValue(e.target.value);
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSendToAdmission(e.target.checked);
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };

//   // const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();

//   //   const currentTimestamp = new Date().toISOString();

//   //   const event = {
//   //     appointmentType: selectedOption,
//   //     title: title,
//   //     vet: selectedVet,
//   //     notes: textareaValue,
//   //     send_to_admission: sendToAdmission,
//   //     timeStamp: currentTimestamp,
//   //   };

//   //   // Verifique se os IDs são válidos antes de acessar o Firestore
//   //   if (currentTutorId && currentPatientId) {
//   //     try {
//   //       // Certifique-se de que currentTutorId e currentPatientId não sejam nulos
//   //       const docRef = doc(
//   //         db,
//   //         "tutores",
//   //         currentTutorId, // Tutor ID
//   //         "petsVinculados",
//   //         currentPatientId // Pet ID
//   //       );
//   //       const appointmentsRef = collection(docRef, "pet-medical-appointment");

//   //       await addDoc(appointmentsRef, event);

//   //       setSelectedOption("");
//   //       setTextareaValue("");
//   //       setSelectedVet("");
//   //       setSendToAdmission(false);
//   //       setTitle("");
//   //     } catch (error) {
//   //       console.error("Erro ao adicionar atendimento:", error);
//   //     }
//   //   }

//   //   if (!currentPatientId || !currentTutorId) {
//   //     throw new Error(
//   //       "patientId ou tutorId não foram encontrados no contexto!"
//   //     );
//   //   }
//   // };

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const currentTimestamp = new Date().toISOString();

//     const event = {
//       appointmentType: selectedOption,
//       title: title,
//       vet: selectedVet,
//       notes: textareaValue,
//       send_to_admission: sendToAdmission,
//       timeStamp: currentTimestamp,
//     };

//     // Verifique se os dados estão corretos antes de passar para o Firestore
//     console.log("Dados para salvar no Firestore:", event);

//     if (currentTutorId && currentPatientId) {
//       try {
//         await addMedicalAppointment(currentTutorId, currentPatientId, event);

//         // Limpa os campos do formulário após enviar os dados
//         setSelectedOption("");
//         setTextareaValue("");
//         setSelectedVet("");
//         setSendToAdmission(false);
//         setTitle("");
//       } catch (error) {
//         console.error("Erro ao adicionar atendimento:", error);
//       }
//     }

//     if (!currentPatientId || !currentTutorId) {
//       throw new Error(
//         "patientId ou tutorId não foram encontrados no contexto!"
//       );
//     }
//   };

//   // Retorno do JSX principal do formulário
//   return (
//     <form className="px-5 py-10" onSubmit={handleFormSubmit}>
//       <div className="flex flex-col gap-5">
//         <div className="flex flex-row gap-5 items-center">
//           <span className="text-blue-400 text-lg roboto-regular">
//             {currentDate}
//           </span>
//           <span className="text-gray-400 text-sm roboto-regular">
//             {currentTime}
//           </span>
//         </div>
//         <div className="flex flex-row gap-5">
//           <div className="flex flex-col gap-2">
//             <label>Tipo de atendimento</label>
//             <select
//               name="Tipo de atendimento"
//               id="tipo"
//               className="px-2 py-2"
//               value={selectedOption}
//               onChange={handleSelectChange}
//               required
//             >
//               <option value="" disabled>
//                 Selecione um tipo de atendimento
//               </option>
//               <option value="Dermatologia Veterinária">
//                 Consulta em Dermatologia
//               </option>
//               <option value="Nutrição Veterinária">Consulta em Nutrição</option>
//               <option value="Clínica Geral">Clínico Geral</option>
//               <option value="Neurologia Veterinária">
//                 Consulta em Neurologia
//               </option>
//               <option value="Cirurgia Veterinária">Cirugia Veterinária</option>
//             </select>
//           </div>
//           <div className="flex flex-col gap-2 w-full">
//             <label>Resumo</label>
//             <input
//               type="text"
//               name="resumo"
//               value={title}
//               onChange={handleTitleChange}
//               className="w-full border px-1 py-1"
//             />
//           </div>
// //         </div>
// //         <div className="flex flex-col gap-2">
// //           <label>Veterinário responsável</label>
// //           <select
// //             name="veterinário"
// //             value={selectedVet}
// //             onChange={handleVetChange}
// //             className="w-2/4 px-2 py-2"
// //           >
// //             <option value="" disabled selected>
// //               Selecione um veterinário
// //             </option>
// //             <option value="Camilla Barros - Clínica Geral">
// //               Camilla Barros
// //             </option>
// //             <option value="Izabelle Alves - Clínica Geral">
// //               Izabelle Alves
// //             </option>
// //             <option value="Lucas Galvão - Nutrição Veterinária">
// //               Lucas Galvão
// //             </option>
// //             <option value="Augusto Dantas - Cirurgia Veterinária">
// //               Augusto Dantas
// //             </option>
// //           </select>
// //         </div>
// //         <div>
// //           <textarea
// //             value={textareaValue}
// //             onChange={handleTextareaChange}
// //             name="notes"
// //             className="w-full h-96 border"
// //           ></textarea>
// //         </div>
// //         <div className="flex flex-row justify-between">
// //           <div className="flex flex-row gap-2">
// //             <input
// //               type="checkbox"
// //               checked={sendToAdmission}
// //               onChange={handleCheckboxChange}
// //             />
// //             <label>Ir para internação</label>
// //           </div>
// //           <div className="flex flex-row gap-5">
// //             <button className="px-3 py-2 bg-gray-300 roboto-regular text-sm">
// //               Cancelar
// //             </button>
// //             <button
// //               type="submit"
// //               className="px-4 py-2 bg-darkCyan text-white roboto-regular text-sm"
// //             >
// //               Salvar
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // }

// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import { useMedicalAppointmentContext } from "@/app/contexts/medicalAppointment";
// import { useSearchParams } from "next/navigation"; // Novo hook para acessar parâmetros de URL
// // import { db } from "@/lib/firebase/firebase.config"; // Ajuste com o caminho para sua configuração Firebase
// // import { collection, getDocs } from "firebase/firestore"; //addDoc doc,

// export default function GeneralForm() {
//   const context = useMedicalAppointmentContext(); // Acessa o contexto

//   if (!context) {
//     throw new Error("MedicalAppointmentContext não está disponível!");
//   }

//   const {
//     currentPatientId,
//     currentTutorId,
//     setCurrentPatientId,
//     setCurrentTutorId,
//     addMedicalAppointment,
//   } = context; // Agora inclui tutorId e patientId

//   const [textareaValue, setTextareaValue] = useState<string>("");
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [selectedVet, setSelectedVet] = useState<string>("");
//   const [sendToAdmission, setSendToAdmission] = useState<boolean>(false);
//   const [currentDate, setCurrentDate] = useState<string>("");
//   const [currentTime, setCurrentTime] = useState<string>("");
//   const [title, setTitle] = useState<string>("");

//   const searchParams = useSearchParams();
//   const tutorIdFromUrl = searchParams.get("tutorId");
//   const petIdFromUrl = searchParams.get("petId");

//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const formattedDate = format(now, "dd/MM/yyyy");
//       const formattedTime = format(now, "HH:mm");

//       setCurrentDate(formattedDate);
//       setCurrentTime(formattedTime);
//     };

//     updateDateTime();

//     const intervalId = setInterval(updateDateTime, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Atualiza os IDs do tutor e pet se não estiverem no contexto, pegando da URL
//   useEffect(() => {
//     if (tutorIdFromUrl && petIdFromUrl) {
//       setCurrentTutorId(tutorIdFromUrl);
//       setCurrentPatientId(petIdFromUrl);
//     } else {
//       console.log("TutorId ou PetId não encontrados na URL.");
//     }
//   }, [tutorIdFromUrl, petIdFromUrl, setCurrentTutorId, setCurrentPatientId]);

//   // Efetuar o carregamento das consultas apenas se os IDs estiverem disponíveis
//   useEffect(() => {
//     if (currentPatientId && currentTutorId) {
//       context.loadPatientAppointments(currentTutorId, currentPatientId);
//     }
//   }, [currentPatientId, currentTutorId, context]);

//   const handleVetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedVet(e.target.value);
//   };

//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setSelectedOption(value);

//     if (value === "Dermatologia Veterinária") {
//       setTextareaValue(
//         "Anamnese:\nexame físico:\ndiagnóstico:\noutras considerações:"
//       );
//     } else if (value === "Nutrição Veterinária") {
//       setTextareaValue(
//         "Histórico nutricional:\nAlimentos recomendados:\nObservações adicionais:"
//       );
//     } else if (value === "Clínica Geral") {
//       setTextareaValue(
//         "Queixa principal:\nExame físico:\nDiagnóstico:\nPlano terapêutico:"
//       );
//     } else if (value === "Neurologia Veterinária") {
//       setTextareaValue(
//         "Anamnese neurológica:\nExame neurológico:\nDiagnóstico neurológico:"
//       );
//     } else if (value === "Cirurgia Veterinária") {
//       setTextareaValue(
//         "Tipo de cirurgia:\nObjetivo da cirurgia:\nObservações pré-operatórias:"
//       );
//     } else {
//       setTextareaValue("");
//     }
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setTextareaValue(e.target.value);
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSendToAdmission(e.target.checked);
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const currentTimestamp = new Date().toISOString();

//     const event = {
//       appointmentType: selectedOption,
//       title: title,
//       vet: selectedVet,
//       notes: textareaValue,
//       send_to_admission: sendToAdmission,
//       timeStamp: currentTimestamp,
//     };

//     // Verifique se os dados estão corretos antes de passar para o Firestore
//     console.log("Dados para salvar no Firestore:", event);

//     if (currentTutorId && currentPatientId) {
//       try {
//         await addMedicalAppointment(currentTutorId, currentPatientId, event);

//         // Limpa os campos do formulário após enviar os dados
//         setSelectedOption("");
//         setTextareaValue("");
//         setSelectedVet("");
//         setSendToAdmission(false);
//         setTitle("");
//       } catch (error) {
//         console.error("Erro ao adicionar atendimento:", error);
//       }
//     }

//     if (!currentPatientId || !currentTutorId) {
//       throw new Error(
//         "patientId ou tutorId não foram encontrados no contexto!"
//       );
//     }
//   };

//   // Retorno do JSX principal do formulário
//   return (
//     <form className="px-5 py-10" onSubmit={handleFormSubmit}>
//       <div className="flex flex-col gap-5">
//         <div className="flex flex-row gap-5 items-center">
//           <span className="text-blue-400 text-lg roboto-regular">
//             {currentDate}
//           </span>
//           <span className="text-gray-400 text-sm roboto-regular">
//             {currentTime}
//           </span>
//         </div>
//         <div className="flex flex-row gap-5">
//           <div className="flex flex-col gap-2">
//             <label>Tipo de atendimento</label>
//             <select
//               name="Tipo de atendimento"
//               id="tipo"
//               className="px-2 py-2"
//               value={selectedOption}
//               onChange={handleSelectChange}
//               required
//             >
//               <option value="" disabled>
//                 Selecione um tipo de atendimento
//               </option>
//               <option value="Dermatologia Veterinária">
//                 Consulta em Dermatologia
//               </option>
//               <option value="Nutrição Veterinária">Consulta em Nutrição</option>
//               <option value="Clínica Geral">Clínico Geral</option>
//               <option value="Neurologia Veterinária">
//                 Consulta em Neurologia
//               </option>
//               <option value="Cirurgia Veterinária">Cirugia Veterinária</option>
//             </select>
//           </div>
//           <div className="flex flex-col gap-2 w-full">
//             <label>Resumo</label>
//             <input
//               type="text"
//               name="resumo"
//               value={title}
//               onChange={handleTitleChange}
//               className="w-full border px-1 py-1"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>Veterinário responsável</label>
//           <select
//             name="veterinário"
//             value={selectedVet}
//             onChange={handleVetChange}
//             className="w-2/4 px-2 py-2"
//           >
//             <option value="" disabled selected>
//               Selecione um veterinário
//             </option>
//             <option value="Camilla Barros - Clínica Geral">
//               Camilla Barros
//             </option>
//             <option value="Izabelle Alves - Clínica Geral">
//               Izabelle Alves
//             </option>
//             <option value="Lucas Galvão - Nutrição Veterinária">
//               Lucas Galvão
//             </option>
//             <option value="Augusto Dantas - Cirurgia Veterinária">
//               Augusto Dantas
//             </option>
//           </select>
//         </div>
//         <div>
//           <textarea
//             value={textareaValue}
//             onChange={handleTextareaChange}
//             name="notes"
//             className="w-full h-96 border"
//           ></textarea>
//         </div>
//         <div className="flex flex-row justify-between">
//           <div className="flex flex-row gap-2">
//             <input
//               type="checkbox"
//               checked={sendToAdmission}
//               onChange={handleCheckboxChange}
//             />
//             <label>Ir para internação</label>
//           </div>
//           <div className="flex flex-row gap-5">
//             <button className="px-3 py-2 bg-gray-300 roboto-regular text-sm">
//               Cancelar
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-darkCyan text-white roboto-regular text-sm"
//             >
//               Salvar
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }

// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import { useMedicalAppointmentContext } from "@/app/contexts/medicalAppointment";
// import { useSearchParams } from "next/navigation"; // Novo hook para acessar parâmetros de URL
// // import { db } from "@/lib/firebase/firebase.config"; // Ajuste com o caminho para sua configuração Firebase
// // import { collection, getDocs } from "firebase/firestore"; //addDoc doc,

// export default function GeneralForm() {
//   const context = useMedicalAppointmentContext(); // Acessa o contexto

//   if (!context) {
//     throw new Error("MedicalAppointmentContext não está disponível!");
//   }

//   const {
//     currentPatientId,
//     currentTutorId,
//     setCurrentPatientId,
//     setCurrentTutorId,
//     addMedicalAppointment,
//     loadPatientAppointments,
//     tutorId,
//     petId,
//   } = context; // Agora inclui tutorId e patientId

//   const [textareaValue, setTextareaValue] = useState<string>("");
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [selectedVet, setSelectedVet] = useState<string>("");
//   const [sendToAdmission, setSendToAdmission] = useState<boolean>(false);
//   const [currentDate, setCurrentDate] = useState<string>("");
//   const [currentTime, setCurrentTime] = useState<string>("");
//   const [title, setTitle] = useState<string>("");

//   const searchParams = useSearchParams();
//   const tutorIdFromUrl = searchParams.get("tutorId");
//   const petIdFromUrl = searchParams.get("petId");

//   console.log("tutorIdFromUrl:", tutorIdFromUrl, "petIdFromUrl:", petIdFromUrl);

//   // Atualiza a data e hora a cada minuto
//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const formattedDate = format(now, "dd/MM/yyyy");
//       const formattedTime = format(now, "HH:mm");

//       setCurrentDate(formattedDate);
//       setCurrentTime(formattedTime);
//     };

//     updateDateTime();

//     const intervalId = setInterval(updateDateTime, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Atualiza os valores do tutorId e petId assim que os parâmetros da URL forem detectados
//   useEffect(() => {
//     if (tutorIdFromUrl && petIdFromUrl) {
//       // Se os valores estiverem disponíveis na URL, atualiza os valores no contexto
//       setCurrentTutorId(tutorIdFromUrl);
//       setCurrentPatientId(petIdFromUrl);
//       console.log("IDs atualizados:", tutorIdFromUrl, petIdFromUrl);
//     } else {
//       console.log("TutorId ou PetId não encontrados na URL.");
//     }
//   }, [tutorIdFromUrl, petIdFromUrl, setCurrentTutorId, setCurrentPatientId]);

//   // Efetuar o carregamento das consultas apenas se os IDs estiverem disponíveis
//   useEffect(() => {
//     if (currentPatientId && currentTutorId) {
//       loadPatientAppointments(currentTutorId, currentPatientId);
//     }
//   }, [currentPatientId, currentTutorId, loadPatientAppointments]);

//   const handleVetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedVet(e.target.value);
//   };

//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setSelectedOption(value);

//     if (value === "Dermatologia Veterinária") {
//       setTextareaValue(
//         "Anamnese:\nexame físico:\ndiagnóstico:\noutras considerações:"
//       );
//     } else if (value === "Nutrição Veterinária") {
//       setTextareaValue(
//         "Histórico nutricional:\nAlimentos recomendados:\nObservações adicionais:"
//       );
//     } else if (value === "Clínica Geral") {
//       setTextareaValue(
//         "Queixa principal:\nExame físico:\nDiagnóstico:\nPlano terapêutico:"
//       );
//     } else if (value === "Neurologia Veterinária") {
//       setTextareaValue(
//         "Anamnese neurológica:\nExame neurológico:\nDiagnóstico neurológico:"
//       );
//     } else if (value === "Cirurgia Veterinária") {
//       setTextareaValue(
//         "Tipo de cirurgia:\nObjetivo da cirurgia:\nObservações pré-operatórias:"
//       );
//     } else {
//       setTextareaValue("");
//     }
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setTextareaValue(e.target.value);
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSendToAdmission(e.target.checked);
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const currentTimestamp = new Date().toISOString();

//     const event = {
//       appointmentType: selectedOption,
//       title: title,
//       vet: selectedVet,
//       notes: textareaValue,
//       send_to_admission: sendToAdmission,
//       timeStamp: currentTimestamp,
//     };

//     // Verifique se os dados estão corretos antes de passar para o Firestore
//     console.log("Dados para salvar no Firestore:", event);

//     // Verifica se os IDs estão disponíveis no contexto antes de salvar
//     if (currentTutorId && currentPatientId) {
//       try {
//         await addMedicalAppointment(currentTutorId, currentPatientId, event);

//         // Limpa os campos do formulário após enviar os dados
//         setSelectedOption("");
//         setTextareaValue("");
//         setSelectedVet("");
//         setSendToAdmission(false);
//         setTitle("");
//       } catch (error) {
//         console.error("Erro ao adicionar atendimento:", error);
//       }
//     } else {
//       console.error("TutorId ou petId não encontrados no contexto.");
//       throw new Error("petId ou tutorId não foram encontrados no contexto!");
//     }
//   };

//   // Retorno do JSX principal do formulário
//   return (
//     <form className="px-5 py-10" onSubmit={handleFormSubmit}>
//       <div className="flex flex-col gap-5">
//         <div className="flex flex-row gap-5 items-center">
//           <span className="text-blue-400 text-lg roboto-regular">
//             {currentDate}
//           </span>
//           <span className="text-gray-400 text-sm roboto-regular">
//             {currentTime}
//           </span>
//         </div>
//         <div className="flex flex-row gap-5">
//           <div className="flex flex-col gap-2">
//             <label>Tipo de atendimento</label>
//             <select
//               name="Tipo de atendimento"
//               id="tipo"
//               className="px-2 py-2"
//               value={selectedOption}
//               onChange={handleSelectChange}
//               required
//             >
//               <option value="" disabled>
//                 Selecione um tipo de atendimento
//               </option>
//               <option value="Dermatologia Veterinária">
//                 Consulta em Dermatologia
//               </option>
//               <option value="Nutrição Veterinária">Consulta em Nutrição</option>
//               <option value="Clínica Geral">Clínico Geral</option>
//               <option value="Neurologia Veterinária">
//                 Consulta em Neurologia
//               </option>
//               <option value="Cirurgia Veterinária">Cirugia Veterinária</option>
//             </select>
//           </div>
//           <div className="flex flex-col gap-2 w-full">
//             <label>Resumo</label>
//             <input
//               type="text"
//               name="resumo"
//               value={title}
//               onChange={handleTitleChange}
//               className="w-full border px-1 py-1"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>Veterinário responsável</label>
//           <select
//             name="veterinário"
//             value={selectedVet}
//             onChange={handleVetChange}
//             className="w-2/4 px-2 py-2"
//           >
//             <option value="Veterinário 1">Veterinário 1</option>
//             <option value="Veterinário 2">Veterinário 2</option>
//             <option value="Veterinário 3">Veterinário 3</option>
//           </select>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>Observações</label>
//           <textarea
//             value={textareaValue}
//             onChange={handleTextareaChange}
//             className="w-full px-3 py-3"
//           />
//         </div>
//         <div className="flex items-center gap-3">
//           <input
//             type="checkbox"
//             name="admission"
//             checked={sendToAdmission}
//             onChange={handleCheckboxChange}
//           />
//           <label>Enviar para a internação?</label>
//         </div>
//         <div className="flex gap-5 justify-end mt-5">
//           <button
//             type="button"
//             className="border-2 border-darkCyan text-darkCyan px-4 py-2 roboto-regular text-sm"
//           >
//             Cancelar
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-darkCyan text-white roboto-regular text-sm"
//           >
//             Salvar
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { format } from "date-fns";
// import { useMedicalAppointmentContext } from "@/app/contexts/medicalAppointment";

// export default function GeneralForm() {
//   const router = useRouter();
//   const context = useMedicalAppointmentContext();

//   if (!context) {
//     throw new Error("MedicalAppointmentContext não está disponível!");
//   }

//   const {
//     currentPatientId,
//     currentTutorId,
//     setCurrentPatientId,
//     setCurrentTutorId,
//     addMedicalAppointment,
//     loadPatientAppointments,
//   } = context;

//   // Estado para armazenar os IDs
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [selectedVet, setSelectedVet] = useState<string>("");
//   const [textareaValue, setTextareaValue] = useState<string>("");
//   const [sendToAdmission, setSendToAdmission] = useState<boolean>(false);
//   const [title, setTitle] = useState<string>("");

//   const [currentDate, setCurrentDate] = useState<string>("");
//   const [currentTime, setCurrentTime] = useState<string>("");

//   // Captura dos parâmetros da URL
//   const { query } = router;
//   const tutorIdFromUrl = query.tutorId as string;
//   const petIdFromUrl = query.petId as string;

//   useEffect(() => {
//     // Verifique se os parâmetros da URL estão disponíveis
//     if (tutorIdFromUrl && petIdFromUrl) {
//       setCurrentTutorId(tutorIdFromUrl);
//       setCurrentPatientId(petIdFromUrl);
//       console.log("IDs atualizados:", tutorIdFromUrl, petIdFromUrl);
//     } else {
//       console.log("TutorId ou PetId não encontrados na URL.");
//     }
//   }, [tutorIdFromUrl, petIdFromUrl, setCurrentTutorId, setCurrentPatientId]);

//   // Atualiza a data e hora a cada minuto
//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const formattedDate = format(now, "dd/MM/yyyy");
//       const formattedTime = format(now, "HH:mm");

//       setCurrentDate(formattedDate);
//       setCurrentTime(formattedTime);
//     };

//     updateDateTime();

//     const intervalId = setInterval(updateDateTime, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Efetuar o carregamento das consultas apenas se os IDs estiverem disponíveis
//   useEffect(() => {
//     if (currentPatientId && currentTutorId) {
//       loadPatientAppointments(currentTutorId, currentPatientId);
//     }
//   }, [currentPatientId, currentTutorId, loadPatientAppointments]);

//   const handleVetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedVet(e.target.value);
//   };

//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setSelectedOption(value);

//     // Atualização do valor do campo de texto com base na seleção
//     if (value === "Dermatologia Veterinária") {
//       setTextareaValue(
//         "Anamnese:\nexame físico:\ndiagnóstico:\noutras considerações:"
//       );
//     } else if (value === "Nutrição Veterinária") {
//       setTextareaValue(
//         "Histórico nutricional:\nAlimentos recomendados:\nObservações adicionais:"
//       );
//     } else if (value === "Clínica Geral") {
//       setTextareaValue(
//         "Queixa principal:\nExame físico:\nDiagnóstico:\nPlano terapêutico:"
//       );
//     } else if (value === "Neurologia Veterinária") {
//       setTextareaValue(
//         "Anamnese neurológica:\nExame neurológico:\nDiagnóstico neurológico:"
//       );
//     } else if (value === "Cirurgia Veterinária") {
//       setTextareaValue(
//         "Tipo de cirurgia:\nObjetivo da cirurgia:\nObservações pré-operatórias:"
//       );
//     } else {
//       setTextareaValue("");
//     }
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setTextareaValue(e.target.value);
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSendToAdmission(e.target.checked);
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Verifique se os IDs estão definidos antes de enviar o formulário
//     if (!currentTutorId || !currentPatientId) {
//       console.error("TutorId ou PetId não encontrados!");
//       return;
//     }

//     const currentTimestamp = new Date().toISOString();

//     const event = {
//       appointmentType: selectedOption,
//       title: title,
//       vet: selectedVet,
//       notes: textareaValue,
//       send_to_admission: sendToAdmission,
//       timeStamp: currentTimestamp,
//     };

//     console.log("Dados para salvar no Firestore:", event);

//     // Verifica se os IDs estão disponíveis no contexto antes de salvar
//     try {
//       await addMedicalAppointment(currentTutorId, currentPatientId, event);

//       // Limpa os campos do formulário após enviar os dados
//       setSelectedOption("");
//       setTextareaValue("");
//       setSelectedVet("");
//       setSendToAdmission(false);
//       setTitle("");
//     } catch (error) {
//       console.error("Erro ao adicionar atendimento:", error);
//     }
//   };

//   return (
//     <form className="px-5 py-10" onSubmit={handleFormSubmit}>
//       <div className="flex flex-col gap-5">
//         <div className="flex flex-row gap-5 items-center">
//           <span className="text-blue-400 text-lg roboto-regular">
//             {currentDate}
//           </span>
//           <span className="text-gray-400 text-sm roboto-regular">
//             {currentTime}
//           </span>
//         </div>
//         <div className="flex flex-row gap-5">
//           <div className="flex flex-col gap-2">
//             <label>Tipo de atendimento</label>
//             <select
//               name="Tipo de atendimento"
//               id="tipo"
//               className="px-2 py-2"
//               value={selectedOption}
//               onChange={handleSelectChange}
//               required
//             >
//               <option value="" disabled>
//                 Selecione um tipo de atendimento
//               </option>
//               <option value="Dermatologia Veterinária">
//                 Consulta em Dermatologia
//               </option>
//               <option value="Nutrição Veterinária">Consulta em Nutrição</option>
//               <option value="Clínica Geral">Clínico Geral</option>
//               <option value="Neurologia Veterinária">
//                 Consulta em Neurologia
//               </option>
//               <option value="Cirurgia Veterinária">Cirugia Veterinária</option>
//             </select>
//           </div>
//           <div className="flex flex-col gap-2 w-full">
//             <label>Resumo</label>
//             <input
//               type="text"
//               name="resumo"
//               value={title}
//               onChange={handleTitleChange}
//               className="w-full border px-1 py-1"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>Veterinário responsável</label>
//           <select
//             name="veterinário"
//             value={selectedVet}
//             onChange={handleVetChange}
//             className="w-2/4 px-2 py-2"
//           >
//             <option value="Veterinário 1">Veterinário 1</option>
//             <option value="Veterinário 2">Veterinário 2</option>
//             <option value="Veterinário 3">Veterinário 3</option>
//           </select>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>Observações</label>
//           <textarea
//             value={textareaValue}
//             onChange={handleTextareaChange}
//             className="w-full px-3 py-3"
//           />
//         </div>
//         <div className="flex items-center gap-3">
//           <input
//             type="checkbox"
//             name="admission"
//             checked={sendToAdmission}
//             onChange={handleCheckboxChange}
//           />
//           <label>Enviar para a internação?</label>
//         </div>
//         <div className="flex gap-5 justify-end mt-5">
//           <button
//             type="button"
//             className="border-2 border-darkCyan text-darkCyan px-4 py-2 roboto-regular text-sm"
//           >
//             Cancelar
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-darkCyan text-white roboto-regular text-sm"
//           >
//             Salvar
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Usando useParams em vez de useRouter
import { format } from "date-fns";
import { useMedicalAppointmentContext } from "@/app/contexts/medicalAppointment";

export default function GeneralForm() {
  const params = useParams(); // Acessando os parâmetros da URL
  const context = useMedicalAppointmentContext();

  if (!context) {
    throw new Error("MedicalAppointmentContext não está disponível!");
  }

  const {
    currentPatientId,
    currentTutorId,
    setCurrentPatientId,
    setCurrentTutorId,
    addMedicalAppointment,
    loadPatientAppointments,
  } = context;

  // Estado para armazenar os IDs
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedVet, setSelectedVet] = useState<string>("");
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [sendToAdmission, setSendToAdmission] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  // Captura dos parâmetros da URL via useParams
  const tutorIdFromUrl = params.tutorId as string;
  const petIdFromUrl = params.petId as string;

  useEffect(() => {
    // Verifique se os parâmetros da URL estão disponíveis
    if (tutorIdFromUrl && petIdFromUrl) {
      setCurrentTutorId(tutorIdFromUrl);
      setCurrentPatientId(petIdFromUrl);
      console.log("IDs atualizados:", tutorIdFromUrl, petIdFromUrl);
    } else {
      console.log("TutorId ou PetId não encontrados na URL.");
    }
  }, [tutorIdFromUrl, petIdFromUrl, setCurrentTutorId, setCurrentPatientId]);

  // Atualiza a data e hora a cada minuto
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = format(now, "dd/MM/yyyy");
      const formattedTime = format(now, "HH:mm");

      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Efetuar o carregamento das consultas apenas se os IDs estiverem disponíveis
  useEffect(() => {
    if (currentPatientId && currentTutorId) {
      loadPatientAppointments(currentTutorId, currentPatientId);
    }
  }, [currentPatientId, currentTutorId, loadPatientAppointments]);

  const handleVetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVet(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);

    // Atualização do valor do campo de texto com base na seleção
    if (value === "Dermatologia Veterinária") {
      setTextareaValue(
        "Anamnese:\nexame físico:\ndiagnóstico:\noutras considerações:"
      );
    } else if (value === "Nutrição Veterinária") {
      setTextareaValue(
        "Histórico nutricional:\nAlimentos recomendados:\nObservações adicionais:"
      );
    } else if (value === "Clínica Geral") {
      setTextareaValue(
        "Queixa principal:\nExame físico:\nDiagnóstico:\nPlano terapêutico:"
      );
    } else if (value === "Neurologia Veterinária") {
      setTextareaValue(
        "Anamnese neurológica:\nExame neurológico:\nDiagnóstico neurológico:"
      );
    } else if (value === "Cirurgia Veterinária") {
      setTextareaValue(
        "Tipo de cirurgia:\nObjetivo da cirurgia:\nObservações pré-operatórias:"
      );
    } else {
      setTextareaValue("");
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendToAdmission(e.target.checked);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifique se os IDs estão definidos antes de enviar o formulário
    if (!currentTutorId || !currentPatientId) {
      console.error("TutorId ou PetId não encontrados!");
      return;
    }

    const currentTimestamp = new Date().toISOString();

    const event = {
      appointmentType: selectedOption,
      title: title,
      vet: selectedVet,
      notes: textareaValue,
      send_to_admission: sendToAdmission,
      timeStamp: currentTimestamp,
    };

    console.log("Dados para salvar no Firestore:", event);

    // Verifica se os IDs estão disponíveis no contexto antes de salvar
    try {
      await addMedicalAppointment(currentTutorId, currentPatientId, event);

      // Limpa os campos do formulário após enviar os dados
      setSelectedOption("");
      setTextareaValue("");
      setSelectedVet("");
      setSendToAdmission(false);
      setTitle("");
    } catch (error) {
      console.error("Erro ao adicionar atendimento:", error);
    }
  };

  return (
    <form className="px-5 py-10" onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5 items-center">
          <span className="text-blue-400 text-lg roboto-regular">
            {currentDate}
          </span>
          <span className="text-gray-400 text-sm roboto-regular">
            {currentTime}
          </span>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-2">
            <label>Tipo de atendimento</label>
            <select
              name="Tipo de atendimento"
              id="tipo"
              className="px-2 py-2"
              value={selectedOption}
              onChange={handleSelectChange}
              required
            >
              <option value="" disabled>
                Selecione um tipo de atendimento
              </option>
              <option value="Dermatologia Veterinária">
                Consulta em Dermatologia
              </option>
              <option value="Nutrição Veterinária">Consulta em Nutrição</option>
              <option value="Clínica Geral">Clínico Geral</option>
              <option value="Neurologia Veterinária">
                Consulta em Neurologia
              </option>
              <option value="Cirurgia Veterinária">Cirugia Veterinária</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Resumo</label>
            <input
              type="text"
              name="resumo"
              value={title}
              onChange={handleTitleChange}
              className="w-full border px-1 py-1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Veterinário responsável</label>
          <select
            name="veterinário"
            value={selectedVet}
            onChange={handleVetChange}
            className="w-2/4 px-2 py-2"
          >
            <option value="Veterinário 1">Veterinário 1</option>
            <option value="Veterinário 2">Veterinário 2</option>
            <option value="Veterinário 3">Veterinário 3</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label>Observações</label>
          <textarea
            value={textareaValue}
            onChange={handleTextareaChange}
            className="w-full px-3 py-3"
          />
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="admission"
            checked={sendToAdmission}
            onChange={handleCheckboxChange}
          />
          <label>Enviar para a internação?</label>
        </div>
        <div className="flex gap-5 justify-end mt-5">
          <button
            type="button"
            className="border-2 border-darkCyan text-darkCyan px-4 py-2 roboto-regular text-sm"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-darkCyan text-white roboto-regular text-sm"
          >
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
}
