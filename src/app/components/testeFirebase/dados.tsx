"use client";
import React, { useState } from "react";
import { db } from "@/lib/firebase/firebase.config"; // Ajuste o caminho conforme necessário
import { collection, addDoc } from "firebase/firestore";

const FormToFirestore: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [sending, setSending] = useState(false);

  // Função para lidar com a mudança dos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para enviar dados ao Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      // Adiciona um novo documento à coleção 'users'
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Documento escrito com ID: ", docRef.id);
      alert("Dados enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados: ", error);
      alert("Erro ao enviar dados.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={sending}>
        {sending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

export default FormToFirestore;
