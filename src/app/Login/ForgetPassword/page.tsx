import { BtnColorBg } from "@/app/components/ui/btn/btnColorBg";
import Link from "next/link";

export default function ForgetPassWord() {
  return (
    <section>
      <h1>Esqueceu a senha</h1>
      <Link href={"/Login"}>
        <BtnColorBg content="Voltar para login" />
      </Link>
    </section>
  );
}
