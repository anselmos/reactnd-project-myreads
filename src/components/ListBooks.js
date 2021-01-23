import React from "react";
import "../App.css";
import ListBooksContent from "./ListBooksContent";

const ListBooks  = ({
books,
handleBookUpdateCallback,
handleAddBookCallback,
}) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <ListBooksContent
            books={books}
            handleBookUpdateCallback={handleBookUpdateCallback}
        />
        <div className="open-search">
            <button onClick={handleAddBookCallback}>Add a book</button>
        </div>
    </div>

)
export default ListBooks;
