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
      ? this.setState({ value: "Most recent" })
      : this.setState({ value: "Most relevant" });
  }

  render() {
    return (
      <Col className="dropdown-column" xs sm md lg="3">
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title={this.state.value}
          onSelect={this.change.bind(this)}
        >
          <Dropdown.Item eventKey="recent">Most recent</Dropdown.Item>
          <Dropdown.Item eventKey="relevant">Most relevant</Dropdown.Item>
        </DropdownButton>
      </Col>
    );
  }
}

export default DropDownSearch;
