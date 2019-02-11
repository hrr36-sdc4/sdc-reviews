import React from "react";

const fullStars = () => {
  return [...Array(5)].map((x, i) => <span key={i}>&#9733;</span>);
};

const ReviewCount = props => (
  <div className="ReviewCount">
    <h2>
      {props.reviewLength} Reviews {fullStars()}
    </h2>
  </div>
);

export default ReviewCount;
