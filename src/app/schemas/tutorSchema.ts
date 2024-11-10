import { z } from 'zod';

export const tutorSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }),
  cpf: z.string().length(14, { message: "CPF deve ter 14 caracteres" }),
  telefone: z.string().min(10, { message: "Telefone é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  endereco: z.string().min(1, { message: "Endereço é obrigatório" }),
});

export type TutorData = z.infer<typeof tutorSchema>;
