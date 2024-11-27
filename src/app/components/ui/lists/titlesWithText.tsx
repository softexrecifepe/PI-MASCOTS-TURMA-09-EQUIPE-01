import { useState } from "react";

export function TitlesWithText() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Como o Mascot's Surgiu?",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quo debitis corporis sequi fuga repellat optio id provident excepturi quos, vitae aspernatur, odit omnis! Laudantium fugit totam temporibus esse ut.",
    },
    {
      title: "O Projeto Integrador",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quo debitis corporis sequi fuga repellat optio id provident excepturi quos, vitae aspernatur, odit omnis! Laudantium fugit totam temporibus esse ut.",
    },
    {
      title: "A Formação Acelerada em Programação (FAP)",
      description:
        "A Formação Acelerada em Programação visa qualificar profissionais para o setor de Tecnologia da Informação, oferecendo uma formação intensiva em duas trilhas de aprendizado: Back End e Front End. O programa combina teoria e prática, preparando os participantes para atender às demandas do mercado de trabalho.",
    },
  ];

  const toggleItem = (index: number): void => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5">
      {items.map((item, index) => (
        <div className="grid-rows-1 cursor-pointer" key={index}>
          <span>
            <i
              className={`fa-solid transform ${
                openIndex === index ? "fa-arrow-down" : "fa-arrow-right"
              } px-5 text-darkCyan`}
            ></i>
          </span>
          <span
            className="text-2xl text-darkCyan roboto-medium"
            onClick={() => toggleItem(index)}
          >
            {item.title}
          </span>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 py-4 my-5 text-gray-700 bg-gray-50">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
