import { BtnColorBg } from "@/app/components/ui/btn/btnColorBg";
import Link from "next/link";

export default function CreateNewUser() {
  return (
    <section>
      <h1>Login</h1>
      <Link href="/Login/ForgetPassword">
        <BtnColorBg content="Criar novo usuário" />
      </Link>
    </section>
  );
}
  