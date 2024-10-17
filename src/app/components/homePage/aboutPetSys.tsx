import Image from "next/image";

type AboutProps = {
  imgUrl: string;
  imgAlt: string;
};

export function AboutPetSys({ imgUrl, imgAlt }: AboutProps) {
  return (
    <section className="flex flex-row gap-10 pl-20 pr-20 mt-28 mb-36">
      <div className="flex flex-col gap-5">
        <Image
          className="rounded-xl object-contain max-h-[600px] max-w-[500px]"
          src={imgUrl}
          alt={imgAlt}
          width={500}
          height={600}
        ></Image>
      </div>
      <div className="flex flex-col items-start gap-5">
        <div>
          <h6
            id="about-project"
            className="text-myrtleGreen-light roboto-light scroll-mt-32"
          >
            Sobre o Projeto
          </h6>
        </div>
        <div>
          <h2 className="text-4xl roboto-medium">Como o PetSys Surgiu?</h2>
        </div>
        <div className="">
          <div className="grid grid-cols-1 gap-5">
            <div className="grid-rows-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea
              laboriosam cupiditate voluptate. Maxime autem repudiandae iste
              placeat nisi cupiditate consectetur, molestiae sapiente rem eaque
              recusandae numquam nesciunt enim itaque?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
