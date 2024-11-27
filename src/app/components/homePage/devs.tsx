import { CardTypeTwo } from "../ui/card/cardTypeTwo";

export function Devs() {
  const developers = [
    {
      imgUrl: "https://avatars.githubusercontent.com/u/166458348?v=4",
      linkedinUrl: "https://www.linkedin.com/in/izabellealvess/",
      githubUrl: "https://www.linkedin.com/in/izabellealvess/",
      altText: "Izabelle Alves",
      title: "Izabelle Alves",
      description: "Junior Front-End Developer",
    },
    {
      imgUrl: "https://avatars.githubusercontent.com/u/72764345?v=4",
      linkedinUrl: "https://www.linkedin.com/in/camillabarros/",
      githubUrl: "https://github.com/cabarros3",
      altText: "Camilla Barros",
      title: "Camilla Barros",
      description: "Junior Front-End Developer",
    },
    {
      imgUrl: "https://avatars.githubusercontent.com/u/128865750?v=4",
      linkedinUrl: "https://github.com/devAugustoW",
      githubUrl: "https://github.com/devAugustoW",
      altText: "Augusto Dantas",
      title: "Augusto D.",
      description: "Junior Front-End Developer",
    },
    {
      imgUrl: "https://avatars.githubusercontent.com/u/143006038?v=4",
      linkedinUrl: "https://github.com/MrGalva07",
      githubUrl: "https://github.com/MrGalva07",
      altText: "Lucas Galvão",
      title: "Lucas Galvão",
      description: "Junior Front-End Developer",
    },
    {
      imgUrl: "https://avatars.githubusercontent.com/u/119360478?v=4",
      linkedinUrl: "https://github.com/figu3iredo",
      githubUrl: "https://github.com/figu3iredo",
      altText: "Lauro",
      title: "Lauro",
      description: "Junior Front-End Developer",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-7 p-8">
      <div>
        <h6
          id="devs"
          className="text-myrtleGreen-light roboto-light scroll-mt-32 border-b-2 border-darkCyan pb-2"
        >
          Desenvolvedores
        </h6>
      </div>
      <div>
        <h2 className="text-4xl roboto-medium">Quem desenvolveu o Mascot&#39;s?</h2>
      </div>
      <div className="grid grid-cols-5 gap-10 p-10 mb-10">
        {developers.map((dev, index) => (
          <CardTypeTwo
            key={index}
            imgUrl={dev.imgUrl}
            linkedinUrl={dev.linkedinUrl}
            githubUrl={dev.githubUrl}
            altText={dev.altText}
            title={dev.title}
            description={dev.description}
          />
        ))}
      </div>
    </section>
  );
}
