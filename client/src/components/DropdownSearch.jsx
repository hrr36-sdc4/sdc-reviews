import React from "react";

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
      <div className="dropdown-menu">
        <select
          name="search"
          onChange={this.change.bind(this)}
          value={this.state.value}
        >
          <option value="recent">Most recent</option>
          <option value="relevant">Most relevant</option>
        </select>
      </div>
    );
  }
}

export default DropdownSearch;
