import React from "react";
import moment from "moment";

const ReviewEntry = props => (
  <li className="">
    <img className="img" src={props.review.image_url} alt="" />
    <div className="username">{props.review.username}</div>
    {moment(props.review.created_at)
      .startOf("day")
      .fromNow()}
    <div>{props.review.description}</div>
  </li>
);

export default ReviewEntry;
