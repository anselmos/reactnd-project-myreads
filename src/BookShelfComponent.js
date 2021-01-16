import React from 'react'
import './App.css'
import Book from "./Book";
class BookShelfComponent extends React.Component {
  render() {
      // TODO is there any other way to make this callback without variable ?
    let handleBookCallback = this.props.handleBookUpdateCallback
    const booksRender = this.props.books.map(function(data, idx) {
        return (
            <li key={idx}>
            <Book stateBookId={idx} data={data} handleBookUpdateCallback={handleBookCallback.bind(this)} />
            </li>
        )
        ;
    });

    return (

      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksRender}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelfComponent