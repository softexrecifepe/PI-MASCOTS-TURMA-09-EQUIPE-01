import Link from "next/link";
import { BtnColorBg } from "../components/ui/btn/btnColorBg";

export default function Login() {
  return (
    <section>
      <h1>login</h1>
      <Link href={"/Login/ForgetPassword"}>
        <BtnColorBg content="Recuperar Senha" />
      </Link>
    </section>
  );
}
