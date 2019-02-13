import React from "react";
import moment from "moment";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      read: "Read More"
    };

    this.expandText = this.expandText.bind(this);
  }

  expandText() {
    let read;
    if (this.state.expanded === false) {
      read = "Read Less";
    } else {
      read = "Read More";
    }
    this.setState({
      expanded: !this.state.expanded,
      read: read
    });
    // var dots = document.getElementById("dots");
    // var moreText = document.getElementById("more");
    // var btnText = document.getElementById("myBtn");

    // if (dots.style.display === "none") {
    //   dots.style.display = "inline";
    //   btnText.innerHTML = "Read more";
    //   moreText.style.display = "none";
    // } else {
    //   dots.style.display = "none";
    //   btnText.innerHTML = "Read less";
    //   moreText.style.display = "inline";
    // }
  }

  render() {
    return (
      <li className="review-entry bottom-spacing">
        <Row className="description-spacing">
          <Col className="images" lg={2} sm={2} xs={2} xl={2}>
            <Image
              src={this.props.review.image_url}
              className="thumbnail"
              roundedCircle
            />
          </Col>
          <Col>
            <Row className="username">{this.props.review.username}</Row>
            <Row>
              {moment(this.props.review.created_at)
                .startOf("day")
                .fromNow()}
            </Row>
          </Col>
        </Row>
        <Row className="desciption-align">
          {this.props.review.description.slice(0, 100)}
          {this.state.expanded && (
            <div>{this.props.review.description.slice(100)}</div>
          )}
          {this.props.review.description.length > 100 && (
            <button onClick={this.expandText} className="read-btn">
              {this.state.read}
            </button>
          )}
        </Row>
      </li>
    );
  }
}

export default ReviewEntry;

// const ReviewEntry = props => (
//   <li className="review-entry bottom-spacing">
//     <Row className="description-spacing">
//       <Col className="images" lg={2} sm={2} xs={2} xl={2}>
//         <Image
//           src={props.review.image_url}
//           className="thumbnail"
//           roundedCircle
//         />
//       </Col>
//       <Col>
//         <Row className="username">{props.review.username}</Row>
//         <Row>
//           {moment(props.review.created_at)
//             .startOf("day")
//             .fromNow()}
//         </Row>
//       </Col>
//     </Row>
//     <Row className="desciption-align">{props.review.description}
//     </Row>
//   </li>
// );

// export default ReviewEntry;

// {this.state.show && <div>{ object }</div> }
