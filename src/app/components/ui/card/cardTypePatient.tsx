"use client";

type CardProp = {
  name: string;
  admissionDate: string;
  exitDate: string;
};

export function CardTypePatient({ name, admissionDate, exitDate }: CardProp) {
  return (
    <>
      <div
        className={`p-5 border shadow-lg grid grid-cols-1 gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10 
        }`}
      >
        <div>
          <h3 className="roboto-medium text-black text-2xl">{name}</h3>
        </div>
        <div className="text-star roboto-light text-gray-500 text-sm">
          <p>{admissionDate}</p>
        </div>
        <div className="text-star roboto-light text-gray-500 text-sm">
          <p>{exitDate}</p>
        </div>
      </div>
    </>
  );
}
