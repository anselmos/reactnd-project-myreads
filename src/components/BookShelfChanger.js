import React from "react";
import "./BookShelfChanger.css";
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: "Currently Reading", value: "currentlyReading" },
        { title: "Want to Read", value: "wantToRead" },
        { title: "Read", value: "read" },
        { title: "None", value: "none" },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.callback(event.target.value);
  }
  render() {
    const options = this.state.data.map(function (element, idx) {
      return (
        <option key={idx} value={element.value}>
          {element.title}{" "}
        </option>
      );
    });
    return (
      <div className="book-shelf-changer">
        <select defaultValue="move" onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          {options}
        </select>
      </div>
    );
  }
}

BookShelfChanger.propTypes = {
  callback: PropTypes.func.isRequired
}
export default BookShelfChanger;
