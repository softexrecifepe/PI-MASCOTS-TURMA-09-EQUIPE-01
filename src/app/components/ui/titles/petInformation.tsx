import { Avatar } from "@mui/material";

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
        <Avatar
          alt="imagem do usuário"
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sx={{ width: 200, height: 200 }}
        />
      </div>
    </section>
  );
}
