import React from "react";
import ReviewEntry from "./ReviewEntry.jsx";

const ReviewList = props => (
  <ul>
    {props.recent.map(review => (
      <ReviewEntry key={review.review_id} review={review} />
    ))}
  </ul>
);

export default ReviewList;
