// import { Header } from "@/app/components/navigationScreen/header/header";
// import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// type TutorJson = {
//   id: string;
//   nome: string;
//   cpf: string;
//   telefone: string;
//   email: string;
//   endereco: string;
// };

// export default function SearchTutor() {
//   const [searchName, setSearchName] = useState("");
//   const [error, setError] = useState("");
//   const [filteredTutors, setFilteredTutors] = useState<TutorJson[]>([]);
//   const [tutors, setTutors] = useState<TutorJson[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchTutors = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/tutores");
//         const data = await response.json();
//         setTutors(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchTutors();
//   }, []);

//   useEffect(() => {
//     if (searchName.trim() === "") {
//       setFilteredTutors([]);
//       setError("");
//     } else {
//       const lowercasedTerm = searchName.toLowerCase();
//       const filtered = tutors.filter(
//         (tutor) =>
//           tutor.nome.toLowerCase().includes(lowercasedTerm) ||
//           tutor.cpf.includes(searchName)
//       );
//       setFilteredTutors(filtered);

//       if (filtered.length === 0) {
//         setError("Nenhum tutor encontrado com esse nome ou CPF.");
//       } else {
//         setError("");
//       }
//     }
//   }, [searchName, tutors]);

//   const goToTutorProfile = (tutorId: string) => {
//     router.push(`../../registers/patient-profile/${tutorId}`);
//   };

//   return (
//     <main>
//       <div className="px-24 py-32">
//         <Header />
//         <SideBar />
//         <div className="px-24 py-40 fixed items-center top-24 left-0 text-start w-full h-full">
//           <form className="flex justify-center flex-col gap-5 input-lg">
//             <div className="relative">
//               <label
//                 htmlFor="searchName"
//                 className="text-lg font-semibold mb-2"
//               >
//                 Nome ou CPF do tutor:
//               </label>
//               <input
//                 type="text"
//                 name="searchName"
//                 className="input input-bordered h-3/4 pt-2 pb-2 text-lg w-full"
//                 placeholder="Digite nome ou CPF"
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

"use client";
import { Header } from "@/app/components/navigationScreen/header/header";
import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type TutorJson = {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: string;
};

export default function SearchTutor() {
  const [searchName, setSearchName] = useState("");
  const [error, setError] = useState("");
  const [filteredTutors, setFilteredTutors] = useState<TutorJson[]>([]);
  const [tutors, setTutors] = useState<TutorJson[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await fetch("http://localhost:4000/tutores");
        const data = await response.json();
        setTutors(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTutors();
  }, []);

  useEffect(() => {
    if (searchName.trim() === "") {
      setFilteredTutors([]);
      setError("");
    } else {
      const lowercasedTerm = searchName.toLowerCase();
      const filtered = tutors.filter(
        (tutor) =>
          tutor.nome.toLowerCase().includes(lowercasedTerm) ||
          tutor.cpf.includes(searchName)
      );
      setFilteredTutors(filtered);

      if (filtered.length === 0) {
        setError("Nenhum tutor encontrado com esse nome ou CPF.");
      } else {
        setError("");
      }
    }
  }, [searchName, tutors]);

  const goToTutorProfile = (tutorId: string) => {
    router.push(`../../registers/patient-profile/${tutorId}`);
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
                Nome ou CPF do tutor:
              </label>
              <input
                type="text"
                name="searchName"
                className="input input-bordered h-12 py-2 text-lg w-full" // Ajustei aqui para h-12 e py-2
                placeholder="Digite nome ou CPF"
                value={searchName}
                onChange={(e) => {
                  setSearchName(e.target.value);
                }}
              />
              {filteredTutors.length > 0 && (
                <ul
                  className="absolute bg-white border border-gray-300 w-full mt-1 rounded z-10 shadow-lg max-h-48 overflow-y-auto"
                  style={{ top: "100%" }}
                >
                  {filteredTutors.map((tutor) => (
                    <li
                      key={tutor.id}
                      className="p-2 cursor-pointer hover:bg-blue-100"
                      onClick={() => goToTutorProfile(tutor.id)}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-800">
                          {tutor.nome}
                        </span>
                        <span className="text-sm text-gray-600">
                          CPF: {tutor.cpf}
                        </span>
                        <span className="text-sm text-gray-600">
                          Telefone: {tutor.telefone}
                        </span>
                        <span className="text-sm text-gray-600">
                          E-mail: {tutor.email}
                        </span>
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
