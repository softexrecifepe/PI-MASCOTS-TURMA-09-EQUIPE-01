// "use client";
// import { Header } from "../components/navigationScreen/header/header";
// import { SideBar } from "../components/navigationScreen/sidebar/sidebar";
// import { BreadCrumb } from "../components/ui/breadcrumbs/breadcrumb";
// import { SectionTitle } from "../components/ui/titles/sectionTitle";
// // import { TutorProvider } from "../contexts/TutorContext";
// import SearchTutor from "./form-registers-search/form-registers-search";

// export default function MedicalAppointment() {
//   return (
//     <>
//       {/* <TutorProvider> */}
//       <div className="flex h-screen">
//         <SideBar />
//         <div className="flex-1 flex flex-col">
//           <Header />
//           <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[72px] px-10 py-8">
//             <BreadCrumb
//               link="../registers/register"
//               description="Voltar para a página de cadastro"
//             />
//             <SectionTitle
//               iconClass="fa-regular fa-folder-open"
//               sectionTitle="Buscar tutor cadastrado"
//               color="text-gamboge"
//             ></SectionTitle>
//             <SearchTutor />
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import SearchTutor from "./form-registers-search/form-registers-search";

export default function SearchRegisteredTutor() {
  return (
    <div className="">
      <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-40px px-10 py-8">
        <SearchTutor />
      </main>
    </div>
  );
}
