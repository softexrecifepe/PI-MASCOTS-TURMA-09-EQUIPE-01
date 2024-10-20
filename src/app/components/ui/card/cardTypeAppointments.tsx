"use client";

type CardProp = {
  name: string;
  description: string,
  recordNumber: string;
};

export function CardTypeAppointments({
  name,
  description,
  recordNumber,
}: CardProp) {

  const limitDescription = (desc: string, wordCount: number) => {
    const words = desc.split(" ");
    return words.length > wordCount ? words.slice(0, wordCount).join(" ") + "..." : desc;
  };

  return (
    <>
      <div
        className={`border border-blue-500 h-40 w-auto overflow-hidden p-5 p-5 rounded-xl shadow-lg grid grid-cols-1 gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10
        }`}
      >
        <div>
          <h3 className="roboto-medium text-black text-2xl">{name}</h3>
        </div>
        <div className="text-star roboto-light text-gray-500 text-sm">
          <p className="truncate">{limitDescription(description, 5)}</p>
        </div>
        <div>
          <p className="roboto-light text-gray-700 text-sm">{recordNumber}</p>
        </div>
        <div className="bg-blue-500 flex-grow p-2 rounded-b-xl">
          <p className="roboto-regular text-white text-x text-center">Aguardando</p>
        </div>
      </div>
    </>
  );
}