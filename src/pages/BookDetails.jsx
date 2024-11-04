import { useParams } from "react-router-dom";
import CardLoadingSearch from "../components/ui/CardLoadingSearch";
import Container from "../components/ui/Container";
import ErrorMessage from "../components/ui/ErrorMessage";
import { useGetBookByIdQuery } from "../redux/slices/apiSlice";
import BookDetailsCard from "../components/books/BookDetailsCard";
let content;
const BookDetails = () => {
  const { bookId } = useParams();

  const { data: book, isLoading, isError, error } = useGetBookByIdQuery(bookId);
  if (isLoading) content = <CardLoadingSearch />;
  if (!isLoading && isError)
    content = <ErrorMessage title={error.status} message={error?.error} />;

  if (!isLoading && !isError && !book)
    content = (
      <ErrorMessage title={"not Found :"} message={"no book in the database"} />
    );
  if (!isLoading && !isError && book) content = <BookDetailsCard book={book} />;
  return <Container><div className="mt-5">{content}</div></Container>;
};
export default BookDetails;
