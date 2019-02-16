import React from "react";
import Pagination from "./Pagination.jsx";
import ReviewEntry from "./ReviewEntry.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageOfItems: []
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Container>
          <Col className="text-center">
            <Row>
              {this.state.pageOfItems.map(review => (
                <ReviewEntry key={review.review_id} review={review} />
              ))}
            </Row>
            <Row>
              <Pagination
                items={this.props.reviews}
                onChangePage={this.onChangePage}
              />
            </Row>
          </Col>
        </Container>
        <hr />
      </div>
    );
  }
}

export default ReviewList;
