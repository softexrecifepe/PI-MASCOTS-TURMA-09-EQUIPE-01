// // src/hooks/usePets.ts
// import { useState, useEffect } from "react";
// import { db } from "@/lib/firebase/firebase.config";
// import { collection, getDocs } from "firebase/firestore";

// interface Pet {
//   id: string;
//   name: string;
//   breed: string;
//   age: number;
//   // Adicione mais campos conforme necessário
// }

// const usePets = (tutorId: string) => {
//   const [pets, setPets] = useState<Pet[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const petsRef = collection(db, "tutores", tutorId, "pets");
//         const querySnapshot = await getDocs(petsRef);
//         const petsList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setPets(petsList);
//         setLoading(false);
//       } catch (err) {
//         setError("Erro ao buscar os pets.");
//         setLoading(false);
//       }
//     };

//     if (tutorId) {
//       fetchPets();
//     }
//   }, [tutorId]);

//   return { pets, loading, error };
// };

// export default usePets;

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";

// Define o tipo esperado para um Pet
interface Pet {
  id: string;
  nome: string;
  raca: string;
  idade: number;
  genero: string;
  // Outros campos do pet, se necessário
}

const usePets = (tutorId: string) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        // Referência à coleção de pets do tutor
        const petsRef = collection(db, "tutores", tutorId, "petsVinculados");
        const querySnapshot = await getDocs(petsRef);

        // Mapeia os documentos retornados do Firestore, garantindo que o objeto tenha todos os campos
        const petsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          nome: doc.data().nome, // Garanta que o campo 'name' exista
          raca: doc.data().raca, // Garanta que o campo 'breed' exista
          idade: doc.data().idade, // Garanta que o campo 'age' exista
          genero: doc.data().genero, // Garanta que o campo 'age' exista
        }));

        setPets(petsList); // Atualiza o estado com os pets completos
        setLoading(false);
      } catch (err) {
        setError("Erro ao buscar os pets.");
        setLoading(false);
      }
    };

    if (tutorId) {
      fetchPets();
    }
  }, [tutorId]);

  return { pets, loading, error };
};

export default usePets;
