interface InvalidCredentialsProps {
  message: string;
}

export default function InvalidCredentials({
  message
}: InvalidCredentialsProps) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 my-4 px-4 py-3 rounded text-center"
      role="alert"
    >
      <p className="font-bold">Error!</p>
      <p>{message}</p>
    </div>
  );
}
