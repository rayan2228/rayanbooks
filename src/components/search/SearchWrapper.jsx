import {  useState } from "react";
import { useGetSearchResultsQuery } from "../../redux/slices/apiSlice";
import useDebounce from "../../hooks/useDebounce";
import ErrorMessage from "../ui/ErrorMessage";
import CardLoadingSearch from "../ui/CardLoadingSearch";
import BookCardSearch from "../books/BookCardSearch";
const SearchWrapper = () => {
  let content;
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search);
  const {
    data: searchResults,
    isLoading,
    isError,
    error,
  } = useGetSearchResultsQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm === "",
  });
  if (isLoading) content = <CardLoadingSearch />;
  if (!isLoading && isError)
    content = <ErrorMessage title={error.status} message={error?.error} />;
  if (!isLoading && !isError && searchResults?.results?.length === 0) {
    content = (
      <ErrorMessage title={"not Found :"} message={"no search result"} />
    );
  }

  if (!isLoading && !isError && searchResults?.results?.length) {
    content = searchResults?.results?.map((book) => (
      <BookCardSearch key={book.id} book={book} />
    ));
  }
  return (
    <>
      <div className="sm:w-[95%] w-[90%] ">
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search books by topic"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {content && (
        <div
          className={`mt-3 overflow-y-scroll pr-4 ${
            searchResults?.results?.length && "h-96"
          }`}
        >
          {content}
        </div>
      )}
    </>
  );
};
export default SearchWrapper;
