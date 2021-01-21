import React from "react";
import "../App.css";
import BookShelf from "./BookShelf";

const SHELVES = [
  {
    title: 'Currently Reading',
    id: 'currentlyReading'
  },
  {
    title: 'Want To Read',
    id: 'wantToRead'
  },
  {
    title: 'Read',
    id: 'read'
  }
];

class ListBooksContent extends React.Component {
  filter_books_dict_by_shelf(data, shelf) {
    return Object.fromEntries(
      Object.entries(data).filter(([k, v]) => v.shelf === shelf)
    );
  }

  render() {
    let bookshelfs = SHELVES.map(({title, id}, _) => (
      <BookShelf
        handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(this)}
        name={title}
        books={this.filter_books_dict_by_shelf(this.props.books, id)}
      />
    ))
    return (
      <div className="list-books-content">
        <div>
          {bookshelfs}

        </div>
      </div>
    );
  }
}

export default ListBooksContent;
