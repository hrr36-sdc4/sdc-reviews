import React from "react";
import ConditionsRow from "./ConditionsRow.jsx";

class ConditionsRatings extends React.Component {
  render() {
    return (
      <div className="ConditionsRatings">
        <div className="ratings-container">
          <ConditionsRow
            title={"Accuracy"}
            rating={this.props.ratings["accuracy"]}
          />
          <ConditionsRow
            title={"Communication"}
            rating={this.props.ratings["communication"]}
          />
          <ConditionsRow
            title={"Cleanliness"}
            rating={this.props.ratings["cleanliness"]}
          />
        </div>
        <div className="ratings-container">
          <ConditionsRow
            title={"Location"}
            rating={this.props.ratings["location"]}
          />
          <ConditionsRow
            title={"Check In"}
            rating={this.props.ratings["check_in"]}
          />
          <ConditionsRow title={"Value"} rating={this.props.ratings["value"]} />
        </div>
      </div>
    );
  }
}

export default ConditionsRatings;
