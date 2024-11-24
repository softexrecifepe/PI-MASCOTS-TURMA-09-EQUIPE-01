"use client";

import { Header } from '@/app/components/navigationScreen/header/header';
import { SideBar } from '@/app/components/navigationScreen/sidebar/sidebar';
import React, { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { tutorSchema, TutorData } from '@/app/schemas/tutorSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { IoPaw } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { PiLineVerticalLight } from "react-icons/pi";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { v4 as uuidv4 } from 'uuid'; 

const RegisterForm = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<TutorData>({ resolver: zodResolver(tutorSchema) });
  const [pets, setPets] = useState([
    { id: uuidv4(), nome: '', raca: '', especie: '', genero: '', idade: '', peso: '', alergias: '' }
  ]);

  const onSubmit = async (data: TutorData) => {
    const payload = { ...data, pets };

    try {
      const response = await fetch("http://localhost:4000/tutores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar os dados. Verifique o servidor.");
      }else{alert('Tutor cadastrado com sucesso!')}
      reset({ nome: '', cpf: '', telefone: '', endereco: '', email: '' });
      setPets([{ id: uuidv4(), nome: '', raca: '', especie: '', genero: '', idade: '', peso: '', alergias: '' }]);
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao tentar salvar os dados. Tente novamente mais tarde.");
    }
  };

  const handleAddPet = () => {
    if (pets.length < 3) {
      setPets([...pets, { id: uuidv4(), nome: '', raca: '', especie: '', genero: '', idade: '', peso: '', alergias: '' }]);
    } else {
      alert("Você só pode adicionar até 3 pets.");
    }
  };

  const handleRemovePet = (index: number) => {
    const updatedPets = pets.filter((_, petIndex) => petIndex !== index);
    setPets(updatedPets);
  };

  const handlePetChange = (index: number, key: string, value: string) => {
    const updatedPets = [...pets];
    updatedPets[index][key] = value;
    setPets(updatedPets);
  };
  return (
    <div className='flex justify-center text-left'>
      <Header />
      <SideBar />

      <form className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-[30px] px-10 py-8" onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-10'>
          <div className='mb-10'>
            <h1 className='flex justify-center font-bold text-2xl items-center'>Tutor <FaUser className='ml-5' /></h1>
          </div>
          <div className='flex gap-10'>
            <div> <LiaGripLinesVerticalSolid className='size-28' /> </div>
            <div>
              {/* Campos do Tutor */}
              <div className='flex gap-4'>
                <div className='flex flex-col'>
                  <label htmlFor="nome" className='text-lg font-semibold'>Nome do tutor:</label>
                  <Controller name="nome" control={control} render={({ field }) => <input {...field} type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Digite o nome completo' />} />
                  {errors.nome && <span className='text-red-500'>{errors.nome.message}</span>}
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="cpf" className='text-lg font-semibold'>CPF do tutor:</label>
                  <Controller name="cpf" control={control} render={({ field }) => <input {...field} type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='000.000.000-00' />} />
                  {errors.cpf && <span className='text-red-500'>{errors.cpf.message}</span>}
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex flex-col'>
                  <label htmlFor="telefone" className='text-lg font-semibold'>Telefone do tutor:</label>
                  <Controller name="telefone" control={control} render={({ field }) => <input {...field} type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='(00) 0 0000-0000' />} />
                  {errors.telefone && <span className='text-red-500'>{errors.telefone.message}</span>}
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="endereco" className='text-lg font-semibold'>Endereço do tutor:</label>
                  <Controller name="endereco" control={control} render={({ field }) => <input {...field} type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Rua, avenida, etc.' />} />
                  {errors.endereco && <span className='text-red-500'>{errors.endereco.message}</span>}
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex flex-col'>
                  <label htmlFor="email" className='text-lg font-semibold'>E-mail do tutor:</label>
                  <Controller name="email" control={control} render={({ field }) => <input {...field} type="email" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='exemplo@gmail.com' />} />
                  {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-10 '>
          <h1 className='flex justify-center font-bold text-2xl items-center'>Pet <IoPaw className='ml-5' /></h1>
        </div>

        <div className='flex gap-10 items-center'>
          <div> <PiLineVerticalLight className='size-20 ml-7' /> </div>
          {pets.map((pet, index) => (
            <div key={pet.id} className='flex-col gap-4 '>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold'>Nome do pet:</label>
                <input type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Digite o nome do pet' value={pet.nome} onChange={(e) => handlePetChange(index, 'nome', e.target.value)} />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold'>Raça do pet:</label>
                <input type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Digite a raça do pet' value={pet.raca} onChange={(e) => handlePetChange(index, 'raca', e.target.value)} />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold'>Espécie do pet:</label>
                <select className="input input-bordered h-3/4 pt-2 pb-2 text-lg" value={pet.especie} onChange={(e) => handlePetChange(index, 'especie', e.target.value)}>
                  <option value="">Selecione a espécie</option>
                  <option value="ave">Ave</option>
                  <option value="cao">Cão</option>
                  <option value="gato">Gato</option>
                  <option value="peixe">Peixe</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold'>Gênero/Sexo:</label>
                <select className="input input-bordered h-3/4 pt-2 pb-2 text-lg" value={pet.genero} onChange={(e) => handlePetChange(index, 'genero', e.target.value)}>
                  <option value="">Selecione o gênero</option>
                  <option value="macho">Macho</option>
                  <option value="femea">Fêmea</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold'>Idade:</label>
                <input type="number" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Digite a idade em anos' value={pet.idade} onChange={(e) => handlePetChange(index, 'idade', e.target.value)} />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold'>Peso (kg):</label>
                <input type="number" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Digite o peso' value={pet.peso} onChange={(e) => handlePetChange(index, 'peso', e.target.value)} />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg font-semibold'>Alergias:</label>
                <textarea className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Digite as alergias, se houver' value={pet.alergias} onChange={(e) => handlePetChange(index, 'alergias', e.target.value)} />
              </div>
              {pets.length > 1 && (
                <button type="button" className="btn bg-red-500 rounded-full px-1 text-white ml-6 mt-2" onClick={() => handleRemovePet(index)}>
                  <AiFillMinusCircle className='size-10' />
                </button>
              )}
            </div>
          ))}
          {pets.length < 3 && (
            <div className='flex justify-end mt-4'>
              <button type="button" className="btn bg-myrtleGreen rounded-full px-1 text-white ml-6" onClick={handleAddPet}>
                <AiFillPlusCircle className='size-10 ' />
              </button>
            </div>
          )}
        </div>

        <div className='flex justify-end'>
          <button className="btn hover:bg-myrtleGreen-light hover:scale-105 w-40 bg-myrtleGreen text-white text-base" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
