type TitleProp = {
  iconClass: string;
  sectionTitle: string;
};

export function SectionTitle({ iconClass, sectionTitle }: TitleProp) {
  return (
    <>
      <div className="flex items-center mb-6">
        <i className={`${iconClass} text-4xl text-tuftsBlue mr-2`}></i>
        <h2 className="roboto-light text-3xl">{`${sectionTitle}`}</h2>
      </div>
    </>
  );
}
