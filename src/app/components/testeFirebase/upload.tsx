"use client";
import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase/firebase.config"; // Ajuste o caminho conforme necessário
import Image from "next/image";

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Função para lidar com a seleção de imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Função para enviar a imagem para o Firebase Storage
  const handleUpload = async () => {
    if (!image) {
      alert("Por favor, selecione uma imagem primeiro");
      return;
    }

    const imageRef = ref(storage, `images/${image.name}`);
    setUploading(true);

    try {
      // Faz o upload da imagem
      await uploadBytes(imageRef, image);

      // Pega a URL de download da imagem
      const downloadURL = await getDownloadURL(imageRef);
      setImageUrl(downloadURL);
      alert("Upload realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Enviando..." : "Upload da Imagem"}
      </button>
      {imageUrl && (
        <div>
          <p>Imagem enviada com sucesso:</p>
          {/* <img src={imageUrl} alt="Imagem enviada" style={{ maxWidth: '300px' }} /> */}
          <Image src={imageUrl} width={200} height={200} alt=""></Image>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
