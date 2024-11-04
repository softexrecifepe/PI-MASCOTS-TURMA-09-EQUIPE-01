"use client";

import { Header } from '@/app/components/navigationScreen/header/header';
import { SideBar } from '@/app/components/navigationScreen/sidebar/sidebar';
import { BtnColorBg } from '@/app/components/ui/btn/btnColorBg';
import { BtnRecover } from '@/app/components/ui/btn/BtnRecover';
import React, { useState } from 'react';
import { Tutor } from './tutor'; // Certifique-se de importar a classe Tutor corretamente
import { BreadCrumb } from '@/app/components/ui/breadcrumbs/breadcrumb';

const RegisterForm = () => {
  const [tutorName, setTutorName] = useState('');
  const [tutorCpf, setTutorCpf] = useState('');
  const [tutorTelephone, setTutorTelephone] = useState('');
  const [tutorAddress, setTutorAddress] = useState('');
  const [tutorEmail, setTutorEmail] = useState('');

  const [errors, setErrors] = useState({
    tutorName: false,
    tutorCpf: false,
    tutorTelephone: false,
    tutorAddress: false,
    tutorEmail: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const newErrors = {
      tutorName: tutorName.trim() === '',
      tutorCpf: tutorCpf.trim() === '',
      tutorTelephone: tutorTelephone.trim() === '',
      tutorAddress: tutorAddress.trim() === '',
      tutorEmail: tutorEmail.trim() === ''
    };
    
    setErrors(newErrors);

    const noErrors = !Object.values(newErrors).some(error => error);

    if (noErrors) {
      const newTutor = new Tutor(tutorName, tutorCpf, tutorTelephone, tutorEmail, tutorAddress);
      alert("Usuário cadastrado com sucesso!")
      console.log('Dados do Tutor:', newTutor); 

      // Reset inputs
      setTutorName('');
      setTutorCpf('');
      setTutorTelephone('');
      setTutorAddress('');
      setTutorEmail('');
    }
  };

  return (
    <div className='flex justify-center text-left '>
      <Header />
      <SideBar />
      
      <main className='flex justify-center flex-col fixed items-center top-24 left-0 text-start w-full h-full'>
        <form className='flex justify-center flex-col gap-5 input-lg' onSubmit={handleSubmit}>
          <div className='mb-10'>
            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="tutorName" className='text-lg font-semibold'>Nome do tutor:</label>
                <input type="text" name='tutorName' className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Digite o nome completo' value={tutorName} onChange={(e) => setTutorName(e.target.value)} />
                {errors.tutorName && <span className='text-red-500'>Campo obrigatório</span>}
              </div>

              <div className='flex flex-col'>
                <label htmlFor="tutorCpf" className='text-lg font-semibold'>CPF do tutor:</label>
                <input type="text" name='tutorCpf' className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='000.000.000-00' value={tutorCpf} onChange={(e) => setTutorCpf(e.target.value)} />
                {errors.tutorCpf && <span className='text-red-500'>Campo obrigatório</span>}
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="tutorTelephone" className='text-lg font-semibold'>Telefone do tutor:</label>
                <input type="text" name='tutorTelephone' className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='(00) 0 0000-0000' value={tutorTelephone} onChange={(e) => setTutorTelephone(e.target.value)} />
                {errors.tutorTelephone && <span className='text-red-500'>Campo obrigatório</span>}
              </div>
              <div className='flex flex-col'>
                <label htmlFor="tutorAddress" className='text-lg font-semibold'>Endereço do tutor:</label>
                <input type="text" name='tutorAddress' className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='Rua, avenida, etc.' value={tutorAddress} onChange={(e) => setTutorAddress(e.target.value)} />
                {errors.tutorAddress && <span className='text-red-500'>Campo obrigatório</span>}
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="tutorEmail" className='text-lg font-semibold'>E-mail do tutor:</label>
                <input type="email" name='tutorEmail' className="input input-bordered h-3/4 pt-2 pb-2 text-lg" placeholder='exemplo@gmail.com' value={tutorEmail} onChange={(e) => setTutorEmail(e.target.value)} />
                {errors.tutorEmail && <span className='text-red-500'>Campo obrigatório</span>}
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
