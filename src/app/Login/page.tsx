import Link from "next/link";
import { BtnColorBg } from "../components/ui/btn/btnColorBg";
import { BtnWhiteBg } from "../components/ui/btn/btnWhiteBg";

export default function Login() {
  return (
    <div className="pt-20 pl-20 pr-10">
      <h1>Login</h1>
      <Link href={"../Dashboard"}>
        <BtnColorBg content="Entrar" />
      </Link>
      <Link href={"/Login/ForgetPassword"}>
        <BtnWhiteBg content="Esqueci a senha" />
      </Link>
    </div>
  );
}
