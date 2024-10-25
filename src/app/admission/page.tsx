import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";

export default function Admission() {
  return (
    <>
      <SideBar />
      <Header />
      <div>
        <h1>Você está em internamento</h1>;
      </div>
    </>
  );
}
