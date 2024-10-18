import { BtnColorBg } from "@/app/components/ui/btn/btnColorBg";
import Link from "next/link";

export default function CreateNewUser() {
  return (
    <section>
      <h1>login</h1>
      <Link href={"/Login/ForgetPassword"}>
        <BtnColorBg content="Criar novo usuário"></BtnColorBg>
      </Link>
    </section>
  );
}
