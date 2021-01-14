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

  handleAppStateCallbackOnBookUpdate(stateBookId, bookId){
      // TODO this is wrong and it fails multiple times :(
      let copyFoo = [ ...this.state.data]; //create a new copy
      BooksAPI.get(bookId).then(fetchData => {
          copyFoo[stateBookId] = fetchData;
          this.setState({data: copyFoo});
      });
  }
  componentDidMount() {
      BooksAPI.getAll()
          .then(currentData => {
              this.setState({'data': currentData})
          });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks books={this.state.data}/>
        ) : (
          <ListBooks books={this.state.data} handleBookUpdateCallback={this.handleAppStateCallbackOnBookUpdate.bind(this)}/>
        )}
      </div>
    );
  }
}

export default BooksApp
