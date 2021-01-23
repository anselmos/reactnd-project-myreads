import React from "react";
import "../App.css";
import ListBooksContent from "./ListBooksContent";
import PropTypes from "prop-types";

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

ListBooks.propTypes = {
  books: PropTypes.object.isRequired,
  handleBookUpdateCallback: PropTypes.func.isRequired,
  handleAddBookCallback: PropTypes.func.isRequired,
}
export default ListBooks;
