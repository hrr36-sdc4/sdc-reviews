import React from "react";
import moment from "moment";

const CustomerReview = props => (
  <li className="">
    {moment(props.post.createdAt)
      .startOf("day")
      .fromNow()}
  </li>
);

export default CustomerReview;
