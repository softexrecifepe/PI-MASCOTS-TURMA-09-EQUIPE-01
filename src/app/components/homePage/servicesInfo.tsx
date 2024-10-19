import { CardTypeOne } from "../ui/card/cardTypeOne";

export function ServicesInfo() {
  const features = [
    {
      iconClass: "fa-solid fa-calendar",
      title: "Agenda",
      description:
        "Repellendus consectetur nisi magni eaque libero nam debitis cum dicta.",
      hoverColor: "hover:text-lapisLazuli",
    },
    {
      iconClass: "fa-regular fa-folder-open",
      title: "Cadastro",
      description:
        "Repellendus consectetur nisi magni eaque libero nam debitis cum dicta.",
      hoverColor: "hover:text-gamboge",
    },
    {
      iconClass: "fa-solid fa-suitcase-medical",
      title: "Atendimento",
      description:
        "Repellendus consectetur nisi magni eaque libero nam debitis cum dicta.",
      hoverColor: "hover:text-tuftsBlue",
    },
    {
      iconClass: "fa-solid fa-file-medical",
      title: "Internamento",
      description:
        "Repellendus consectetur nisi magni eaque libero nam debitis cum dicta.",
      hoverColor: "hover:text-auburn",
    },
    {
      iconClass: "fa-solid fa-flask",
      title: "Exames",
      description:
        "Repellendus consectetur nisi magni eaque libero nam debitis cum dicta.",
      hoverColor: "hover:text-redCrayola",
    },
    {
      iconClass: "fa-solid fa-prescription-bottle-medical",
      title: "Prescrição",
      description:
        "Repellendus consectetur nisi magni eaque libero nam debitis cum dicta.",
      hoverColor: "hover:text-grape",
    },
    {
      iconClass: "fa-solid fa-box-open",
      title: "Estoque",
      description:
        "Repellendus consectetur nisi magni eaque libero nam debitis cum dicta.",
      hoverColor: "hover:text-amber-700",
    },
    {
      iconClass: "fa-solid fa-gear",
      title: "Configurações",
      description:
        "Repellendus consectetur nisi magni eaque libero nam debitis cum dicta.",
      hoverColor: "hover:text-charcoal",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-7 pt-8 pb-8 pl-24 pr-24">
      <div>
        <h6
          id="our-services"
          className="text-myrtleGreen-light roboto-light border-b-2 border-darkCyan pb-2 scroll-mt-32"
        >
          Funcionalidades
        </h6>
      </div>
      <div>
        <h2 className="text-4xl roboto-medium">Funcionalidades do Mascot&#39;s</h2>
      </div>
      <div>
        <h4 className="roboto-light">
          Nosso sistema oferece as principais funcionalidades para a sua clínica
          veterinária
        </h4>
      </div>
      <div className="grid grid-cols-4 gap-8 mb-10">
        {features.map((feat, index) => (
          <CardTypeOne
            key={index}
            iconClass={feat.iconClass}
            title={feat.title}
            description={feat.description}
            hoverColor={feat.hoverColor}
          />
        ))}
      </div>
    </section>
  );
}
