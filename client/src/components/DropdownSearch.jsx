import React from "react";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class DropDownSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Most recent"
    };
  }

  change(e) {
    this.props.handleValueChange(e);
    e === "recent"
      ? this.setState({ value: "Most Recent" })
      : this.setState({ value: "Most Relevant" });
  }

  render() {
    return (
      <Col className="dropdown">
        <DropdownButton
          id="dropdown-basic-button"
          title={this.state.value}
          onSelect={this.change.bind(this)}
        >
          <Dropdown.Item eventKey="recent">Most Recent</Dropdown.Item>
          <Dropdown.Item eventKey="relevant">Most Relevant</Dropdown.Item>
        </DropdownButton>
      </Col>
    );
  }
}

export default DropDownSearch;
