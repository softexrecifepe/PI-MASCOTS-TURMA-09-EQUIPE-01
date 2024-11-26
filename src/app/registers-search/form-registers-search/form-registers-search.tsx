// // "use client";
// // import { Header } from "@/app/components/navigationScreen/header/header";
// // import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
// // import { useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import { collection, getDocs } from "firebase/firestore"; //, query, where
// // import { db } from "@/lib/firebase/firebase.config"; // Importe a configuração do Firebase

// // type TutorJson = {
// //   id: string;
// //   nome: string;
// //   cpf: string;
// //   telefone: string;
// //   email: string;
// //   endereco: string;
// // };

// // export default function SearchTutor() {
// //   const [searchName, setSearchName] = useState("");
// //   const [error, setError] = useState("");
// //   const [filteredTutors, setFilteredTutors] = useState<TutorJson[]>([]);
// //   const [tutors, setTutors] = useState<TutorJson[]>([]);
// //   const router = useRouter();

// //   // useEffect(() => {
// //   //   const fetchTutors = async () => {
// //   //     try {
// //   //       const response = await fetch("http://localhost:4000/tutores");
// //   //       const data = await response.json();
// //   //       setTutors(data);
// //   //     } catch (error) {
// //   //       console.log(error);
// //   //     }
// //   //   };
// //   //   fetchTutors();
// //   // }, []);

// //   // useEffect(() => {
// //   //   const fetchTutors = async () => {
// //   //     try {
// //   //       // Recuperar todos os tutores da coleção 'tutores'
// //   //       const tutorsCollection = collection(db, "tutores");
// //   //       const tutorsSnapshot = await getDocs(tutorsCollection);
// //   //       const tutorsList = tutorsSnapshot.docs.map((doc) => ({
// //   //         id: doc.id,
// //   //         ...doc.data(),
// //   //       })) as TutorJson[];
// //   //       setTutors(tutorsList);
// //   //     } catch (error) {
// //   //       console.log("Erro ao buscar tutores:", error);
// //   //     }
// //   //   };

// //   //   fetchTutors();
// //   // }, []);

// //   // useEffect(() => {
// //   //   if (searchName.trim() === "") {
// //   //     setFilteredTutors([]);
// //   //     setError("");
// //   //   } else {
// //   //     const lowercasedTerm = searchName.toLowerCase();
// //   //     const filtered = tutors.filter(
// //   //       (tutor) =>
// //   //         tutor.nome.toLowerCase().includes(lowercasedTerm) ||
// //   //         tutor.cpf.includes(searchName)
// //   //     );
// //   //     setFilteredTutors(filtered);

// //   //     if (filtered.length === 0) {
// //   //       setError("Nenhum tutor encontrado com esse nome ou CPF.");
// //   //     } else {
// //   //       setError("");
// //   //     }
// //   //   }
// //   // }, [searchName, tutors]);

// //   // useEffect(() => {
// //   //   if (searchName.trim() === "") {
// //   //     setFilteredTutors([]);
// //   //     setError("");
// //   //   } else {
// //   //     const lowercasedTerm = searchName.toLowerCase();
// //   //     const filtered = tutors.filter(
// //   //       (tutor) =>
// //   //         tutor.nome.toLowerCase().includes(lowercasedTerm) ||
// //   //         tutor.cpf.includes(searchName)
// //   //     );
// //   //     setFilteredTutors(filtered);

// //   //     if (filtered.length === 0) {
// //   //       setError("Nenhum tutor encontrado com esse nome ou CPF.");
// //   //     } else {
// //   //       setError("");
// //   //     }
// //   //   }
// //   // }, [searchName, tutors]);

// //   useEffect(() => {
// //     const fetchTutors = async () => {
// //       try {
// //         const tutorsCollection = collection(db, "tutores");
// //         const tutorsSnapshot = await getDocs(tutorsCollection);
// //         const tutorsList = tutorsSnapshot.docs.map((doc) => {
// //           const data = doc.data();
// //           return {
// //             id: doc.id,
// //             nome: data.nome || "Nome não disponível", // Valor padrão caso 'nome' esteja ausente
// //             cpf: data.cpf || "CPF não disponível", // Valor padrão caso 'cpf' esteja ausente
// //             telefone: data.telefone || "Telefone não disponível",
// //             email: data.email || "E-mail não disponível",
// //             endereco: data.endereco || "Endereço não disponível",
// //           } as TutorJson;
// //         });
// //         setTutors(tutorsList);
// //       } catch (error) {
// //         console.log("Erro ao buscar tutores:", error);
// //       }
// //     };

// //     fetchTutors();
// //   }, []);

// //   useEffect(() => {
// //     if (searchName.trim() === "") {
// //       setFilteredTutors([]);
// //       setError("");
// //     } else {
// //       const lowercasedTerm = searchName.toLowerCase();
// //       const filtered = tutors.filter(
// //         (tutor) =>
// //           tutor.nome.toLowerCase().includes(lowercasedTerm) ||
// //           tutor.cpf.includes(searchName)
// //       );
// //       setFilteredTutors(filtered);

// //       if (filtered.length === 0) {
// //         setError("Nenhum tutor encontrado com esse nome ou CPF.");
// //       } else {
// //         setError("");
// //       }
// //     }
// //   }, [searchName, tutors]);

// //   const goToTutorProfile = (tutorId: string) => {
// //     router.push(`../../registers/tutor-profile/${tutorId}`);
// //   };

// //   return (
// //     <main>
// //       <div>
// //         <Header />
// //         <SideBar />
// //         <div className="px-24 fixed items-center left-0 text-start w-full h-full">
// //           <form className="flex justify-center flex-col gap-5 input-lg">
// //             <div className="relative">
// //               <label
// //                 htmlFor="searchName"
// //                 className="text-lg font-semibold mb-2"
// //               >
// //                 Nome ou CPF do tutor:
// //               </label>
// //               <input
// //                 type="text"
// //                 name="searchName"
// //                 className="input input-bordered h-12 py-2 text-lg w-full"
// //                 placeholder="Digite nome ou CPF"
// //                 value={searchName}
// //                 onChange={(e) => {
// //                   setSearchName(e.target.value);
// //                 }}
// //               />
// //               {filteredTutors.length > 0 && (
// //                 <ul
// //                   className="absolute bg-white border border-gray-300 w-full mt-1 rounded z-10 shadow-lg max-h-48 overflow-y-auto"
// //                   style={{ top: "100%" }}
// //                 >
// //                   {filteredTutors.map((tutor) => (
// //                     <li
// //                       key={tutor.id}
// //                       className="p-2 cursor-pointer hover:bg-blue-100"
// //                       onClick={() => goToTutorProfile(tutor.id)}
// //                     >
// //                       <div className="flex flex-col">
// //                         <span className="font-semibold text-gray-800">
// //                           {tutor.nome}
// //                         </span>
// //                         <span className="text-sm text-gray-600">
// //                           CPF: {tutor.cpf}
// //                         </span>
// //                         <span className="text-sm text-gray-600">
// //                           Telefone: {tutor.telefone}
// //                         </span>
// //                         <span className="text-sm text-gray-600">
// //                           E-mail: {tutor.email}
// //                         </span>
// //                       </div>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               )}
// //               {error && <div className="mt-2 text-red-500">{error}</div>}
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";
// import { Header } from "@/app/components/navigationScreen/header/header";
// import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase/firebase.config"; // Importe a configuração do Firebase

// type TutorJson = {
//   id: string;
//   nome: string;
//   cpf: string;
//   telefone: string;
//   email: string;
//   endereco: string;
//   pets?: PetJson[];
// };

// type PetJson = {
//   id: string;
//   nome: string;
//   especie: string;
//   raca: string;
// };

// export default function SearchTutor() {
//   const [searchName, setSearchName] = useState("");
//   const [error, setError] = useState("");
//   const [filteredTutors, setFilteredTutors] = useState<TutorJson[]>([]);
//   const [tutors, setTutors] = useState<TutorJson[]>([]);
//   const [pets, setPets] = useState<PetJson[]>([]);
//   const router = useRouter();

//   // Função para buscar tutores e seus pets
//   useEffect(() => {
//     const fetchTutorsAndPets = async () => {
//       try {
//         const tutorsCollection = collection(db, "tutores");
//         const tutorsSnapshot = await getDocs(tutorsCollection);
//         const tutorsList = await Promise.all(
//           tutorsSnapshot.docs.map(async (doc) => {
//             const data = doc.data();
//             const tutorId = doc.id;

//             // Buscar pets vinculados a este tutor
//             const petsCollection = collection(
//               db,
//               `tutores/${tutorId}/petsVinculados`
//             );
//             const petsSnapshot = await getDocs(petsCollection);
//             const petsList = petsSnapshot.docs.map((petDoc) => ({
//               id: petDoc.id,
//               ...petDoc.data(),
//             })) as PetJson[];

//             return {
//               id: tutorId,
//               nome: data.nome || "Nome não disponível",
//               cpf: data.cpf || "CPF não disponível",
//               telefone: data.telefone || "Telefone não disponível",
//               email: data.email || "E-mail não disponível",
//               endereco: data.endereco || "Endereço não disponível",
//               pets: petsList, // Inclui os pets do tutor
//             };
//           })
//         );
//         setTutors(tutorsList);
//       } catch (error) {
//         console.log("Erro ao buscar tutores e pets:", error);
//       }
//     };

//     fetchTutorsAndPets();
//   }, []);

//   // Função para filtrar tutores e pets
//   useEffect(() => {
//     if (searchName.trim() === "") {
//       setFilteredTutors([]);
//       setError("");
//     } else {
//       const lowercasedTerm = searchName.toLowerCase();

//       const filtered = tutors.filter((tutor) => {
//         // Verifica no nome do tutor
//         const tutorMatches =
//           tutor.nome.toLowerCase().includes(lowercasedTerm) ||
//           tutor.cpf.includes(searchName);

//         // Verifica no nome dos pets
//         const petsMatches =
//           tutor.pets?.some((pet) =>
//             pet.nome.toLowerCase().includes(lowercasedTerm)
//           ) || false;

//         return tutorMatches || petsMatches;
//       });

//       setFilteredTutors(filtered);

//       if (filtered.length === 0) {
//         setError("Nenhum tutor ou pet encontrado com esse nome ou CPF.");
//       } else {
//         setError("");
//       }
//     }
//   }, [searchName, tutors]);

//   const goToTutorProfile = (tutorId: string) => {
//     router.push(`../../registers/tutor-profile/${tutorId}`);
//   };

//   return (
//     <main>
//       <div>
//         <Header />
//         <SideBar />
//         <div className="px-24 fixed items-center left-0 text-start w-full h-full">
//           <form className="flex justify-center flex-col gap-5 input-lg">
//             <div className="relative">
//               <label
//                 htmlFor="searchName"
//                 className="text-lg font-semibold mb-2"
//               >
//                 Nome ou CPF do tutor ou nome do pet:
//               </label>
//               <input
//                 type="text"
//                 name="searchName"
//                 className="input input-bordered h-12 py-2 text-lg w-full"
//                 placeholder="Digite nome ou CPF do tutor ou nome do pet"
//                 value={searchName}
//                 onChange={(e) => {
//                   setSearchName(e.target.value);
//                 }}
//               />
//               {filteredTutors.length > 0 && (
//                 <ul
//                   className="absolute bg-white border border-gray-300 w-full mt-1 rounded z-10 shadow-lg max-h-48 overflow-y-auto"
//                   style={{ top: "100%" }}
//                 >
//                   {filteredTutors.map((tutor) => (
//                     <li
//                       key={tutor.id}
//                       className="p-2 cursor-pointer hover:bg-blue-100"
//                       onClick={() => goToTutorProfile(tutor.id)}
//                     >
//                       <div className="flex flex-col">
//                         <span className="font-semibold text-gray-800">
//                           {tutor.nome}
//                         </span>
//                         <span className="text-sm text-gray-600">
//                           CPF: {tutor.cpf}
//                         </span>
//                         <span className="text-sm text-gray-600">
//                           Telefone: {tutor.telefone}
//                         </span>
//                         <span className="text-sm text-gray-600">
//                           E-mail: {tutor.email}
//                         </span>
//                         {tutor.pets && tutor.pets.length > 0 && (
//                           <div className="mt-2 text-gray-700">
//                             <span className="font-semibold">Pets:</span>
//                             <ul>
//                               {tutor.pets.map((pet) => (
//                                 <li key={pet.id} className="text-sm">
//                                   {pet.nome} - {pet.especie}, {pet.raca}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//               {error && <div className="mt-2 text-red-500">{error}</div>}
//             </div>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }

// novo

"use client";
import { Header } from "@/app/components/navigationScreen/header/header";
import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase.config"; // Importe a configuração do Firebase

type TutorJson = {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: string;
};

type PetJson = {
  id: string;
  nome: string;
  especie: string;
  raca: string;
  tutorId: string;
};

export default function SearchTutorAndPet() {
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState<"tutor" | "pet">("tutor");
  const [error, setError] = useState("");
  const [filteredResults, setFilteredResults] = useState<
    (TutorJson | PetJson)[]
  >([]);
  const [tutors, setTutors] = useState<TutorJson[]>([]);
  const [pets, setPets] = useState<PetJson[]>([]);
  const router = useRouter();

  // Função para buscar tutores e pets
  useEffect(() => {
    const fetchTutorsAndPets = async () => {
      try {
        // Buscar tutores
        const tutorsCollection = collection(db, "tutores");
        const tutorsSnapshot = await getDocs(tutorsCollection);
        const tutorsList = tutorsSnapshot.docs.map((doc) => ({
          id: doc.id,
          nome: doc.data().nome || "Nome não disponível",
          cpf: doc.data().cpf || "CPF não disponível",
          telefone: doc.data().telefone || "Telefone não disponível",
          email: doc.data().email || "E-mail não disponível",
          endereco: doc.data().endereco || "Endereço não disponível",
        }));

        // Buscar pets vinculados aos tutores
        const allPets: PetJson[] = [];
        for (const doc of tutorsSnapshot.docs) {
          const tutorId = doc.id;
          const petsCollection = collection(
            db,
            `tutores/${tutorId}/petsVinculados`
          );
          const petsSnapshot = await getDocs(petsCollection);
          const petsList = petsSnapshot.docs.map((petDoc) => ({
            id: petDoc.id,
            nome: petDoc.data().nome,
            especie: petDoc.data().especie,
            raca: petDoc.data().raca,
            tutorId: tutorId,
          }));
          allPets.push(...petsList);
        }

        setTutors(tutorsList);
        setPets(allPets);
      } catch (error) {
        console.log("Erro ao buscar dados:", error);
      }
    };

    fetchTutorsAndPets();
  }, []);

  // Função para filtrar resultados
  useEffect(() => {
    if (searchName.trim() === "") {
      setFilteredResults([]);
      setError("");
    } else {
      const lowercasedTerm = searchName.toLowerCase();

      if (searchType === "tutor") {
        // Filtrar por tutores
        const filteredTutors = tutors.filter(
          (tutor) =>
            tutor.nome.toLowerCase().includes(lowercasedTerm) ||
            tutor.cpf.includes(searchName)
        );
        setFilteredResults(filteredTutors);

        if (filteredTutors.length === 0) {
          setError("Nenhum tutor encontrado com esse nome ou CPF.");
        } else {
          setError("");
        }
      } else if (searchType === "pet") {
        // Filtrar por pets
        const filteredPets = pets.filter((pet) =>
          pet.nome.toLowerCase().includes(lowercasedTerm)
        );
        setFilteredResults(filteredPets);

        if (filteredPets.length === 0) {
          setError("Nenhum pet encontrado com esse nome.");
        } else {
          setError("");
        }
      }
    }
  }, [searchName, tutors, pets, searchType]);

  // Função para redirecionar para o perfil de tutor
  const goToTutorProfile = (tutorId: string) => {
    router.push(`/registers/tutor-profile/${tutorId}`);
  };

  // Função para redirecionar para o perfil de pet
  const goToPetProfile = (petId: string, tutorId: string) => {
    router.push(`/registers/patient-profile/${tutorId}/${petId}`);
  };

  return (
    <main>
      <div>
        <Header />
        <SideBar />
        <div className="px-24 fixed items-center left-0 text-start w-full h-full">
          <form className="flex justify-center flex-col gap-5 input-lg">
            <div className="relative">
              <label
                htmlFor="searchName"
                className="text-lg font-semibold mb-2"
              >
                Pesquisar por:
              </label>
              <select
                value={searchType}
                onChange={(e) =>
                  setSearchType(e.target.value as "tutor" | "pet")
                }
                className="select select-bordered w-full mb-4"
              >
                <option value="tutor">Tutor</option>
                <option value="pet">Pet</option>
              </select>

              <label
                htmlFor="searchName"
                className="text-lg font-semibold mb-2"
              >
                Nome do {searchType === "tutor" ? "tutor" : "pet"}:
              </label>
              <input
                type="text"
                name="searchName"
                className="input input-bordered h-12 py-2 text-lg w-full"
                placeholder={`Digite nome do ${
                  searchType === "tutor" ? "tutor" : "pet"
                }`}
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />

              {filteredResults.length > 0 && (
                <ul
                  className="absolute bg-white border border-gray-300 w-full mt-1 rounded z-10 shadow-lg max-h-48 overflow-y-auto"
                  style={{ top: "100%" }}
                >
                  {filteredResults.map((result) => (
                    <li
                      key={result.id}
                      className="p-2 cursor-pointer hover:bg-blue-100"
                      onClick={() =>
                        searchType === "tutor"
                          ? goToTutorProfile(result.id)
                          : goToPetProfile(
                              result.id,
                              (result as PetJson).tutorId
                            )
                      }
                    >
                      <div className="flex flex-col">
                        {searchType === "tutor" ? (
                          <>
                            <span className="font-semibold text-gray-800">
                              {result.nome}
                            </span>
                            <span className="text-sm text-gray-600">
                              CPF: {(result as TutorJson).cpf}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="font-semibold text-gray-800">
                              {result.nome}
                            </span>
                            <span className="text-sm text-gray-600">
                              Espécie: {(result as PetJson).especie}
                            </span>
                            <span className="text-sm text-gray-600">
                              Raça: {(result as PetJson).raca}
                            </span>
                            <span className="text-sm text-gray-600">
                              Raça: {(result as PetJson).raca}
                            </span>
                            {/* Adicionando o nome do tutor ao lado do pet */}
                            <span className="text-sm text-gray-600">
                              Tutor:{" "}
                              {
                                tutors.find(
                                  (tutor) =>
                                    tutor.id === (result as PetJson).tutorId
                                )?.nome
                              }
                            </span>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {error && <div className="mt-2 text-red-500">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
