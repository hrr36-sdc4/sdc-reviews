import React from "react";
import Col from "react-bootstrap/Col";

class ReviewCount extends React.Component {
  render() {
    const average = this.props.average || 0;

    const fullStars = (data = 4) => {
      return [...Array(data)].map((x, i) => (
        <span className="stars" key={i}>
          &#9733;
        </span>
      ));
    };

    return (
      <Col xs={12} md={12} lg={12} className="bottom-design">
        <h3 className="ReviewCount">
          {console.log(average)}
          {this.props.reviewLength} Reviews {fullStars(average)}
        </h3>
      </Col>
    );
  }
}

export default ReviewCount;
