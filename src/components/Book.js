import React from "react";
import "./Book.css";
import * as BooksAPI from "../api/BooksAPI";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

class Book extends React.Component {
  async handleCallback(valueCalled) {
    await BooksAPI.update(this.props.data, valueCalled);
    this.props.handleBookUpdateCallback(this.props.data.id, valueCalled);
  }
  render() {
    let thumbnail = "";
    if (this.props.data.imageLinks !== undefined) {
      thumbnail = this.props.data.imageLinks.thumbnail;
    }
    let authors = "";
    if (this.props.data.authors !== undefined){
        authors = this.props.data.authors.join(", ");
    }
      return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnail})`,
            }}
          ></div>
          <BookShelfChanger
            bookId={this.props.data.id}
            callback={this.handleCallback.bind(this)}
          />
        </div>
        <div className="book-title">{this.props.data.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}
Book.propTypes = {
  data: PropTypes.object.isRequired,
  handleBookUpdateCallback: PropTypes.func.isRequired,
}
export default Book;
