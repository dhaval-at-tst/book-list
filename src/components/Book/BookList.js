import BookListItem from './BookListItem';
const BookList = ({ books }) => {
    return (
        <div className="card bg-dark rounded-0 my-3">
            <div className="card-body">
                <ul className="list-unstyled mb-0">
                    {
                        books.map((book => (                            
                            <BookListItem key={book.id} book={book} />
                        )))
                    }
                </ul>
            </div>
        </div>
    );
}

export default BookList;