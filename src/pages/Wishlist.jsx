import { useSelector } from "react-redux";
import BookCard from "../components/books/BookCard";
import Flex from "../components/ui/Flex";
import Container from "../components/ui/Container";
import ErrorMessage from "../components/ui/ErrorMessage";
let content 
const Wishlist = () => {
  const wishlists = useSelector((state) => state.wishlistSlice.items);
  if (wishlists.length) {
    content = wishlists?.map((book) => <BookCard key={book.id} book={book} />);
  }else{
    content = <ErrorMessage title={"not found :"} message={"no book is added to the wishlist"}/>
  }
  return (
    <Container>
      <Flex className={"my-5 flex-col flex-wrap md:flex-row gap-3 md:gap-x-0 justify-around xl:justify-start xl:gap-3"}>{content}</Flex>
    </Container>
  );
};
export default Wishlist;
