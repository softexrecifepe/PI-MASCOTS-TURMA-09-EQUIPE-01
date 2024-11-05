import Image from "next/image";

export function PetInformation() {
  return (
    <section className="flex flex-row justify-between w-full">
      <div className="flex flex-col gap-4">
        <div className="text-2xl roboto-medium">
          Bellinha Barros{" "}
          <span className="text-xs text-gray-400">(Paciente)</span>
        </div>
        <div>
          <span className="text-sm text-gray-500">
            species, gender, fisical description, weight
          </span>
        </div>
        <div>
          <span className="px-4 bg-tuftsBlue text-white rounded-md text-sm">
            status na clínica
          </span>
        </div>
      </div>
      <div>
        <Image
          src={
            "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt="Imagem de perfil do pet"
          width={100}
          height={100}
          className="rounded-lg"
        ></Image>
      </div>
    </section>
  );
}
