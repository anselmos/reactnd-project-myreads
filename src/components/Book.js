import React from "react";
import "./Book.css";
import * as BooksAPI from "../api/BooksAPI";
import BookShelfChanger from "./BookShelfChanger";

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
        {/* // TODO update authors to a list */}
        <div className="book-authors">{this.props.data.authors}</div>
      </div>
    );
  }
}

export default Book;
