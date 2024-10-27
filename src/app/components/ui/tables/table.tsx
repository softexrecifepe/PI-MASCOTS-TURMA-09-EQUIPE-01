import { BtnWhiteBg } from "../btn/btnWhiteBg";

type TableProp = {
  tHeadOne: string;
  tHeadTwo: string;
  tHeadThree: string;
};

export function TableOne({ tHeadOne, tHeadTwo, tHeadThree }: TableProp) {
  const atendimentos = [
    {
      petName: "Totó de Oliveira",
      peso: "6kg",
      características: "preto e branco",
      especie: "gato",
      vetResponsavel: "Izabelle",
      status: "Aguardando",
    },
    {
      petName: "Miau da Silva",
      peso: "10kg",
      características: "preto",
      especie: "cachorro",
      vetResponsavel: "Camilla",
      status: "Aguardando",
    },
    {
      petName: "Baleia de Barros",
      peso: "10kg",
      características: "branco",
      especie: "cachorro",
      vetResponsavel: "Lucas",
      status: "Aguardando",
    },
  ];

  return (
    <div className="flex-grow">
      <table className="table-auto w-full h-full">
        <thead className="bg-lihtBlue-extralight">
          <tr>
            <th>{tHeadOne}</th>
            <th>{tHeadTwo}</th>
            <th>{tHeadThree}</th>
            <th></th>
          </tr>
        </thead>

        {atendimentos.map((item, index) => {
          return (
            <tbody key={index} className="roboto-light p-3">
              <tr>
                <td className="flex flex-col self-start py-5">
                  <span className="text-2xl pb-1">{item.petName}</span>
                  <span className="text-xs">
                    {`${item.especie}, ${item.características}, ${item.peso}`}
                  </span>
                </td>
                <td className="text-center">{item.vetResponsavel}</td>
                <td className="text-center">{item.status}</td>
                <td>
                  <BtnWhiteBg content="Ver Atendimento"></BtnWhiteBg>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
