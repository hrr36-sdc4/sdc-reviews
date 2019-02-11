import React from "react";

class CondtionsRow extends React.Component {
  render() {
    const rating = this.props.rating || 0;

    const fullStars = data => {
      return [...Array(data)].map((x, i) => <span key={i}>&#9733;</span>);
    };

    const blankStars = data => {
      if (data !== 0) {
        return [...Array(data)].map((x, i) => <span key={i}>&#9734;</span>);
      }
    };

    return (
      <div className={this.props.title}>
        <span>{this.props.title}</span>
        {fullStars(rating)}
        {blankStars(5 - rating)}
      </div>
    );
  }
}

export default CondtionsRow;
