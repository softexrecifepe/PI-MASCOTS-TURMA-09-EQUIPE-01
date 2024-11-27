import { BtnColorBg } from "@/app/components/ui/btn/btnColorBg";
import Link from "next/link";

export default function ForgetPassWord() {
  return (
    <section className="pt-20 pl-20 pr-10">
      <h1>Esqueceu a senha</h1>
      <Link href={"/Login"}>
        <BtnColorBg content="Voltar para login" />
      </Link>
    </section>
  );
}
