import Link from "next/link";

export function FooterHomePage() {
  return (
    <footer>
      <div className="flex flex-col bg-black text-white justify-center items-center">
        <div className="flex flex-row gap-10 justify-center items-center h-52 ">
          <div>
            <span className="text-white roboto-regular border border-white p-3 text-lg font-bold ml-10">
              <Link href={"/"}>Mascot&#39;s</Link>
            </span>
          </div>
          <div>
            <ul className="list-none roboto-regular flex flex-row gap-10">
              <li className="p-1 hover:text-darkCyan transition-colors duration-300">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="p-1 hover:text-darkCyan transition-colors duration-300">
                <a href="https://github.com/softexrecifepe/PI-MASCOTS-TURMA-09-EQUIPE-01">
                  GitHub do projeto
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mb-10 text-xs">
          <h5 className="text-gray-400 hover:text-white transition-colors duration-300">
            <a href="https://www.linkedin.com/company/softexpernambuco/">
              Softex Pernambuco 2024
            </a>
          </h5>
        </div>
      </div>
    </footer>
  );
}
