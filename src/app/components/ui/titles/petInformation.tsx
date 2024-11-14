import { Avatar } from "@mui/material";

type PetInfoProp = {
  usageType: string;
  categoryTag?: string;
  categoryColor?: string;
  pet_name: string;
  userType?: string;
  species: string;
  gender: string;
  age: string;
  fisicalDescription: string;
  weight: string;
  hospitalStatus?: string;
  link_profilePic?: string;
  alergies: string;
  owners_name?: string;
  owners_fone?: string;
};

export function PetInformation({
  usageType,
  categoryTag,
  categoryColor,
  pet_name,
  age,
  userType,
  species,
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
      <section className="flex flex-row justify-between w-full">
        <div className="flex flex-col gap-4">
          <div className="text-2xl roboto-medium">
            {pet_name}{" "}
            <span className="text-xs text-gray-400">({userType})</span>
          </div>
          <div>
            <span className="text-sm text-gray-500">{alergies}</span>
          </div>
          <div>
            <span className="text-sm text-gray-500">
              {species}, {gender}, {fisicalDescription}, {age}, {weight}
            </span>
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
            <span className="text-xs text-gray-400">({userType})</span>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <span className="text-sm text-gray-500">
                {species}, {gender}, {fisicalDescription}, {age}, {weight}
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
