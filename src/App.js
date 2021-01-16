import React from 'react'
import {Route} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

function updateAllBooksState() {
    BooksAPI.getAll()
    .then(currentData => {
        this.setState({'data': currentData});
    });
}

class BooksApp extends React.Component {
  constructor () {
    super()
    this.state = {
        data: [],
      showSearchPage: false,
    }
    this.handleOnResultsCallback = this.handleOnResultsCallback.bind(this)
  }

  handleAddBookCallback(history){
      history.push('/search')
  }
  handleCloseBookCallback(history){
      history.push('/')
      updateAllBooksState.call(this);
  }
  handleOnResultsCallback(query){
    BooksAPI.search(query)
    .then(searchData => {
        let deepCopyData = [ ...this.state.data]; //create a new copy
        searchData.map(value => {
            deepCopyData.push(value);
        })
        console.log(deepCopyData);
        // deepCopyData[stateBookId] = fetchData;
        this.setState({data: deepCopyData});
        // console.log(searchData);
        // this.setState({'data': currentData})
    });
  }
  handleAppStateCallbackOnBookUpdate(stateBookId, bookId){
      updateAllBooksState.call(this);
      /* This harder approach is not working properly yet
      // TODO this is wrong and it fails multiple times :(
      let copyFoo = [ ...this.state.data]; //create a new copy
      BooksAPI.get(bookId).then(fetchData => {
          copyFoo[stateBookId] = fetchData;
          this.setState({data: copyFoo});
      });

       */
  }
  componentDidMount() {
      updateAllBooksState.call(this);
  }

  render() {
    return (
      <div className="app">
          <Route path='/' render={({history}) => (
               <ListBooks handleAddBookCallback={this.handleAddBookCallback.bind(this, history)} books={this.state.data} handleBookUpdateCallback={this.handleAppStateCallbackOnBookUpdate.bind(this)}/>
          )}
            />
          <Route path="/search" render={({history}) => (
          <SearchBooks handleCloseBookCallback={this.handleCloseBookCallback.bind(this, history)} onSearchResultsCallback={this.handleOnResultsCallback} books={this.state.data}/>
          )}
                 />
      </div>
    );
  }
}

export default BooksApp
