const BookDetailImpl = ({book}) => {

  return (
    <div className="main">
      <div className="container">
        <div className="main__content content"></div>
        <div className="main__item detailed">
          <div className="main__item__photo">
            <img src={book.photo} id="photo-detailed" alt="bookPhoto" />
          </div>
          <div className="main__item__description">
            <div className="main__item__description__item tittle">
              Tittle: {book.title}
            </div>
            <div className="main__item__description__item">
              Author: {book.author}
            </div>
            <div className="main__item__description__item">
              Date: {book.date ? book.date: "none"}
            </div>
            <div className="main__item__description__item">
              Description: {book.description? book.description: "none"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailImpl;
