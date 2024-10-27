import { BtnColorBg } from "../btn/btnColorBg";

export function FormAppointment() {
  const vets = [
    { vet: "Camilla" },
    { vet: "Izabelle" },
    { vet: "Lucas" },
    { vet: "Lauro" },
    { vet: "Augusto" },
  ];
  return (
    <>
      <form action="POST" className="flex flex-col gap-8">
        <div className="grid grid-flow-row-dense grid-cols-3">
          <div className="w-72">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="roboto-medium">
                Nº de prontuário
              </label>
              <div className="flex flex-row gap-3">
                <input
                  type="text"
                  className="border rounded-lg p-1"
                  placeholder="000000"
                />
                <div className=" justify-center items-center content-center">
                  <i className="fa-solid fa-magnifying-glass text-sm text-white bg-myrtleGreen p-2 rounded-lg"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="roboto-medium">
                Nome do Paciente
              </label>
              <input
                type="text"
                className="border rounded-lg p-1"
                placeholder="ex: Lorde"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="roboto-medium">
                Veterinário
              </label>
              <div className="flex flex-row gap-3">
                <select className="p-2 rounded-lg bg-white border">
                  <option disabled selected>
                    Selecione um veterinário
                  </option>
                  {vets.map((item, index) => (
                    <option key={index}>{item.vet}</option>
                  ))}
                </select>
                <BtnColorBg content="Atribuir Atendimento" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
