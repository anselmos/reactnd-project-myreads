import React from "react";
import "../App.css";
import BookShelf from "./BookShelf";
import * as Constants from "../Constants";
import PropTypes from "prop-types";

class ListBooksContent extends React.Component {
  filter_books_dict_by_shelf(data, shelf) {
    return Object.fromEntries(
      Object.entries(data).filter(([k, v]) => v.shelf === shelf)
    );
  }

  render() {
    let allBookShelfs = Constants.SHELVES.map(({title, id}, _) => (
      <BookShelf
        handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(this)}
        name={title}
        books={this.filter_books_dict_by_shelf(this.props.books, id)}
        key={id}
      />
    ))
    return (
      <div className="list-books-content">
        <div>
          {allBookShelfs}

        </div>
      </div>
    );
  }
}
ListBooksContent.propTypes = {
  books: PropTypes.object.isRequired,
  handleBookUpdateCallback: PropTypes.func.isRequired,
}
export default ListBooksContent;
