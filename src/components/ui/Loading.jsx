import Flex from "./Flex";

const Loading = () => {
  return (
    <Flex
      className="items-center justify-center w-screen h-screen p-4 mb-4 text-center text-white rounded-lg text-md bg-red-50 dark:bg-gray-800 dark:text-white"
      role="alert"
    >
      <span className="font-medium">Loading....</span> 
    </Flex>
  );
};
export default Loading;
