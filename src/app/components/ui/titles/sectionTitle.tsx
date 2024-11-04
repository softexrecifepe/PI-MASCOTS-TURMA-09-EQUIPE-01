type TitleProp = {
  iconClass: string;
  sectionTitle: string;
  color: string;
};

export function SectionTitle({ iconClass, sectionTitle, color }: TitleProp) {
  return (
    <>
      <div className="flex items-center my-10">
        <i className={`${iconClass} text-4xl ${color} mr-2`}></i>
        <h2 className="roboto-light text-3xl">{`${sectionTitle}`}</h2>
      </div>
    </>
  );
}
