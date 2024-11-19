type BtnProp = {
  bgColor?: string;
  textColor?: string;
  styles?: string;
  iconClass: string;
  content: string;
  onClick?: () => void;
};

export default function GeneralBtn({
  bgColor,
  textColor,
  iconClass,
  styles,
  content,
  onClick,
}: BtnProp) {
  return (
    <>
      <button
        className={`min-w-36 ${styles} hover:bg-darkCyan hover:text-white transition-all duration-200 ease-in-out py-1 px-5 roboto-regular justify-center flex flex-row items-center gap-2 ${
          bgColor === "" || !bgColor ? "bg-gray-300" : `${bgColor}`
        } ${textColor === "" || !bgColor ? "text-black" : `${textColor}`}`}
        onClick={onClick}
      >
        <i className={`${iconClass} text-sm`}></i>
        <span>{content}</span>
      </button>
    </>
  );
}
