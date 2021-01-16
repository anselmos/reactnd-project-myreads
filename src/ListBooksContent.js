import React from 'react'
import './App.css'
import BookShelfComponent from "./BookShelfComponent";

class ListBooksContent extends React.Component {

  render() {
    let currentlyReadingBooks = this.props.books.filter(elt => elt.shelf==="currentlyReading");
    let wantToReadBooks = this.props.books.filter(elt => elt.shelf==="wantToRead");
    let readBooks = this.props.books.filter(elt => elt.shelf==="read");
    let notInShelfBooks = this.props.books.filter(elt => (typeof(elt.shelf) === 'undefined'));
    return (

      <div className="list-books-content">
        <div>
          <BookShelfComponent handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(this)} name={'Currently Reading'} books={currentlyReadingBooks} />
          <BookShelfComponent handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(this)} name={'Want to Read'} books={wantToReadBooks} />
          <BookShelfComponent handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(this)} name={'Read'} books={readBooks} />
          <BookShelfComponent handleBookUpdateCallback={this.props.handleBookUpdateCallback.bind(this)} name={'NotInSelf'} books={notInShelfBooks} />
        </div>
      </div>
    );
  }
}

export default ListBooksContent