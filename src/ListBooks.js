import React from "react";
import "./App.css";
import ListBooksContent from "./ListBooksContent";

class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ListBooksContent
          books={this.props.books}
          handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(
            this
          )}
        />
        <div className="open-search">
          <button onClick={this.props.handleAddBookCallback}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default ListBooks;
