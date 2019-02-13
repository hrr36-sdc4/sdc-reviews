import React from "react";
import Col from "react-bootstrap/Col";

class ReviewCount extends React.Component {
  render() {
    const average = this.props.average || 0;

    const fullStars = (data = 4) => {
      return [...Array(data)].map((x, i) => (
        // <span className="stars" key={i}>
        //   &#9733;
        // </span>
        <i class="fas fa-star stars"> </i>
      ));
    };

    const blankStars = data => {
      if (data !== 0) {
        return [...Array(data)].map((x, i) => (
          // <span key={i}>&#9734;</span>
          <i class="far fa-star stars" />
        ));
      }
    };

    return (
      <Col xs={12} md={12} lg={12} className="bottom-spacing">
        <h3 className="ReviewCount">
          {this.props.reviewLength} Reviews {fullStars(average)}
          {blankStars(5 - average)}
        </h3>
      </Col>
    );
  }
}

export default ReviewCount;
