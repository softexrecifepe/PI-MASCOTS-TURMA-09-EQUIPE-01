"use client";

import { Header } from '@/app/components/navigationScreen/header/header';
import { SideBar } from '@/app/components/navigationScreen/sidebar/sidebar';
import React from 'react';
import { Tutor } from './tutor'; 
import { BreadCrumb } from '@/app/components/ui/breadcrumbs/breadcrumb';
import { tutorSchema, TutorData } from '@/app/schemas/tutorSchema'; 
import { zodResolver } from '@hookform/resolvers/zod'; 
import { useForm, Controller } from 'react-hook-form';

const RegisterForm = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<TutorData>({
    resolver: zodResolver(tutorSchema),
  });

  const onSubmit = async (data: TutorData) => {
    const response = await fetch('http://localhost:4000/tutores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Usuário cadastrado com sucesso!");
      reset();
    } else {
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className='flex justify-center text-left'>
      <Header />
      <SideBar />

      <main className='flex justify-center flex-col fixed items-center top-24 left-0 text-start w-full h-full'>
        <form className='flex justify-center flex-col gap-5 input-lg' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-10'>
            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="nome" className='text-lg font-semibold'>Nome do tutor:</label>
                <Controller
                  name="nome"
                  control={control}
                  render={({ field }) => <input {...field} type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Digite o nome completo' />}
                />
                {errors.nome && <span className='text-red-500'>{errors.nome.message}</span>}
              </div>

              <div className='flex flex-col'>
                <label htmlFor="cpf" className='text-lg font-semibold'>CPF do tutor:</label>
                <Controller
                  name="cpf"
                  control={control}
                  render={({ field }) => <input {...field} type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='000.000.000-00' />}
                />
                {errors.cpf && <span className='text-red-500'>{errors.cpf.message}</span>}
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="telefone" className='text-lg font-semibold'>Telefone do tutor:</label>
                <Controller
                  name="telefone"
                  control={control}
                  render={({ field }) => <input {...field} type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='(00) 0 0000-0000' />}
                />
                {errors.telefone && <span className='text-red-500'>{errors.telefone.message}</span>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor="endereco" className='text-lg font-semibold'>Endereço do tutor:</label>
                <Controller
                  name="endereco"
                  control={control}
                  render={({ field }) => <input {...field} type="text" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Rua, avenida, etc.' />}
                />
                {errors.endereco && <span className='text-red-500'>{errors.endereco.message}</span>}
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="email" className='text-lg font-semibold'>E-mail do tutor:</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <input {...field} type="email" className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='exemplo@gmail.com' />}
                />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
              </div>
            </div>
          </div>

          <button className="btn hover:bg-myrtleGreen-light hover:scale-105 w-40 bg-myrtleGreen text-white text-base" type="submit">
            Salvar
          </button>
        </form>
      </main>
    </div>
  );
};

export default RegisterForm;
