import React from 'react'
import './App.css'
import BookShelfComponent from "./BookShelfComponent";

class ListBooksContent extends React.Component {

  render() {
    return (

      <div className="list-books-content">
        <div>
          <BookShelfComponent handleBookUpdateCallback={this.props.handleBookUpdateCallback} name={'Currently Reading'} books={this.props.books.filter(elt => elt.shelf==="currentlyReading")} />
          <BookShelfComponent handleBookUpdateCallback={this.props.handleBookUpdateCallback} name={'Want to Read'} books={this.props.books.filter(elt => elt.shelf==="wantToRead")} />
          <BookShelfComponent handleBookUpdateCallback={this.props.handleBookUpdateCallback} name={'Read'} books={this.props.books.filter(elt => elt.shelf==="read")} />
          <BookShelfComponent handleBookUpdateCallback={this.props.handleBookUpdateCallback} name={'NotInSelf'} books={this.props.books.filter(elt => (typeof(elt.shelf) === 'undefined'))} />
        </div>
      </div>
    );
  }
}

export default ListBooksContent