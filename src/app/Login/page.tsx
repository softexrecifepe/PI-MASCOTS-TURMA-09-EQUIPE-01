import Link from "next/link";
import { BtnColorBg } from "../components/ui/btn/btnColorBg";
import { Header } from "../components/navigationScreen/header/header";
import { SideBar } from "../components/navigationScreen/sidebar/sidebar";

export default function Login() {
  return (
    <>
      <SideBar /> 
      <Header />
      <div className="pt-20 pl-20 pr-10">
        <h1>Login</h1>
        <Link href={"/Login/ForgetPassword"}>
          <BtnColorBg content="Recuperar Senha" />
        </Link>
      </div>
    </>
  );
}
