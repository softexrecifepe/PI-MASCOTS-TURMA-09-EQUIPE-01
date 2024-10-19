import Link from "next/link";

export function Header() {
  return (
    <div>
      <header>
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between space-x-10 pt-5 pb-5 pl-10 pr-10 border-b border-b-darkCyan bg-white">
          <Link
            className={`text-darkCyan text-2xl font-bold roboto-regular`}
            href={"#"}
          >
            Mascot&#39;s
          </Link>

          <div
            className={`text-darkCyan items-center flex justify-between space-x-10 `}
          >
            <Link href={"#"} className={"transition duration-300 transform hover:scale-110"}>Suporte</Link>
            <Link href={"#"} className="flex items-center transition duration-300 transform hover:scale-110">
              <i className="fa fa-user mr-1 text-lg" aria-hidden="true"></i>
              UserTeste
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
