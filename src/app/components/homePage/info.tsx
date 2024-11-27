import Image from "next/image";
import img4 from "../../assets/images/img4.jpg";
import { BtnColorBg } from "../ui/btn/btnColorBg";

type InfoProps = {
  title: string;
  subtitle: string;
};

export function Info(props: InfoProps) {
  return (
    <>
      <div className="grid grid-cols-2 py-11 px-5 mb-10 gap-20">
        <div className="grid-rows-1 flex-col ">
          <h3 className="text-5xl roboto-regular p-5">
            <span className={`text-darkCyan font-bold text-5xl roboto-regular`}>
              Mascot&#39;s
            </span>
            {props.title}
          </h3>
          <h5 className="text-xl roboto-light p-5 mb-3">{props.subtitle}</h5>
          <div className="p-5">
            <BtnColorBg content="Acesso o Mascot's" />
          </div>
        </div>
        <div className="grid-rows-1 flex justify-items-center">
          <Image
            className="rounded-2xl w-full"
            src={img4}
            alt="Doutora cuidando de Pet"
          ></Image>
        </div>
      </div>
    </>
  );
}
