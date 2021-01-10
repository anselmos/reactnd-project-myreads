import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
    handleShelfChanger(){
        // FIXME check if this is the prefered way to make this happen
        // BooksAPI.update(this.props.data, "currentlyReading")
        //     .then(window.location.reload(false));
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: 'url(' +this.props.data.imageLinks.thumbnail +')'

                    }}></div>
                    <div className="book-shelf-changer">
                        <select  onClick={this.handleShelfChanger.bind(this)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.data.title}</div>
                {/* // TODO update authors to a list */}
                <div className="book-authors">{this.props.data.authors}</div>
            </div>
        );
    }
}

export default Book