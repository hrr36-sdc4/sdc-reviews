import React from "react";
import ReviewEntry from "./ReviewEntry.jsx";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }
}
export default ReviewList;

//     this.state = {
//       current: this.props.reviews.slice(0, 10),
//       alllReviews: this.props.reviews,
//       active: 1,
//       limit: 10,
//       offset: 0,
//       totalPages: 0
//     };

//     this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
//   }

//   handlePaginationSelect(selectedPage) {
//     console.log(selectedPage);
//     let offset = this.state.limit * selectedPage;
//     this.setState({
//       active: this.state.selectedPage
//     });
//   }

//   handleLimitChange(event) {
//     console.log(event.target);
//     var number = event.target.innerHTML;

//     document.getElementByClassName(number).classList.add("active");

//     this.setState({
//       active: number
//     });
//   }

//   // <ul>
//   //   {props.recent.map(review => (
//   //     <ReviewEntry key={review.review_id} review={review} />
//   //   ))}
//   // </ul>
//   render() {
//     const populatePages = () => {
//       let active = 1;
//       let items = [];
//       for (let number = 1; number <= 10; number++) {
//         items.push(
//           <Pagination.Item
//             className={number}
//             active={number === this.state.active}
//             onClick={this.handleLimitChange.bind(this)}
//           >
//             {number}
//           </Pagination.Item>
//         );
//       }
//       return items;
//     };

//     return (
//       <Pagination>
//         <Pagination.Prev />
//         {populatePages()}
//         <Pagination.Next />
//       </Pagination>
//     );
//   }
// }

// export default ReviewList;

///////////

{
  /* <Pagination.Item
          active={1 === this.state.active}
          onChange={active => this.setState({ active })}
        >
          {1}
        </Pagination.Item>
        <Pagination.Item
          active={2 === this.state.active}
          onChange={active => this.setState({ active })}
        >
          {2}
        </Pagination.Item>
        <Pagination.Item
          active={3 === this.state.active}
          onChange={active => this.setState({ active })}
        >
          {3}
        </Pagination.Item>
        <Pagination.Item
          active={4 === this.state.active}
          onChange={active => this.setState({ active })}
        >
          {4}
        </Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item
          active={10 === this.state.active}
          onChange={active => this.setState({ active })}
        >
          {10}
        </Pagination.Item> */
}
//////////////

// let active = 1;
// let items = [];
// for (let number = 1; number <= 10; number++) {
// items.push(
// <Pagination.Item active={number === active}>{number}</Pagination.Item>
// );
// }

// const paginationBasic = (

// {items}
// ```
// <Pagination bsSize="medium">{items}</Pagination>
// <br />

// <Pagination bsSize="small">{items}</Pagination>
// ```
// );
// render(paginationBasic);

////// OG
//   import React from "react";
// import ReviewEntry from "./ReviewEntry.jsx";
// import Pagination from "react-bootstrap/Pagination";
// import PageItem from "react-bootstrap/PageItem";

// const ReviewList = props => (
//   // <ul>
//   //   {props.recent.map(review => (
//   //     <ReviewEntry key={review.review_id} review={review} />
//   //   ))}
//   // </ul>
//   <Pagination>
//     <Pagination.Prev />
//     <Pagination.Item active={false}>{1}</Pagination.Item>
//     <Pagination.Item>{2}</Pagination.Item>
//     <Pagination.Item>{3}</Pagination.Item>
//     <Pagination.Item>{4}</Pagination.Item>
//     <Pagination.Ellipsis />

//     <Pagination.Item>{10}</Pagination.Item>

//     <Pagination.Next />
//   </Pagination>
// );

// export default ReviewList;
