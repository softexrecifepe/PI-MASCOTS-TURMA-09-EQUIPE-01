// import { useState } from "react";

// type Field = {
//   name: string;
//   label: string;
//   type: string;
//   value: string;
// };

// type EditModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (updatedData: Record<string, string>) => void;
//   fields: Field[]; // Campos do formulário
//   title: string; // Título do modal
//   id: string;
//   url: string; // URL para onde a requisição será enviada
//   method: "PATCH" | "POST" | "PUT"; // Método HTTP para a requisição
// };

// export default function GeneralModal({
//   isOpen,
//   onClose,
//   onSave,
//   fields,
//   title,
//   id,
//   url,
//   method,
// }: EditModalProps) {
//   // Estado para armazenar os dados do formulário
//   const [formData, setFormData] = useState<Record<string, string>>(
//     fields.reduce((acc, field) => {
//       // Garantir que o tipo de acc é um objeto com chaves string e valores string
//       acc[field.name as string] = field.value;
//       return acc;
//     }, {} as Record<string, string>) // Inicializa o acumulador com o tipo explícito
//   );

//   // Função para atualizar o estado ao mudar os campos
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   //   const handleSubmit = async (e: React.FormEvent) => {
//   //     e.preventDefault();

//   //     // Envia os dados modificados para o JSON Server
//   //     try {
//   //       const response = await fetch(
//   //         `http://localhost:4000/tutores/${id}`, // A URL do tutor a ser atualizado
//   //         {
//   //           method: "PATCH", // Usamos PATCH para atualizar parcialmente os dados
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //           },
//   //           body: JSON.stringify(formData), // Passando os dados atualizados do formulário
//   //         }
//   //       );

//   //       if (!response.ok) {
//   //         throw new Error("Erro ao atualizar os dados no servidor");
//   //       }

//   //       const updatedData = await response.json(); // Dados atualizados retornados pelo servidor

//   //       onSave(updatedData); // Atualiza o estado do tutor no componente pai com os dados modificados
//   //       onClose(); // Fecha o modal

//   //       window.alert("Dados do tutor atualizados com sucesso!");
//   //     } catch (error) {
//   //       console.error("Erro ao atualizar o tutor:", error);
//   //       // Você pode adicionar uma mensagem de erro para o usuário, se desejar
//   //     }
//   //   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         `${url}/${id}`, // Usando o prop 'url' para a URL dinâmica
//         {
//           method: method, // Usando o prop 'method' para o método da requisição
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Erro ao atualizar os dados no servidor");
//       }

//       const updatedData = await response.json();
//       onSave(updatedData);
//       onClose();
//       window.alert("Dados atualizados com sucesso!");
//     } catch (error) {
//       console.error("Erro ao atualizar os dados:", error);
//       window.alert("Ocorreu um erro ao atualizar os dados.");
//     }
//   };

//   if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-md w-96 shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">{title}</h2>
//         <form onSubmit={handleSubmit}>
//           {fields.map((field) => (
//             <div key={field.name} className="mb-4">
//               <label className="block text-sm font-medium mb-1">
//                 {field.label}
//               </label>
//               <input
//                 type={field.type}
//                 name={field.name}
//                 value={formData[field.name]}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               />
//             </div>
//           ))}
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-500 text-white rounded-md"
//             >
//               Cancelar
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-600 text-white rounded-md"
//             >
//               Salvar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { db } from "@/lib/firebase/firebase.config"; // Importe a configuração do Firebase
import { doc, updateDoc } from "firebase/firestore"; // Funções do Firestore

type Field = {
  name: string;
  label: string;
  type: string;
  value: string;
};

type EditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedData: Record<string, string>) => void;
  fields: Field[];
  title: string;
  id: string;
  collectionName: string; // Nome da coleção no Firestore
};

export default function GeneralModal({
  isOpen,
  onClose,
  onSave,
  fields,
  title,
  id,
  collectionName,
}: EditModalProps) {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => {
      acc[field.name as string] = field.value;
      return acc;
    }, {} as Record<string, string>)
  );

  // Função para atualizar o estado ao mudar os campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para enviar os dados ao Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Referência ao documento no Firestore
      const docRef = doc(db, collectionName, id);

      // Atualiza os dados no Firestore
      await updateDoc(docRef, formData);

      // Atualiza o estado com os dados modificados e fecha o modal
      onSave(formData);
      onClose();
      window.alert("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar os dados no Firestore:", error);
      window.alert("Ocorreu um erro ao atualizar os dados.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-sm font-medium mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
          ))}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
