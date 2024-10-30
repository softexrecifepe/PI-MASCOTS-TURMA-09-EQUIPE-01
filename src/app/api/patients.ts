import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("https://pi-t1-gp2-clinica.onrender.com/pets");

    console.log("Status da resposta da API externa:", response.status);
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Erro ao buscar dados" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    res.status(500).json({ message: "Erro ao buscar dados" });
  }
}
