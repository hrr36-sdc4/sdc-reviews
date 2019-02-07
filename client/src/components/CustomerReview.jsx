import React from "react";
import moment from "moment";

const CustomerReview = props => (
  <li className="">
    <img src={props.review.image_url} alt="" />
    <div>{props.review.username}</div>
    {moment(props.review.created_at)
      .startOf("day")
      .fromNow()}
    <div>{props.review.description}</div>
  </li>
);

export default CustomerReview;
