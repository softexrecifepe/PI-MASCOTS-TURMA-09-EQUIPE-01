type BtnProps = {
  content: string;
};

export function BtnWhiteBg(props: BtnProps) {
  return (
    <button className="roboto-medium text-sm bg-white pr-4 pl-4 pt-2 pb-2 transition-all duration-200 ease-in-out text-myrtleGreen rounded-xl hover:bg-darkCyan hover:text-white">
      <span>{props.content}</span>
    </button>
  );
}
