import { Appointments } from "@/app/components/internalHomePage/appointments";
import { Schedule } from "@/app/components/internalHomePage/scheduleForTheDay";
import { Header } from "@/app/components/navigationScreen/header/header";
import { SideBar } from "@/app/components/navigationScreen/sidebar/sidebar";
import Patient from "../components/internalHomePage/patient";

export default function HomePage() {
  return (
    <>
      <Header />
      <SideBar />
      <main>
        <div className="pt-24 pl-32">
          <h1 className="pb-12 text-3xl roboto-light">Painel Inicial</h1>
        </div>
        <Schedule />
        <Appointments />
        <Patient />
      </main>
    </>
  );
}
