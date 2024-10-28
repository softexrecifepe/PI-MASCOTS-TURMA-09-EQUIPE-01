export const fetchPatients = async () => {
  try {
    const response = await fetch("/api/patients"); // Atualizando a URL para a API interna
    // const response = await fetch("https://pi-t1-gp2-clinica.onrender.com/pets"); // Atualizando a URL para a API interna
    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }
    const data = await response.json();
    console.log("Dados da API:", data);
    return data;
  } catch (error) {
    console.log("Erro: ", error);
    throw error;
  }
};

// fetchPatients();