import Link from "next/link";

export function SideBar() {
  const iconsSideBar = [
    {
      icon: "fa fa-home",
      tooltip: "tooltip tooltip-right tooltip-success roboto-regular",
      hoverColor: "hover:text-mint",
      link: "/dashboard",
      datatip: "Home",
    },
    {
      icon: "fa-solid fa-calendar",
      tooltip: "tooltip tooltip-right tooltip-success roboto-regular",
      hoverColor: "hover:text-lapisLazuli",
      link: "/schedule",
      datatip: "Agenda",
    },
    {
      icon: "fa-regular fa-folder-open",
      tooltip: "tooltip tooltip-right tooltip-success roboto-regular",
      hoverColor: "hover:text-gamboge",
      link: "/registers",
      datatip: "Gerenciar Cadastros",
    },
    {
      icon: "fa-solid fa-suitcase-medical",
      tooltip: "tooltip tooltip-right tooltip-success roboto-regular",
      hoverColor: "hover:text-tuftsBlue",
      link: "/medicalAppointment",
      datatip: "Atendimento",
    },
    {
      icon: "fa-solid fa-file-medical",
      tooltip: "tooltip tooltip-right tooltip-success roboto-regular",
      hoverColor: "hover:text-auburn",
      link: "/admission",
      datatip: "Internamento",
    },
    {
      icon: "fa-solid fa-flask",
      tooltip: "tooltip tooltip-right tooltip-success roboto-regular",
      hoverColor: "hover:text-redCrayola",
      link: "#",
      datatip: "Exames",
    },
    {
      icon: "fa-solid fa-prescription-bottle-medical",
      tooltip: "tooltip tooltip-right tooltip-success roboto-regular",
      hoverColor: "hover:text-grape",
      link: "#",
      datatip: "Prescrições",
    },
    {
      icon: "fa-solid fa-box-open",
      tooltip: "tooltip tooltip-right tooltip-success roboto-regular",
      hoverColor: "hover:text-amber-700",
      link: "/inventory",
      datatip: "Estoque",
    },
    {
      icon: "fa-solid fa-gear",
      tooltip: "tooltip tooltip-right tooltip-success roboto-regular",
      hoverColor: "hover:text-charcoal",
      link: "#",
      datatip: "Configurações",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-20 h-screen bg-white border-r border-r-darkCyan z-40">
      <ul className="text-2xl flex flex-col gap-2 mt-28 items-center justify-center flex-grow text-darkCyan space-y-4">
        {iconsSideBar.map((feat, index) => (
          <li
            key={index}
            className="transition duration-300 transform hover:scale-110"
          >
            <Link
              href={feat.link}
              className={`${feat.tooltip}`}
              data-tip={feat.datatip}
            >
              <i
                className={`${feat.icon} ${feat.hoverColor} cursor-pointer`}
                data-tip={feat.datatip}
              ></i>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
