const BookListItem = ({ book }) => {
    const { title, author, price } = book;
    return (
        <li className="bg-light text-dark">
            <div className="border my-2 p-2">
                The <span className="fw-bold">{title}</span> is written by <span className="fw-bold">{author}</span> of <span className="fw-bold">{price}</span> ruppes.
            </div>
        </li>
    );
}

export default BookListItem;