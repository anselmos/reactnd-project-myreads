import React from 'react'
import './App.css'
import ListBooksContent from "./ListBooksContent";
class ListBooks extends React.Component {
  state = {
    showSearchPage: false
  }
  handleAddBook() {
    // TODO change into url /search
    this.setState({ showSearchPage: true })
  }
  render() {
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBooksContent booksCurrentlyReading={
            [
                {
                bookTitle: 'To Kill A Mocking Bird',
                bookAuthors: 'Harper Lee'
                },                {
                bookTitle: 'To Kill A Mockinaag Bird',
                bookAuthors: 'Harper Lee'
                }
            ]
          }
            books={this.props.books}
          />
          <div className="open-search">
            <button onClick={this.handleAddBook.bind(this)}>Add a book</button>
          </div>
        </div>
    );
  }
}

export default ListBooks