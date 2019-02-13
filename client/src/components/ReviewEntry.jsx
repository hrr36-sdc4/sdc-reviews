import React from "react";
import moment from "moment";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ReviewEntry = props => (
  <li className="review-entry bottom-spacing">
    <Row className="description-spacing">
      <Col className="images" lg={2} sm={2} xs={2} xl={2}>
        <Image
          src={props.review.image_url}
          className="thumbnail"
          roundedCircle
        />
      </Col>
      <Col>
        <Row className="username">{props.review.username}</Row>
        <Row>
          {moment(props.review.created_at)
            .startOf("day")
            .fromNow()}
        </Row>
      </Col>
    </Row>
    <Row className="desciption-align">{props.review.description}</Row>
  </li>
);

export default ReviewEntry;
