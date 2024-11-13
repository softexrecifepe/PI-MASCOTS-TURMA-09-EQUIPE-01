type BtnProp = {
  bgColor?: string;
  textColor?: string;
  iconClass: string;
  content: string;
};

export default function GeneralBtn({
  bgColor,
  textColor,
  iconClass,
  content,
}: BtnProp) {
  return (
    <>
      <button
        className={`min-w-36 hover:bg-darkCyan hover:text-white transition-all duration-200 ease-in-out py-1 px-5 roboto-regular justify-center flex flex-row items-center gap-2 ${
          bgColor === "" || !bgColor ? "bg-gray-300" : `${bgColor}`
        } ${textColor === "" || !bgColor ? "text-black" : `${textColor}`}`}
      >
        <i className={`${iconClass} text-sm`}></i>
        <span>{content}</span>
      </button>
    </>
  );
}
