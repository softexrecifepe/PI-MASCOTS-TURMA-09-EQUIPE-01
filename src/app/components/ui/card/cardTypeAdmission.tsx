import { Avatar } from "@mui/material";
import { FaInfoCircle } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

type InformationProps = {
  usageType: string;
  pet_name?: string;
  owners_cpf?: string;
  breed?: string;
  weight?: string;
  discharge?: string;
  boxLocation: string;
  profilePic?: string;
  color_classification: string;
  category: string;
  vet: string;
};

export default function CardTypeAdmission({
  usageType,
  pet_name,
  owners_cpf,
  breed,
  weight,
  discharge,
  boxLocation,
  profilePic,
  color_classification,
  category,
  vet,
}: InformationProps) {
  if (usageType === "Geral" || usageType === "geral") {
    console.log("entrou no if");
    return (
      <>
        <div className="border w-64 rounded-lg shadow-lg">
          <div
            className={`flex flex-row px-2 py-2 rounded-t-lg ${color_classification}`}
          >
            <span className="text-sm text-white roboto-bold">{category}</span>
          </div>
          <div className="flex flex-row py-5 px-5 justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-lg roboto-regular">{pet_name} </span>
              <span className="text-gray-400 text-sm">{owners_cpf}</span>
              <span className="text-xs text-gray-400">
                {breed}, {weight}
              </span>
              <span className="text-xs text-gray-400">
                {discharge !== ""
                  ? `Previsão de alta ${discharge}`
                  : "Sem previsão de alta"}
              </span>
              {/* <span className="text-xs text-gray-400">Veterinário: {vet}</span> */}
              <span className="text-sm">{boxLocation}</span>
            </div>
            <div className="flex flex-col gap-3 justify-between items-center">
              <Avatar src={profilePic}></Avatar>
              <Tooltip title="Adicionar ocorrência" arrow>
                <button>
                  <Link href={"/admission/patient-admission"}>
                    <FaInfoCircle size={15} />
                  </Link>
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    console.log("entrou no else");
    return (
      <>
        <div className="w-64 py-5">
          <div className={`flex flex-row py-2`}>
            <span
              className={`text-sm text-white roboto-bold px-2 ${color_classification}`}
            >
              {category}
            </span>
          </div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col gap-1">
              <span className="text-sm">Internado no {boxLocation}</span>
              <span className="text-xs text-gray-400">
                {discharge !== ""
                  ? `Previsão de alta ${discharge}`
                  : "Sem previsão de alta"}
              </span>
              <span className="text-sm">Veterinário: {vet}</span>
            </div>
            {/* <div className="flex flex-col gap-3 justify-between items-center">
              <Avatar src={profilePic}></Avatar>
              <Tooltip title="Adicionar ocorrência" arrow>
                <button>
                  <FaInfoCircle size={15} />
                </button>
              </Tooltip>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
