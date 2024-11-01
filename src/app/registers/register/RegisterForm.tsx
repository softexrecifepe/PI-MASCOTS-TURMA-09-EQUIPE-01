import { Header } from '@/app/components/navigationScreen/header/header'
import { SideBar } from '@/app/components/navigationScreen/sidebar/sidebar'
import { BtnRecover } from '@/app/components/ui/btn/BtnRecover'
import React from 'react'

const RegisterForm = () => {
  return (
    <div className='flex justify-center text-left'>
      <Header/>
      <SideBar/>
      
      <h1 className='flex justify-start text-start fixed items-center m-64 text-4xl left-0'>Cadastro</h1>
      <main className='flex justify-center flex-col fixed items-center top-36 left-0 text-start w-full h-full'>
      <form className=' flex justify-center left-0 flex-col gap-5 input-lg'>
          <div className='flex gap-4'>
            <div className='flex flex-col'>
            <label htmlFor="name" className='text-xl font-semibold'>Nome do tutor:</label>
            <input type="text" className="input input-bordered  h-3/4 pt-2 pb-2 text-lg "  placeholder='Digite o nome completo'  />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="cpf" className='text-xl font-semibold'>CPF do tutor:</label>
            <input type="text" className="input input-bordered  h-3/4 pt-2 pb-2 text-lg " placeholder='000.000.000-00'/>
            </div>
          </div>


          <div className='flex gap-4'>
            <div className='flex flex-col'>
          <label htmlFor="telephone" className='text-xl font-semibold'>Telefone do tutor:</label>
          <input type="text" className="input input-bordered  h-3/4 pt-2 pb-2 text-lg "   placeholder='(00) 0 0000-0000'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="enedereço" className='text-xl font-semibold'>Endereço do tutor:</label>
            <input type="text" className="input input-bordered  h-3/4 pt-2 pb-2 text-lg " placeholder='Rua,avenida,etc.'  />
            </div>
          </div>


          <div className='flex gap-4'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-xl font-semibold'>E-mail do tutor:</label>
            <input type="email" className="input input-bordered  h-3/4 pt-2 pb-2 text-lg "placeholder='exemplo@gmail.com'/>
            </div>
           
          </div>


         
      </form>



    </main>
    </div>
  )
}

export default RegisterForm