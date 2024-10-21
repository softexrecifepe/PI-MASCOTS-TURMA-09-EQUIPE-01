"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import img1 from "../assets/images/img1.jpg";
import { BtnRecover } from "./ui/btn/BtnRecover";

const LoginForm = () => {
  const searchParams = useSearchParams();

  const error = searchParams.get("error");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <main className="flex items-center m-0 h-full  ">
      <form
        onSubmit={login}
        className="bg-white p-12 w-full max-w-full h-full flex justify-center items-center flex-col gap-2"
      >
        <h1 className="text-black text-3xl mb-3">Entrar no Mascot&#39;´s</h1>
        <div className="gap-2">
          <label htmlFor="email" className="text-black mb-5">
            Login
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-success w-full"
          />
        </div>

        <div className="gap-2">
          <label htmlFor="password" className="text-black mb-5">
            Senha
          </label>
          <input
            name="password"
            type="password"
            placeholder="Senha"
            className="input input-success w-full "
          />
        </div>

        <button
          className="btn hover:bg-myrtleGreen-light w-full bg-myrtleGreen text-white"
          type="submit"
        >
          Entrar no Mascot&#39;´s
        </button>
        {error === "CredentialsSign" && (
          <div className="text-red-500">Erro no Login</div>
        )}
        <Link href={"/Login/ForgetPassword"}>
          <BtnRecover content="Recuperar Senha" />
        </Link>
      </form>
      <section>
        <Image
          src={img1}
          alt="imagem de fundo"
          className="object-cover w-full h-full max-h-full max-w-full"
        />
      </section>
    </main>
  );
};

export default LoginForm;
