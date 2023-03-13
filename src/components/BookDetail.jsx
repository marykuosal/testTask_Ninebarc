import { useSelector } from "react-redux";
import BookDetailImpl  from "./BookDetailImplementation";

const BookDetail = () => {
  const books = useSelector((state) => state.books);
  const key = useSelector((state) => state.currentKey);
  const book = books.find((book) => book.key === key);

  return (<BookDetailImpl book={book}/>);
};

export default BookDetail;
