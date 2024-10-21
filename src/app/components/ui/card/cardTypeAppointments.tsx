"use client";

type CardProp = {
  name: string;
  description: string;
  recordNumber: string;
};

export function CardTypeAppointments({
  name,
  description,
  recordNumber,
}: CardProp) {
  const limitDescription = (desc: string, wordCount: number) => {
    const words = desc.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : desc;
  };

  return (
    <>
      <div
        className={`border border-blue-500 h-40 w-auto overflow-hidden rounded-xl shadow-lg flex flex-col gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10
        }`}
      >
        <div className="p-5">
          <div>
            <h3 className="roboto-medium text-black text-2xl">{name}</h3>
          </div>
          <div className="text-star roboto-light text-gray-500 text-sm">
            <p className="truncate">{limitDescription(description, 5)}</p>
          </div>
          <div>
            <p className="roboto-light text-gray-700 text-sm">{recordNumber}</p>
          </div>
        </div>
        <div className="bg-blue-500 flex-grow rounded-b-xl w-full">
          <p className="flex font-semibold text-xl text-white items-center justify-center">
            Aguardando
          </p>
        </div>
      </div>
    </>
  );
}
