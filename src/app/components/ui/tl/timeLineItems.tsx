type TimelineItemProps = {
  date: string;
  timeStamp: string;
  title: string;
  description: string;
  isLast: boolean;
};

export default function TimeLineItems({
  date,
  timeStamp,
  title,
  description,
  isLast,
}: TimelineItemProps) {
  return (
    <>
      <div className={`flex ${isLast ? "pb-0" : "pb-8"} relative`}>
        {/* Linha de tempo */}

        {/* Item */}
        <div className="ml-8 w-full border shadow-md px-4 py-2">
          <div className="flex flex-row gap-3 items-center">
            <span className="text-sm font-semibold text-gray-600">{date}</span>
            <span className="text-lg font-semibold text-gray-600">
              {timeStamp}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
          </div>
          <div>
            <p className="mt-2 text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
