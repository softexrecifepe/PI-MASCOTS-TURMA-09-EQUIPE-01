import Link from "next/link";

export function SideBar() {
  const iconsSideBar = [
    {
      icon: "fa fa-home",
      hoverColor: "hover:text-charcoal",
      link: "/"
    },
    {
      icon: "fa-solid fa-calendar",
      hoverColor: "hover:text-lapisLazuli",
      link: "/agenda"
    },
    {
      icon: "fa-regular fa-folder-open",
      hoverColor: "hover:text-gamboge",
      link: "/arquivos"
    },
    {
      icon: "fa-solid fa-suitcase-medical",
      hoverColor: "hover:text-tuftsBlue",
      link: "/atendimento"
    },
    {
      icon: "fa-solid fa-file-medical",
      hoverColor: "hover:text-auburn",
      link: "/prontuarios"
    },
    {
      icon: "fa-solid fa-flask",
      hoverColor: "hover:text-redCrayola",
      link: "/exames"
    },
    {
      icon: "fa-solid fa-prescription-bottle-medical",
      hoverColor: "hover:text-grape",
      link: "/medicamentos"
    },
    {
      icon: "fa-solid fa-box-open",
      hoverColor: "hover:text-amber-700",
      link: "/estoque"
    },
    {
      icon: "fa-solid fa-gear",
      hoverColor: "hover:text-charcoal",
      link: "/configuracoes"
    }
  ]

	return (
    <aside className="fixed left-0 top-0 w-20 h-screen bg-white border-r border-r-darkCyan z-40">
      <ul className="text-2xl flex flex-col gap-2 mt-20 items-center justify-center flex-grow text-darkCyan space-y-4">
        {iconsSideBar.map((feat, index) => (
          <li key={index} className="transition duration-300 transform hover:scale-110">
            <Link href={feat.link} className={`${feat.hoverColor} cursor-pointer`}>
              <i className={feat.icon}></i>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}