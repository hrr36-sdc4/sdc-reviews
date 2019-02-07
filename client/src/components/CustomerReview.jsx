import React from "react";
import moment from "moment";

const CustomerReivew = props => (
  <li className="">
    {moment(props.post.createdAt)
      .startOf("day")
      .fromNow()}
  </li>
);

export default CustomerReview;
