import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";

export default function Inventory() {
  return (
    <>
      <SideBar />
      <Header />
      <div>
        <h1>Você está em Estoque</h1>;
      </div>
    </>
  );
}
