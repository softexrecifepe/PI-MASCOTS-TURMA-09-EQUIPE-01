import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-b-darkCyan">
      <div className="flex justify-between items-center px-10 py-5 ml-20">
        <Link
          className="text-darkCyan text-2xl font-bold quicksand-medium"
          href={"/dashboard"}
        >
          Mascot&#39;s
        </Link>

        <div className="text-darkCyan flex items-center space-x-10">
          <Link
            href={"#"}
            className="transition duration-300 transform hover:scale-110"
          >
            Suporte
          </Link>
          <Link
            href={"#"}
            className="flex items-center transition duration-300 transform hover:scale-110"
          >
            <i className="fa fa-user mr-1 text-lg" aria-hidden="true"></i>
            UserTeste
          </Link>
        </div>
      </div>
    </header>
  );
}
