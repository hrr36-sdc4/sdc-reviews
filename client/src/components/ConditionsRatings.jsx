import React from "react";
import ConditionsRow from "./ConditionsRow.jsx";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class ConditionsRatings extends React.Component {
  render() {
    return (
      <Container className="ConditionsRatings">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <ConditionsRow
              title={"Accuracy"}
              rating={this.props.ratings["accuracy"]}
            />
            <ConditionsRow
              title={"Communication"}
              rating={this.props.ratings["communication"]}
            />
            <ConditionsRow
              title={"Cleanliness"}
              rating={this.props.ratings["cleanliness"]}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            {" "}
            <ConditionsRow
              title={"Location"}
              rating={this.props.ratings["location"]}
            />
            <ConditionsRow
              title={"Check In"}
              rating={this.props.ratings["check_in"]}
            />
            <ConditionsRow
              title={"Value"}
              rating={this.props.ratings["value"]}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ConditionsRatings;
