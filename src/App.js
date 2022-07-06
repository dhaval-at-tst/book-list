import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/Navbar';
import BookList from './components/Book/BookList';
import { useState } from 'react';
import BookForm from './components/Book/BookForm';

const DUMMY_BOOKS = [
  {
    id:1657090666646,
    title: "Aganpankh",
    author: "Dr.A.P.J.Abdul Kalam",
    price: 320
  },
  {
    id:1657090679526,
    title: "Satyarth Prakash",
    author: "Swami Dayanand Saraswati",
    price: 550
  },
  {
    id:1657090692413,
    title: "Manvi Ni Bhavai",
    author: "Pannalal Patel",
    price: 280
  },
  {
    id:1657090703814,
    title: "Atomic Habits",
    author: "James Clear",
    price: 420
  },
]

function App() {

  const [books, setBooks] = useState([...DUMMY_BOOKS]);

  const addBookHandler = newBook => {
    setBooks(prevBooks => {
      return [...prevBooks, newBook]
    })
  }

  return (
    <div className="App">
      <Header>Book List</Header>
      <div className="container">
      <BookForm onAddBook={addBookHandler} />
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
