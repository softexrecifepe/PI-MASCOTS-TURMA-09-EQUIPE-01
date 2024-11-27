import Image from "next/image";
import img1 from "../../assets/images/img1.jpg";

export function BgHomePage() {
  return (
    <section>
      <Image src={img1} alt="imagem de fundo" className="object-cover" />
    </section>
  );
}
