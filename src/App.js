import React from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

function updateAllBooksState() {
  BooksAPI.getAll().then((allUserBooks) => {
    let data = {};
    allUserBooks.map((value) => (data[value.id] = value));
    this.setState({ data: data });
  });
}

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.handleOnResultsCallback = this.handleOnResultsCallback.bind(this);
  }

  handleAddBookCallback(history) {
    history.push("/search");
  }
  handleCloseBookCallback(history) {
    history.push("/");
    updateAllBooksState.call(this);
  }
  async handleOnResultsCallback(query) {
    const searchData = await BooksAPI.search(query);

    let searchBooks = {};
    if (
      searchData &&
      (typeof searchData.error === undefined || !searchData.error)
    ) {
      searchData
        .filter((book) => !Object.keys(this.state.data).includes(book.id))
        .map((value) => (searchBooks[value.id] = value));
      this.setState({ searchBooks: searchBooks });
    } else {
      this.setState({ searchBooks: {} });
    }
  }
  handleAppStateCallbackOnBookUpdate(bookId, valueCalled) {
    let copyData = { ...this.state.data };
    let bookData = { ...this.state.data[bookId] };
    bookData.shelf = valueCalled;
    copyData[bookId] = bookData;
    this.setState({ data: copyData });
  }
  componentDidMount() {
    updateAllBooksState.call(this);
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <ListBooks
                handleAddBookCallback={this.handleAddBookCallback.bind(
                  this,
                  history
                )}
                books={this.state.data}
                handleBookUpdateCallback={this.handleAppStateCallbackOnBookUpdate.bind(
                  this
                )}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={({ history }) => (
              <SearchBooks
                searchBooks={this.state.searchBooks}
                handleCloseBookCallback={this.handleCloseBookCallback.bind(
                  this,
                  history
                )}
                onSearchResultsCallback={this.handleOnResultsCallback}
                handleBookUpdateCallback={this.handleAppStateCallbackOnBookUpdate.bind(
                  this
                )}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
