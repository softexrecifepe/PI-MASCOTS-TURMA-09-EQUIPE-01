import TimeLineItems from "./timeLineItems";

type Event = {
  date: string;
  title: string;
  timeStamp: string;
  description: string;
};

type TimeLineProps = {
  events: Event[];
};

export default function TimeLine({ events }: TimeLineProps) {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <div className="relative border-l-4 border-gray-300">
          {events.map((event, index) => (
            <TimeLineItems
              key={index}
              date={event.date}
              timeStamp={event.timeStamp}
              title={event.title}
              description={event.description}
              isLast={index === events.length - 1}
            />
          ))}
        </div>
      </div>
    </>
  );
}
