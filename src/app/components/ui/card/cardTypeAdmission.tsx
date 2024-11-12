import { Avatar } from "@mui/material";
import { FaInfoCircle } from "react-icons/fa";

type InformationProps = {
  pet_name: string;
  owners_cpf: string;
  breed: string;
  weight: string;
  discharge?: Date;
  boxLocation: string;
  profilePic: string;
  color_classification: string;
  category: string;
};

export default function CardTypeAdmission({
  pet_name,
  owners_cpf,
  breed,
  weight,
  discharge,
  boxLocation,
  profilePic,
  color_classification,
  category,
}: InformationProps) {
  return (
    <>
      <div className="border w-fit max-w-80 min-w-52 rounded-lg shadow-lg">
        <div
          className={`flex flex-row px-2 py-2 rounded-t-lg ${color_classification}`}
        >
          <span className="text-sm text-white">{category}</span>
        </div>
        <div className="flex flex-row py-5 px-5 gap-10">
          <div className="flex flex-col gap-1">
            <span className="text-lg roboto-regular">
              {pet_name} <span className="text-gray-400">({owners_cpf})</span>
            </span>
            <span className="text-xs text-gray-400"></span>
            <span className="text-xs text-gray-400">
              {breed}, {weight}
            </span>
            <span className="text-sm">{boxLocation}</span>
          </div>
          <div className="flex flex-col gap-3 justify-between items-center">
            <Avatar src={profilePic}></Avatar>
            <FaInfoCircle size={15} />
          </div>
        </div>
      </div>
    </>
  );
}
