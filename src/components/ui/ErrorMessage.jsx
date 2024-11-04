const ErrorMessage = ({ title, message }) => {
  return (
    <div
      className="w-full p-4 mb-4 text-center text-red-800 rounded-lg text-md bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium uppercase">{title}</span> {message}
    </div>
  );
};
export default ErrorMessage;
