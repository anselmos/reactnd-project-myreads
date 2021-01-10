import React from 'react'
import './App.css'
import BookShelfComponent from "./BookShelfComponent";

class ListBooksContent extends React.Component {

  render() {
    return (

      <div className="list-books-content">
        <div>
          <BookShelfComponent name={'Currently Reading'} books={this.props.books.filter(elt => elt.shelf==="currentlyReading")} />
          <BookShelfComponent name={'Want to Read'} books={this.props.books.filter(elt => elt.shelf==="wantToRead")} />
          <BookShelfComponent name={'Read'} books={this.props.books.filter(elt => elt.shelf==="read")} />
        </div>
      </div>
    );
  }
}

export default ListBooksContent