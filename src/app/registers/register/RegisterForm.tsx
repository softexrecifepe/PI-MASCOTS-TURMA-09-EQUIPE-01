import React from 'react'

const RegisterForm = () => {
  return (
    <main>
      <form>
          <div className='flex'>
            <div>
            <label htmlFor="name">Nome do tutor:</label>
            <input type="text" />
            </div>

            <div>
            <label htmlFor="cpf">CPF do tutor:</label>
            <input type="text"/>
            </div>
          </div>


          <div>
            <div>
          <label htmlFor="telephone">Telefone do tutor:</label>
          <input type="text"/>
          </div>
          <div>
            <label htmlFor="enedereço">Endereço do tutor:</label>
            <input type="text"/>
            </div>
          </div>


          <div>
          <div>
            <label htmlFor="email">E-mail do tutor:</label>
            <input type="email"/>
            </div>
            <div>
            <label htmlFor="telephone">Telefone do tutor:</label>
            <input type="text"/>
            </div>
          </div>


         
      </form>



    </main>
  )
}

export default RegisterForm