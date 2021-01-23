import React from "react";
import "./BookShelf.css";
import Book from "./Book";
import PropTypes from "prop-types";

function BookShelf(props){
    let handleBookCallback = props.handleBookUpdateCallback;
    const booksRender = Object.entries(props.books).map(([bookId, data], idx) => (
        <li key={idx}>
          <Book
            stateBookId={idx}
            data={data}
            handleBookUpdateCallback={handleBookCallback.bind(this)}
          />
        </li>
    ));

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{booksRender}</ol>
        </div>
      </div>
    );
  }
BookShelf.propTypes = {
  books: PropTypes.object.isRequired,
  handleBookUpdateCallback: PropTypes.func.isRequired,
}
export default BookShelf;