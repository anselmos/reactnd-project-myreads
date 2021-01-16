import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelfChanger from "./BookShelfChanger";

class Book extends React.Component {
    handleCallback(valueCalled){
        BooksAPI.update(this.props.data, valueCalled)
            .then(this.props.handleBookUpdateCallback(this.props.stateBookId, this.props.data.id));
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${ this.props.data.imageLinks.thumbnail })`

                    }}></div>
                <BookShelfChanger bookId={this.props.data.id} callback={this.handleCallback.bind(this)}/>
                </div>
                <div className="book-title">{this.props.data.title}</div>
                {/* // TODO update authors to a list */}
                <div className="book-authors">{this.props.data.authors}</div>
            </div>
        );
    }
}

export default Book