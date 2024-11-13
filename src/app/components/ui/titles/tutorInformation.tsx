type TutorInfoProps = {
  tutor_name: string;
  userType: string;
  owners_cpf: string;
  foneNumber: string;
  email: string;
};

export function TutorInformation({
  tutor_name,
  userType,
  owners_cpf,
  foneNumber,
  email,
}: TutorInfoProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-2xl roboto-light">
        {tutor_name} <span className="text-xs text-gray-500">({userType})</span>
      </div>
      <div className="text-sm text-gray-500">{owners_cpf}</div>
      <div className="text-sm text-gray-500">{foneNumber}</div>
      <div className="text-sm text-gray-500">{email}</div>
    </div>
  );
}
