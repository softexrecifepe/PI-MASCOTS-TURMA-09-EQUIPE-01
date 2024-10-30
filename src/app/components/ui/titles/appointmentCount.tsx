type CountProp = {
  count: number;
};

export function AppointmentCount({ count }: CountProp) {
  return (
    <div className="my-11">
      <h2 className="text-2xl roboto-medium">
        Pacientes para atendimento &#x00028;{count}&#x00029;
      </h2>
    </div>
  );
}
