import { Header } from '@/app/components/navigationScreen/header/header'
import { SideBar } from '@/app/components/navigationScreen/sidebar/sidebar'
import { BtnColorBg } from '@/app/components/ui/btn/btnColorBg'
import { BtnRecover } from '@/app/components/ui/btn/BtnRecover'
import React from 'react'

const RegisterForm = () => {
  return (
    <div className='flex justify-center text-left'>
      <Header />
      <SideBar />

      <h1 className='flex justify-start text-start fixed items-center m-60 text-4xl left-36'>Cadastro</h1>


      <main className='flex justify-center flex-col fixed items-center top-24 left-0 text-start w-full h-full'>


        <form className=' flex justify-center left-0 flex-col gap-5 input-lg'>

          <div className='mb-10'>
            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-lg font-semibold'>Nome do tutor:</label>
                <input type="text" className="input input-bordered  h-3/4 pt-2 pb-2 text-lg " placeholder='Digite o nome completo' />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="cpf" className='text-lg font-semibold'>CPF do tutor:</label>
                <input type="text" className="input input-bordered  h-3/4 pt-2 pb-2 text-lg " placeholder='000.000.000-00' />
              </div>
            </div>


            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="telephone" className='text-lg font-semibold'>Telefone do tutor:</label>
                <input type="text" className="input input-bordered  h-3/4 pt-2 pb-2 text-lg " placeholder='(00) 0 0000-0000' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="enedereço" className='text-lg font-semibold'>Endereço do tutor:</label>
                <input type="text" className="input input-bordered  h-3/4 pt-2 pb-2 text-lg " placeholder='Rua,avenida,etc.' />
              </div>
            </div>


            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="email" className='text-lg font-semibold'>E-mail do tutor:</label>
                <input type="email"  name="email"  className="input input-bordered  h-3/4 pt-2 pb-2 text-lg " placeholder='exemplo@gmail.com' />
              </div>

            </div>
          </div>


          <button
            className="btn hover:bg-myrtleGreen-light hover:scale-105  w-40  bg-myrtleGreen text-white text-base "
            type="submit"
          >
            Salvar
          </button>
        </form>



      </main>
    </div>
  )
}

export default RegisterForm