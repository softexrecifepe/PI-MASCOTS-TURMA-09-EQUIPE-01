import Image from "next/image";
import img2 from "../../assets/images/img2.png";
import { BtnColorBg } from "../ui/btn/btnColorBg";

type InfoProps = {
  title: string;
  subtitle: string;
};

export function Info(props: InfoProps) {
  return (
    <>
      <div className="flex flex-row p-24 justify-around gap-5">
        <div>
          <h3 className="text-5xl roboto-regular p-5">{props.title}</h3>
          <h5 className="text-xl roboto-light p-5 mb-10">{props.subtitle}</h5>
          <div className="p-5">
            <BtnColorBg content="Acesso o PetSys" />
          </div>
        </div>
        <div>
          <Image
            className="rounded-2xl"
            src={img2}
            alt="Doutora cuidando de Pet"
          ></Image>
        </div>
      </div>
    </>
  );
}
