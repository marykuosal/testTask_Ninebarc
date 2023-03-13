const Book = ({book, onClick}) => {
    return (
        <div className="main__item" onClick={onClick}>
                <div className="main__item__photo">
                    <img src={book.photo} id="photo" alt="bookPhoto"/>
                </div>
                <div className="main__item__description">
                    <div className="main__item__description__item tittle">
                        Title: {book.title}
                    </div>
                    <div className="main__item__description__item">
                        Author: {book.author}
                    </div>
                </div>
        </div>
    );
}

export default Book;
