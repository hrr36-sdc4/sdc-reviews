import React from "react";

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
      <div>
        <div className="search-bar form-inline">
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            onKeyPress={this.searchAction.bind(this)}
          />
        </div>
        <div className="dropdown-menu">
          <select name="" id="">
            <option value="Most relevant">Most relevant</option>
            <option value="Most recent">Most recent</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchReviews;
