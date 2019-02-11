import React from "react";
import Col from "react-bootstrap/Col";

class DropdownSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Most recent"
    };
  }

  change(e) {
    this.props.handleValueChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <Col xs={6} className="dropdown-menu">
        <select
          name="search"
          onChange={this.change.bind(this)}
          value={this.state.value}
        >
          <option value="recent">Most recent</option>
          <option value="relevant">Most relevant</option>
        </select>
      </Col>
    );
  }
}

export default DropdownSearch;
