
import React, { useState, useRef } from 'react';
import Wrapper from './../Helpers/Wrapper';
import ErrorModal from './../UI/ErrorModal';

const BookForm = ({ onAddBook }) => {

    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const priceInputRef = useRef();

    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const addBookHandler = event => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAuthor = authorInputRef.current.value;
        const enteredPrice = +priceInputRef.current.value;

        if (enteredTitle.trim().length === 0 || enteredAuthor.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid title and author (non-empty value).",
            });
            return;
        }
        if (enteredPrice < 1) {
            setError({
                title: "Invalid Price",
                message: "Please enter a valid age (>0).",
            });
            return;
        }
        const newBook = { id: new Date().getTime(), title: enteredTitle, author: enteredAuthor, price: enteredPrice };
        onAddBook(newBook);
        titleInputRef.current.value = '';
        authorInputRef.current.value = '';
        priceInputRef.current.value = '';
    }

    return (
        <Wrapper>
            {error && <ErrorModal error={error} onConfirm={errorHandler} />}
            {/* {error && <Alert type="danger" title={error.title} message={error.message} onConfirm={errorHandler} />} */}
            <div className="card bg-dark text-light rounded-0 mt-3">
                <div className="card-body">
                    <form onSubmit={addBookHandler}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" ref={titleInputRef} placeholder="Enter Book Title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" className="form-control" id="author" ref={authorInputRef} placeholder="Enter Book Author" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" className="form-control" id="price" ref={priceInputRef} placeholder="Enter Price" min='1' />
                        </div>
                        <button type="submit" className="btn btn-light">Add</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default BookForm;