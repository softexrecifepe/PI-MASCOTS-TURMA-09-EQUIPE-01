import Link from "next/link";

type CountProp = {
  count: number;
};

export function AppointmentCount({ count }: CountProp) {
  return (
    <div className="my-11">
      <h2 className="text-2xl roboto-medium">
        Pacientes para atendimento &#x00028;{count}&#x00029;
        <Link href={"/medicalAppointment/showAppointmentsList"} target="_blank">
          <i className="fa-solid fa-arrow-up-right-from-square text-sm pl-3"></i>
        </Link>
      </h2>
    </div>
  );
}
