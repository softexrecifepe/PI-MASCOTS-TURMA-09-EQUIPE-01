import { useState } from "react";

export function TitlesWithText() {
  // criando um estado
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // criando a lista de items
  const items = [
    {
      title: "Como o PetSys Surgiu?",
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
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quo debitis corporis sequi fuga repellat optio id provident excepturi quos, vitae aspernatur, odit omnis! Laudantium fugit totam temporibus esse ut.",
    },
  ];

  // criando a função para abrir e fechar os blocos
  const toggleItem = (index: number): void => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        {items.map((item, index) => (
          <div className="grid-rows-1 cursor-pointer" key={index}>
            <span>
              <i
                className={`fa-solid transform  ${
                  openIndex === index ? " fa-arrow-down " : "fa-arrow-right"
                } px-5 text-darkCyan`}
              ></i>
            </span>
            <span
              className="text-2xl text-darkCyan roboto-medium"
              onClick={() => toggleItem(index)}
            >
              {item.title}
            </span>
            {openIndex === index && (
              <div className="px-6 py-4 my-5 text-gray-700 bg-gray-50">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
