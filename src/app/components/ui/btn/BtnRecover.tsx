type BtnProps = {
  content: string;
};

export function BtnRecover(props: BtnProps) {
  return (
    <button className="roboto-medium text-sm transition-all duration-200 ease-in-out hover:scale-[1.2] pr-4 pl-4 pt-2 pb-2 text-black ">
      <span className="">
        {props.content} <i className="fa-solid fa-arrow-right ml-2"></i>
      </span>
    </button>
  );
}
