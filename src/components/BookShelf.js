import React from "react";
import "./BookShelf.css";
import Book from "./Book";

function BookShelf(props){
    let handleBookCallback = props.handleBookUpdateCallback;
    const booksRender = Object.entries(props.books).map(function (
      [bookId, data],
      idx
    ) {
      return (
        <li key={idx}>
          <Book
            stateBookId={idx}
            data={data}
            handleBookUpdateCallback={handleBookCallback.bind(this)}
          />
        </li>
      );
    });

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{booksRender}</ol>
        </div>
      </div>
    );
  }
export default BookShelf;