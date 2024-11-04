import { Link } from "react-router-dom";
import Image from "../ui/Image";
import Flex from "../ui/Flex";
import bookPlaceholder from "../../assets/bookPlaceholder.png";
const BookCardSearch = ({ book }) => {
  return (
    <Link
      to={`/books/${book.id}`}
      className="flex flex-col items-center mb-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Flex className="items-center justify-center p-4">
        <Image
          className=" h-[90%] w-[90%] m-auto object-contain rounded-md"
          src={book?.formats["image/jpeg"] || bookPlaceholder}
          alt={book?.title}
        />
      </Flex>
      <Flex className="flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" title={book.title}>
          {book.title?.slice(0, 50) + " ..."}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {book?.subjects[0]?.slice(0, 100)}
        </p>
        <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          {book?.authors[0]?.name}
        </h5>
      </Flex>
    </Link>
  );
};
export default BookCardSearch;
