import Image from "next/image";
import Link from "next/link";

type CardProp = {
  imgUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  altText: string;
  title: string;
  description: string;
};

export function CardTypeTwo({
  imgUrl,
  linkedinUrl,
  githubUrl,
  altText,
  title,
  description,
}: CardProp) {
  return (
    <>
      <div className="p-8 border rounded-xl shadow-md grid grid-cols-1 gap-5 justify-items-center Transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <Image src={imgUrl} alt={altText} width={200} height={200} />
        </div>
        <div>
          <h3 className="roboto-regular text-lg text-center p-2">{title}</h3>
          <p className="text-start roboto-light text-xs">{description}</p>
        </div>
        <div className="flex flex-row gap-5">
          <Link href={linkedinUrl}>
            <i className="fa-brands fa-linkedin-in text-xl hover:text-darkCyan transition-colors duration-300"></i>
          </Link>
          <Link href={githubUrl}>
            <i className="fa-brands fa-github text-xl hover:text-darkCyan transition-colors duration-300"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
