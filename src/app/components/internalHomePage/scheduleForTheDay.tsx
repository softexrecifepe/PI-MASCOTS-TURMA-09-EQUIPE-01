import { CardTypeSchedule } from "@/app/components/ui/card/cardTypeSchedule";

export function Schedule(){
  const consultasDia = [
    {
      icon: "fa-solid fa-calendar text-base",
      nome: "Doguinho",
      schedule: "12h",
      hoverColor: "tex-blue"
    },
    {
      icon: "fa-solid fa-calendar text-base",
      nome: "Gatinho",
      schedule: "13h",
      hoverColor: "tex-blue"
    },
  ]

  return (
    <>
      <div className="pl-32">
        <div className="flex items-center pb-5">
          <i
            className="pl-4 pr-4 fa-solid fa-calendar text-lapisLazuli text-5xl"
            aria-hidden="true"
          ></i>
          <a href="#" className="flex-1 roboto-light text-2xl flex items-center">
            Agenda do Dia
          </a>
        </div>

        <div className="flex flex-row gap-4 mb-20">
          {/* criar um for para renderizar o grid */}
        {consultasDia.map((feat, index) => (
          <CardTypeSchedule
            key={index}
            icon={feat.icon} 
            name={feat.nome}
            schedule ={feat.schedule }
            hoverColor={feat.hoverColor}
          />
        ))}
        </div>
      </div>
    </>
  );
}