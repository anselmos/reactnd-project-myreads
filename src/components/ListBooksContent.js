import React from "react";
import "../App.css";
import BookShelf from "./BookShelf";

class ListBooksContent extends React.Component {
  filter_books_dict_by_shelf(data, shelf) {
    return Object.fromEntries(
      Object.entries(data).filter(([k, v]) => v.shelf === shelf)
    );
  }
  render() {
    let currentlyReadingBooks = this.filter_books_dict_by_shelf(
      this.props.books,
      "currentlyReading"
    );
    let wantToReadBooks = this.filter_books_dict_by_shelf(
      this.props.books,
      "wantToRead"
    );
    let readBooks = this.filter_books_dict_by_shelf(this.props.books, "read");
    return (
      <div className="list-books-content">
        <div>
          <BookShelf
            handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(
              this
            )}
            name={"Currently Reading"}
            books={currentlyReadingBooks}
          />
          <BookShelf
            handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(
              this
            )}
            name={"Want to Read"}
            books={wantToReadBooks}
          />
          <BookShelf
            handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(
              this
            )}
            name={"Read"}
            books={readBooks}
          />
        </div>
      </div>
    );
  }
}

export default ListBooksContent;
