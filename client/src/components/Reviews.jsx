import React from "react";
import CustomerReview from "./CustomerReview.jsx";

const Reviews = props => (
  <ul>
    {props.reviews.map(review => (
      <CustomerReview review={review} />
    ))}
  </ul>
);

export default Reviews;
