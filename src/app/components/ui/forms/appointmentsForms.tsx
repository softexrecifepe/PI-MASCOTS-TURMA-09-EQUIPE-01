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
      <form className="flex flex-col gap-8 border shadow-md py-5 px-5 rounded-lg">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="roboto-medium">
              Nº de prontuário
            </label>
            <div className="flex flex-row gap-3">
              <input
                type="text"
                className="border rounded-lg text-sm p-1 roboto-light"
                placeholder="PRT-00000"
              />

              <button
                type="submit"
                className="justify-center items-center content-center"
              >
                <i className="fa-solid fa-magnifying-glass text-sm text-white bg-myrtleGreen p-2 rounded-lg"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="roboto-medium">
              Nome do Paciente
            </label>
            <input
              type="text"
              placeholder="Nome do Pet"
              className="border rounded-lg text-sm p-1 w-96 roboto-light"
              disabled
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="roboto-medium">
              Motivo do Atendimento
            </label>
            <input
              type="text"
              placeholder="Descreva o motivo do atendimento"
              className="border rounded-lg text-sm p-1 w-96 roboto-light"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="roboto-medium">
              Veterinário
            </label>
            <div className="flex flex-row gap-3">
              <select
                className="p-2 rounded-lg bg-white border text-sm"
                defaultValue=""
              >
                <option disabled value={""}>
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
      </form>
    </>
  );
}
