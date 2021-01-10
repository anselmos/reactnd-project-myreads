import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
  constructor () {
    super()
    this.state = {
        data: [],
      showSearchPage: false,
    }
  }

  componentDidMount() {
      BooksAPI.getAll()
          .then(currentData => this.setState({'data': currentData}));
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks books={this.state.data}/>
        ) : (
          <ListBooks books={this.state.data}/>
        )}
      </div>
    );
  }
}

export default BooksApp
