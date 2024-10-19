export function SideBar() {
  return (
    <div className="flex flex-col fixed w-20 h-screen border-r border-r-darkCyan">
      <ul className="text-2xl flex flex-col gap-2 mt-20 items-center justify-center flex-grow text-darkCyan space-y-4">
        <li>
          <i className="fa fa-home" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa-solid fa-calendar" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa-regular fa-folder-open" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa-solid fa-suitcase-medical" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa-solid fa-file-medical" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa-solid fa-flask" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa-solid fa-prescription-bottle-medical" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa-solid fa-box-open" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa-solid fa-gear" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
  );
}
