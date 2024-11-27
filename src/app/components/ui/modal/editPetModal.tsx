// import { useState, useEffect } from "react";
// import { db } from "@/lib/firebase/firebase.config"; // Configuração do Firebase
// import { doc, updateDoc } from "firebase/firestore"; // Funções do Firestore

// type PetData = {
//   name: string;
//   breed: string;
//   weight: string;
// };

// type EditPetModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (updatedData: PetData) => void;
//   petData: PetData;
//   petId: string;
//   tutorId: string;
// };

// export default function EditPetModal({
//   isOpen,
//   onClose,
//   onSave,
//   petData,
//   petId,
//   tutorId,
// }: EditPetModalProps) {
//   // Inicializando formData com petData
//   const [formData, setFormData] = useState<PetData>({
//     name: petData.name,
//     breed: petData.breed,
//     weight: petData.weight,
//   });

//   useEffect(() => {
//     setFormData({
//       name: petData.name,
//       breed: petData.breed,
//       weight: petData.weight,
//     });
//   }, [petData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const petDocRef = doc(db, "tutores", tutorId, "petsVinculados", petId);
//       await updateDoc(petDocRef, formData);
//       onSave(formData); // Atualiza o estado no componente pai
//       onClose(); // Fecha o modal
//       alert("Dados do pet atualizados com sucesso!");
//     } catch (error) {
//       console.error("Erro ao atualizar os dados do pet:", error);
//       alert("Erro ao atualizar os dados.");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-md w-96 shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">Editar {petData.name}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">
//               Nome do Pet
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Raça</label>
//             <input
//               type="text"
//               name="breed"
//               value={formData.breed}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Peso</label>
//             <input
//               type="text"
//               name="weight"
//               value={formData.weight}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

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

"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase/firebase.config"; // Configuração do Firebase
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Funções do Firestore

type PetData = {
  name: string;
  breed: string;
  weight: string;
};

type EditPetModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedData: {
    name: string;
    breed: string;
    weight: string;
  }) => void;
  petData: { name: string; breed: string; weight: string }; // Adicionando petData
  petId: string;
  tutorId: string;
};

export default function EditPetModal({
  isOpen,
  onClose,
  onSave,
  petId,
  tutorId,
}: EditPetModalProps) {
  // Inicializando o estado com null, já que ainda não temos os dados
  const [petData, setPetData] = useState<PetData | null>(null);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        // Busca os dados do pet no Firestore
        const petDocRef = doc(db, "tutores", tutorId, "petsVinculados", petId);
        const petDoc = await getDoc(petDocRef);

        if (petDoc.exists()) {
          setPetData(petDoc.data() as PetData); // Atualiza com os dados do pet
        } else {
          console.log("Pet não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do pet:", error);
      }
    };

    if (isOpen) {
      fetchPetData();
    }
  }, [isOpen, tutorId, petId]);

  // Verifica se os dados do pet ainda não foram carregados
  if (!petData) {
    return <div>Carregando...</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (petData) {
      setPetData({ ...petData, [name]: value }); // Atualiza o estado com a nova informação
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const petDocRef = doc(db, "tutores", tutorId, "petsVinculados", petId);
      await updateDoc(petDocRef, petData as PetData); // Atualiza no Firestore
      onSave(petData); // Passa os dados atualizados para o componente pai
      onClose(); // Fecha o modal
      alert("Dados do pet atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar os dados do pet:", error);
      alert("Erro ao atualizar os dados.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Editar {petData.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Nome do Pet
            </label>
            <input
              type="text"
              name="name"
              value={petData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Raça</label>
            <input
              type="text"
              name="breed"
              value={petData.breed}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Peso</label>
            <input
              type="text"
              name="weight"
              value={petData.weight}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

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
