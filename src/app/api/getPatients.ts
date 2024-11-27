export const fetchPatients = async () => {
  try {
    const response = await fetch("https://pi-t1-gp2-clinica.onrender.com/pets");
    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

// fetchPatients();
