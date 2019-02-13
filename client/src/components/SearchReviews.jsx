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
      <Col xs sm md lg="3" className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-search" />
          </span>
        </div>

        <input
          className="form-control"
          type="text"
          placeholder="Search reviews"
          onKeyPress={this.searchAction.bind(this)}
        />
        {/* <span className="fas fa-search" /> */}
      </Col>
    );
  }
}

export default SearchReviews;
