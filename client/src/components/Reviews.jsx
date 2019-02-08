import React from "react";
import CustomerReview from "./CustomerReview.jsx";

const Reviews = props => (
  <ul>
    {props.reviews.map(review => (
      <CustomerReview key={review.review_id} review={review} />
    ))}
  </ul>
);

export default Reviews;
