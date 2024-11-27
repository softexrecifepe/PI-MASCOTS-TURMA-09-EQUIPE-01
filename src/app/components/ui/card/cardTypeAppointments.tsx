"use client";
import { useAppointmentQueue } from "@/app/contexts/appointmentQueueContext";

// type CardProp = {
//   name: string;
//   description: string;
//   recordNumber: string;
// };

export function CardTypeAppointments() {
  const limitDescription = (desc: string, wordCount: number) => {
    const words = desc.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : desc;
  };

  const { queueAppointments } = useAppointmentQueue();

  return (
    <>
      <>
        {queueAppointments.length === 0 ? (
          <p className="p-4 text-center flex flex-row justify-center items-center gap-5">
            <span>Nenhum atendimento agendado.</span>
          </p>
        ) : (
          // Remova as chaves extras em volta do map
          queueAppointments.map((appointment) => (
            <section
              key={appointment.id}
              className={`border h-auto w-52 overflow-hidden rounded-xl shadow-lg flex flex-col gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10`}
            >
              <div className="flex flex-col gap-3 p-5">
                <div>
                  <h3 className="roboto-medium text-black text-2xl">
                    {appointment.patientNameOrPront}{" "}
                    <span className="text-gray-400 text-xs">
                      ({appointment.patientInfo.species})
                    </span>
                  </h3>
                </div>
                <div className="text-star roboto-light text-gray-500 text-sm">
                  <p className="truncate">
                    {limitDescription(appointment.appointmentReason, 5)}
                  </p>
                </div>
                <div>
                  <p className="roboto-light text-gray-700 text-sm">
                    {appointment.vet}
                  </p>
                </div>
              </div>
              <div
                className={`flex-grow rounded-b-xl w-full py-2 ${
                  appointment.status === "Próximo"
                    ? "bg-blue-500  roboto-medium"
                    : "bg-gamboge-dark roboto-thin"
                }`}
              >
                <p
                  className={`flex font-semibold text-xl text-white items-center justify-center`}
                >
                  {appointment.status}
                </p>
              </div>
            </section>
          ))
        )}
      </>
    </>
  );
}
