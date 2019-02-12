import React from "react";
import Col from "react-bootstrap/Col";

class SearchReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  searchAction(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.handleSearchInput(event.target.value);
      this.setState({
        value: event.target.value
      });
      event.target.value = "";
    }
  }

  render() {
    return (
      <Col className="search-bar form-inline" xs sm md lg="6">
        <input
          className="form-control"
          type="text"
          placeholder="Search reviews"
          onKeyPress={this.searchAction.bind(this)}
        />
      </Col>
    );
  }
}

export default SearchReviews;
