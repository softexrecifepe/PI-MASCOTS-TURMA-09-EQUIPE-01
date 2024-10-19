export function SideBar() {
  const iconsSideBar = [
    {
      icon: "fa fa-home",
      hoverColor: "hover:text-charcoal",
      url: ""
    },
    {
      icon: "fa-solid fa-calendar",
      hoverColor: "hover:text-lapisLazuli",
      url: "/"
    },
    {
      icon: "fa-regular fa-folder-open",
      hoverColor: "hover:text-gamboge",
      url: ""
    },
    {
      icon: "fa-solid fa-suitcase-medical",
      hoverColor: "hover:text-tuftsBlue",
      url: ""
    },
    {
      icon: "fa-solid fa-file-medical" ,
      hoverColor: "hover:text-auburn",
      url: ""
    },
    {
      icon: "fa-solid fa-flask",
      hoverColor: "hover:text-redCrayola",
      url: ""
    },
    {
      icon: "fa-solid fa-prescription-bottle-medical" ,
      hoverColor: "hover:text-grape",
      url: ""
    },
    {
      icon: "fa-solid fa-box-open",
      hoverColor: "hover:text-amber-700",
      url: ""
    },
    {
      icon: "fa-solid fa-gear",
      hoverColor: "hover:text-charcoal",
      url: ""
    }
  ]

  return (
    <section className="flex flex-col fixed w-20 h-screen border-r border-r-darkCyan">
      <ul className="text-2xl flex flex-col gap-2 mt-20 items-center justify-center flex-grow text-darkCyan space-y-4">
        {iconsSideBar.map((feat, index) => (
          <li key={index} className="transition duration-300 transform hover:scale-110">
            <a href={`${feat.url}`}><i className={`${feat.icon} ${feat.hoverColor} cursor-pointer`}></i></a>
          </li>
        ))}
      </ul>
    </section>
  );
}