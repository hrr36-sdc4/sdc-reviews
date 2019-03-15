import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class CondtionsRow extends React.Component {
  render() {
    const rating = this.props.rating || 0;

    const fullStars = data => {
      return [...Array(data)].map((x, i) => (
        <i key={i} className="fas fa-star stars" />
      ));
    };

    const blankStars = data => {
      if (data !== 0) {
        return [...Array(data)].map((x, i) => (
          <i key={i} className="fas fa-star blank-star" />
        ));
      }
    };

    return (
      <Row className="top-star-spacing">
        <Col className={this.props.title}>
          <span>{this.props.title}</span>
        </Col>

        <Col>
          {" "}
          {fullStars(rating)}
          {blankStars(5 - rating)}
        </Col>
      </Row>
    );
  }
}

export default CondtionsRow;
