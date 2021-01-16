import React from 'react'
import './App.css'

class BookShelfChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            data : [
                {'title': 'Currently Reading', 'value': 'currentlyReading'},
                {'title': 'Want to Read', 'value': 'wantToRead'},
                {'title': 'Read', 'value': 'read'},
                {'title': 'None', 'value': 'none'},
            ],
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.callback(event.target.value);
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
            value={null}
            onChange={this.handleChange}
        >
            <option value="move" disabled selected>Move to...</option>
            {options}
        </select>
        </div>
        );
    }
}

export default BookShelfChanger