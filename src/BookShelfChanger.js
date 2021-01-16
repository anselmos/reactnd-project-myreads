import React from 'react'
import './App.css'

class BookShelfChanger extends React.Component {
    constructor() {
        super();
        this.state = {
            'selected': 'currentlyReading',
            'data': [
                {'title': 'Currently Reading', 'value': 'currentlyReading'},
                {'title': 'Want to Read', 'value': 'wantToRead'},
                {'title': 'Read', 'value': 'read'},
                {'title': 'None', 'value': 'none'},
            ]
        }
    }
    handleChange(value){
        this.props.callback(value);
    }
    render() {
        const options = this.state.data.map(function(element, idx)  {
            return <option key={idx} value={element.value}>{element.title} </option>
            }
        )
        // I wanted to use defaltValue in option but it is strangely not working
        return (
        <div className="book-shelf-changer">
        <select
            onChange={(val) => this.handleChange(val.target.value)}
        >

            <option value="move" disabled selected>Move to...</option>
            {options}
        </select>
        </div>
        );
    }
}

export default BookShelfChanger