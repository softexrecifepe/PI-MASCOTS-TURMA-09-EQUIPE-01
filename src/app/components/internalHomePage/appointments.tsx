import { CardTypeAppointments } from "../ui/card/cardTypeAppointments"

export function Appointments(){
  const appointments = [
    {
      name: "Doguinho",
      description: "Doguinho muito sonolento Doguinho muito sonolentoDoguinho muito sonolento",
      hoverColor: "tex-blue"
    },
    {
      name: "Gatinho",
      description: "13h",
      hoverColor: "tex-blue"
    },
  ]

  return (
    <>
      <div className="pl-32">
        <div className="flex items-center pb-5">
          <i
            className="pl-4 pr-4 fa-solid fa-suitcase-medical text-lapisLazuli text-5xl"
            aria-hidden="true"
          ></i>
          <a href="#" className="flex-1 roboto-light text-2xl flex items-center">
            Atendimentos
          </a>
        </div>

        <div className="flex flex-row gap-4 mb-20">
          {/* criar um for para renderizar o grid */}
        {appointments.map((feat, index) => (
          <CardTypeAppointments
            key={index}
            name={feat.name}
            description ={feat.description }
            hoverColor={feat.hoverColor}
          />
        ))}
        </div>
      </div>
    </>
  );
}