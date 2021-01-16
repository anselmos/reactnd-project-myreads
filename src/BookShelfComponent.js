import React from 'react'
import './App.css'
import Book from "./Book";
// TODO move to function component.
class BookShelfComponent extends React.Component {
  render() {
    let handleBookCallback = this.props.handleBookUpdateCallback
    const booksRender = Object.entries(this.props.books).map(function([bookId, data], idx) {
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