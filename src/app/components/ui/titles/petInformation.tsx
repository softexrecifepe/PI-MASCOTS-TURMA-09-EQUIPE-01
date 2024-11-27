import { Avatar } from "@mui/material";

type PetInfoProp = {
  usageType: string | undefined;
  categoryTag?: string | undefined;
  categoryColor?: string | undefined;
  pet_name: string | undefined;
  userType?: string | undefined;
  species: string | undefined;
  breed: string | undefined;
  gender: string | undefined;
  age: string | undefined;
  fisicalDescription: string | undefined;
  weight: string | undefined;
  hospitalStatus?: string | undefined;
  link_profilePic?: string | undefined;
  alergies: string | undefined;
  owners_name?: string | undefined;
  owners_fone?: string | undefined;
};

export function PetInformation({
  usageType,
  categoryTag,
  categoryColor,
  pet_name,
  age,
  userType,
  species,
  breed,
  gender,
  fisicalDescription,
  weight,
  hospitalStatus,
  link_profilePic,
  alergies,
  owners_name,
  owners_fone,
}: PetInfoProp) {
  if (usageType !== "internamento") {
    return (
      <section className="flex flex-row justify-between content-center items-center w-full">
        <div className="flex flex-col gap-1">
          <div className="text-2xl roboto-medium">
            {pet_name}{" "}
            <span className="text-xs text-gray-400">({userType})</span>
          </div>
          <div></div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">
              Raça: <span className="text-black">{breed}</span>
            </p>
            <p className="text-sm text-gray-500">
              Gênero: <span className="text-black">{gender}</span>
            </p>
            <p className="text-sm text-gray-500">
              Descrição física:{" "}
              <span className="text-black">{fisicalDescription}</span>
            </p>
            <p className="text-sm text-gray-500">
              Idade: <span className="text-black">{age}</span>
            </p>
            <p className="text-sm text-gray-500">
              Peso: <span className="text-black">{weight}</span>
            </p>
            <p className="text-sm text-gray-500">
              Alergias: <span className="text-black">{alergies}</span>
            </p>
          </div>
          <div>
            <span
              className={`px-4 text-black rounded-md text-sm ${
                hospitalStatus ? `bg-tuftsBlue text-white` : `${categoryColor}`
              }`}
            >
              {usageType !== "internamento" || "Internamento"
                ? `${hospitalStatus}`
                : `${categoryTag}`}
            </span>
          </div>
        </div>
        <div>
          <Avatar
            alt="imagem do usuário"
            src={link_profilePic}
            sx={{ width: 200, height: 200 }}
          />
        </div>
      </section>
    );
    // para internamento
  } else {
    return (
      <section className="flex flex-row justify-between w-full">
        <div className="flex flex-col gap-2 py-5 px-5">
          <div className="text-2xl roboto-medium">
            {pet_name}{" "}
            <span className="text-xs text-gray-400">&#40;{species}&#41;</span>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <span className="text-sm text-gray-500">
                {breed}, {gender}, {fisicalDescription}, {age}, {weight}
              </span>
            </div>
            <div className="flex flex-row items-center gap-3">
              {/* <span
              className={`px-4 text-black rounded-md text-sm ${
                hospitalStatus ? `bg-tuftsBlue text-white` : `${categoryColor}`
              }`}
            >
              {usageType !== "internamento" || "Internamento"
                ? `${hospitalStatus}`
                : `${categoryTag}`}
            </span> */}
              <span className="text-sm">{owners_name}</span>
              <span className="text-xs text-gray-500">{owners_fone}</span>
            </div>
            <div>
              <span className="text-xs bg-grape text-white py-1 px-2">
                {alergies}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
