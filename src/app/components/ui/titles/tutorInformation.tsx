type TutorInfoProps = {
  tutor_name: string | undefined;
  userType: string | undefined;
  owners_cpf: string | undefined;
  foneNumber: string | undefined;
  email: string | undefined;
  endereco?: string | undefined;
};

export function TutorInformation({
  tutor_name,
  userType,
  owners_cpf,
  foneNumber,
  email,
  endereco,
}: TutorInfoProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-2xl roboto-light">
        {tutor_name} <span className="text-xs text-gray-500">({userType})</span>
      </div>
      <div className="text-sm text-gray-500">{owners_cpf}</div>
      <div className="text-sm text-gray-500">{foneNumber}</div>
      <div className="text-sm text-gray-500">{email}</div>
      <div className="text-sm text-gray-500">{endereco}</div>
    </div>
  );
}
