import Image from "../ui/Image";
import Flex from "../ui/Flex";
import bookPlaceholder from "../../assets/bookPlaceholder.png";
import { Link } from "react-router-dom";
const BookDetailsCard = ({ book }) => {
  return (
    <Flex className="flex-col mb-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Flex className="items-center justify-center p-4 xl:w-1/4 md:w-1/2">
        <Image
          className="object-contain w-[90%] h-[90%] rounded-md "
          src={book?.formats["image/jpeg"] || bookPlaceholder}
          alt={book?.title}
        />
      </Flex>
      <Flex className="flex-col justify-between flex-grow p-4 leading-normal">
        <Flex className={"justify-between"}>
          <h5 className="title" title={book.title}>
            {book?.title}
          </h5>
          <Link
            to={"/"}
            className="inline-flex items-center px-6 py-2 text-xl font-medium text-center text-white capitalize bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            back
          </Link>
        </Flex>
        <h5 className="title">
          Author : <span className="details">{book?.authors[0]?.name}</span>
        </h5>
        <h5 className="title">
          downloads : <span className="details">{book?.download_count}</span>
        </h5>
        <h5 className="title">
          languages : <span className="details">{book?.languages}</span>
        </h5>
        <Flex className={"xl:flex-row flex-col"}>
          <ul className="xl:w-2/5 ">
            <h5 className="title">Book Subjects :</h5>
            {book?.subjects?.map((subject, index) => (
              <li className="details" key={index}>
                {subject}
              </li>
            ))}
          </ul>
          <ul className="xl:w-2/5 ">
            <h5 className="title">bookshelves :</h5>
            {book?.bookshelves?.map((bookshelf, index) => (
              <li className="details" key={index}>
                {bookshelf}
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default BookDetailsCard;
