export function SideBar() {
  const iconsSideBar = [
    {
      icon: "fa fa-home",
      hoverColor: "hover:text-charcoal"
    },
    {
      icon: "fa-solid fa-calendar",
      hoverColor: "hover:text-lapisLazuli"
    },
    {
      icon: "fa-regular fa-folder-open",
      hoverColor: "hover:text-gamboge"
    },
    {
      icon: "fa-solid fa-suitcase-medical",
      hoverColor: "hover:text-tuftsBlue"
    },
    {
      icon: "fa-solid fa-file-medical" ,
      hoverColor: "hover:text-auburn"
    },
    {
      icon: "fa-solid fa-flask",
      hoverColor: "hover:text-redCrayola"
    },
    {
      icon: "fa-solid fa-prescription-bottle-medical" ,
      hoverColor: "hover:text-grape"
    },
    {
      icon: "fa-solid fa-box-open",
      hoverColor: "hover:text-amber-700"
    },
    {
      icon: "fa-solid fa-gear",
      hoverColor: "hover:text-charcoal"
    }
  ]

  return (
    <section className="flex flex-col fixed w-20 h-screen border-r border-r-darkCyan">
      <ul className="text-2xl flex flex-col gap-2 mt-20 items-center justify-center flex-grow text-darkCyan space-y-4">
        {iconsSideBar.map((feat, index) => (
          <li key={index} className="transition duration-300 transform hover:scale-110">
            <i className={`${feat.icon} ${feat.hoverColor} cursor-pointer`}></i>
          </li>
        ))}
      </ul>
    </section>
  );
}