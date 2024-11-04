import { useDispatch, useSelector } from "react-redux";
import { pageUpdate } from "../../redux/slices/paginationSlice";
import Flex from "./Flex";

const Pagination = ({ total }) => {
  let totalPages = Math.ceil(total / 32);
  const currentPage = useSelector((state) => state.paginationSlice.page);

  const dispatch = useDispatch();
  const handleClick = (page) => {
    dispatch(pageUpdate(page));
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === i
                ? "bg-gray-500 text-white font-bold"
                : "bg-gray-200"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        endPage = 5;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 4;
      }

      if (startPage > 1) {
        pageNumbers.push(
          <button
            key={1}
            onClick={() => handleClick(1)}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === 1
                ? "bg-gray-500 text-white font-bold"
                : "bg-gray-200"
            }`}
          >
            1
          </button>
        );
        if (startPage > 2) {
          pageNumbers.push(
            <span key="start-dots" className="px-3 py-1 mx-1 text-white">
              ...
            </span>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === i
                ? "bg-gray-500 text-white font-bold"
                : "bg-gray-200"
            }`}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push(
            <span key="end-dots" className="px-3 py-1 mx-1 text-white">
              ...
            </span>
          );
        }
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => handleClick(totalPages)}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-500 text-white font-bold"
                : "bg-gray-200"
            }`}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <Flex className="flex-col justify-center w-full gap-4 mt-5 sm:flex-row sm:gap-0 ">
      {currentPage > 1 && (
        <button
          onClick={() => handleClick(currentPage - 1)}
          className="px-3 py-1 mx-1 text-white bg-gray-500 rounded "
        >
          Previous
        </button>
      )}
      <Flex className={"justify-center"}>

      {renderPagination()}
      </Flex>

      {currentPage < totalPages && (
        <button
          onClick={() => handleClick(currentPage + 1)}
          className="px-3 py-1 mx-1 text-white bg-gray-500 rounded "
        >
          Next
        </button>
      )}
    </Flex>
  );
};

export default Pagination;
