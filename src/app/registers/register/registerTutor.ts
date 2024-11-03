import { Tutor } from "./tutor";
import { v4 as uuidv4 } from 'uuid';

async function registerTutor(tutor: Tutor): Promise<void> {
  const apiUrl = 'https://pi-t1-gp2-clinica.onrender.com/pet-owners';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tutor)
    });

    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Tutor cadastrado com sucesso:', data);
  } catch (error) {
    console.error('Erro ao cadastrar o tutor:', error);
  }
}

const novoTutor = new Tutor("Chico Science", "00600700891", "81987474159", "chico@science.com", "Endereço do Chico");
registerTutor(novoTutor); 
console.log(novoTutor);

export default registerTutor;
