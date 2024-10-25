"use client";
import img1 from "../assets/images/img1.jpg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BtnRecover } from "./ui/btn/BtnRecover";

export default function LoginForm() {
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
    <section className="relative flex flex-row w-full">
      {/* div para imagem */}
      <div className="flex-[3]">
        <Image
          src={img1}
          alt="imagem de fundo"
          className="h-screen object-cover w-full"
        />
      </div>
      {/* div para o espaço com a logo */}
      <div className="p-10 flex-[2] text-end">
        <h1 className="quicksand-medium text-darkCyan text-6xl">
          Mascot&#39;s
        </h1>
      </div>
      {/* div para o formulário que fica sobreposto */}
      <div className="absolute right-80 top-32 bg-lihtBlue-extralight h-[450px] w-[350px] z-10 shadow-2xl rounded-lg">
        <form
          onSubmit={login}
          className="p-10 w-full max-w-full h-full flex flex-col gap-2"
        >
          <h1 className="text-black roboto-regular self-start text-2xl mb-3">
            Entrar no Mascot&#39;s
          </h1>
          <div className="flex flex-col gap-4 mb-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-black roboto-regular text-sm"
              >
                Login
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-success w-full h-3/4 pt-2 pb-2 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-black text-sm roboto-regular"
              >
                Senha
              </label>
              <input
                name="password"
                type="password"
                placeholder="Senha"
                className="input input-success w-full h-3/4 pt-2 pb-2 text-sm "
              />
            </div>
          </div>

          <button
            className="btn hover:bg-myrtleGreen-light w-full bg-myrtleGreen text-white"
            type="submit"
          >
            Entrar no Mascot&#39;s
          </button>
          {error === "CredentialsSign" && (
            <div className="text-red-500">Erro no Login</div>
          )}
          <Link href={"/Login/ForgetPassword"} className="self-center mt-10">
            <BtnRecover content="Recuperar Senha" />
          </Link>
        </form>
      </div>
    </section>
  );
}

// const LoginForm = () => {
//   const searchParams = useSearchParams();

//   const error = searchParams.get("error");

//   async function login(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const data = {
//       email: formData.get("email"),
//       password: formData.get("password"),
//     };
//     signIn("credentials", {
//       ...data,
//       callbackUrl: "/Dashboard",
//     });
//   }

//   return (
//     <main className="flex items-center m-0 h-full  ">
//       <form
//         onSubmit={login}
//         className="bg-white p-12 w-full max-w-full h-full flex justify-center items-center flex-col gap-2"
//       >
//         <h1 className="text-black text-3xl mb-3">Entrar no Mascot&#39;´s</h1>
//         <div className="gap-2">
//           <label htmlFor="email" className="text-black mb-5">
//             Login
//           </label>
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             className="input input-success w-full"
//           />
//         </div>

//         <div className="gap-2">
//           <label htmlFor="password" className="text-black mb-5">
//             Senha
//           </label>
//           <input
//             name="password"
//             type="password"
//             placeholder="Senha"
//             className="input input-success w-full "
//           />
//         </div>

//         <button
//           className="btn hover:bg-myrtleGreen-light w-full bg-myrtleGreen text-white"
//           type="submit"
//         >
//           Entrar no Mascot&#39;´s
//         </button>
//         {error === "CredentialsSign" && (
//           <div className="text-red-500">Erro no Login</div>
//         )}
//         <Link href={"/Login/ForgetPassword"}>
//           <BtnRecover content="Recuperar Senha" />
//         </Link>
//       </form>
//       <section>
//         <Image
//           src={img1}
//           alt="imagem de fundo"
//           className="object-cover w-full h-full max-h-full max-w-full"
//         />
//       </section>
//     </main>
//   );
// };

// export default LoginForm;
