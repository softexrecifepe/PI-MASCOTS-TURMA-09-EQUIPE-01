"use client";
import { useState } from "react";
import { storage, db } from "@/lib/firebase/firebase.config"; // Seu arquivo de configuração
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";

interface ImageUploadProps {
  petId: string;
  tutorId: string;
  onUpload: (url: string) => void;
}

export default function ImageUpload({ petId, tutorId }: ImageUploadProps) {
  const [image, setImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Função para lidar com o upload da imagem
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const uploadImage = async () => {
    if (!image) return;

    setIsUploading(true);

    try {
      const storageRef = ref(
        storage,
        `pets/${tutorId}/${petId}/images/${image.name}`
      );
      const uploadTask = await uploadBytes(storageRef, image);
      const url = await getDownloadURL(uploadTask.ref);
      setImageUrl(url);

      console.log("Imagem carregada com sucesso:", url);
      // Salve a URL da imagem no Firestore (no documento do pet)
      await saveImageUrlToFirestore(url);
    } catch (error) {
      console.error("Erro no upload da imagem:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const saveImageUrlToFirestore = async (url: string) => {
    // Aqui você pode salvar a URL da imagem no Firestore
    // Dentro do documento do pet
    const petRef = doc(db, `tutores/${tutorId}/petsVinculados/${petId}`);
    await updateDoc(petRef, {
      imagem: url,
    });
  };

  return (
    <div >
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={uploadImage} disabled={isUploading} className="text-white cursor-default" > 
        {isUploading ? "Carregando..." : "Carregar Imagem"}
      </button>

      {imageUrl && (
        <Image src={imageUrl} alt="Pet" width={100} height={100}></Image>
      )}
    </div>
  );
}
