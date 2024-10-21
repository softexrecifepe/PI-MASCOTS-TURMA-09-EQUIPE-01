import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { Header } from '../components/navigationScreen/header/header';
import { SideBar } from '../components/navigationScreen/sidebar/sidebar';

const Agenda = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-x-hidden overflow-y-auto  p-4 ml-20 mt-16">
          <div className="container mx-auto">
            <Link href="/dashboard" className="flex items-center text-blue-600 hover:underline mb-4">
              <FaArrowLeft className="mr-2 text-gray-900" />
              <span className='text-green-600'>Voltar para a dashboard</span>
            </Link>

            <div className="flex items-center mb-6">
              <FaCalendarAlt className="text-3xl text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold">Agenda Diária</h1>
            </div>

            <div className="flex items-center justify-between mb-6 w-[450px]">
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Dia</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Mês</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Ano</button>
              </div>
              <div className="flex items-center space-x-4">
                <button><FaArrowLeft /></button>
                <span>{currentDate}</span>
                <button><FaArrowRight /></button>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-lg w-[400px]">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-2 text-left">Usuário 1</th>
                    <th className="border-b p-2 text-left text-sm text-gray-600 text-green-600">Veterinário</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Aqui você pode adicionar linhas da tabela conforme necessário */}
                  <tr>
                    <td className="border-b p-2" colSpan={2}>&nbsp;</td>
                  </tr>
									<tr>
                    <td className="border-b p-2" colSpan={2}>&nbsp;</td>
                  </tr>
									<tr>
                    <td className="border-b p-2" colSpan={2}>&nbsp;</td>
                  </tr>
									<tr>
                    <td className="border-b p-2" colSpan={2}>&nbsp;</td>
                  </tr>
									<tr>
                    <td className="border-b p-2" colSpan={2}>&nbsp;</td>
                  </tr>
									<tr>
                    <td className="border-b p-2" colSpan={2}>&nbsp;</td>
                  </tr>
									<tr>
                    <td className="border-b p-2" colSpan={2}>&nbsp;</td>
                  </tr>
									<tr>
                    <td className="border-b p-2" colSpan={2}>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Agenda;