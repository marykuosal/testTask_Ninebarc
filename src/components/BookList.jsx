import Book from "../components/Book";
import { useSelector, useDispatch } from "react-redux";
import { getBookDetail } from "../asyncActions/books";


const BookList = () => {
  const listBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="container">
        <div className="main__content content">
          {listBooks.length === 0 ? (
            <h1>No books. Try finding something.</h1>
          ) : (
            listBooks.map((book, index) => (
              <Book
                book={book}
                key={book.key}
                onClick={() => {
                  getBookDetail()(dispatch, book.key);

                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BookList;
