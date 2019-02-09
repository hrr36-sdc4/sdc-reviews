// main js file where the rendering will happen and all the components are imported here
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import ReviewCount from "./components/ReviewCount.jsx";
import ConditionsRatings from "./components/ConditionsRatings.jsx";
import SearchReviews from "./components/SearchReviews.jsx";
import ReviewList from "./components/ReviewList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      reviews: []
    };
    this.setupReviews = this.setupReviews.bind(this);
  }

  componentDidMount() {
    this.grabReviews();
  }

  async grabReviews() {
    try {
      const response = await axios.get(
        "http://localhost:3000/rooms/reviews/recent"
      );
      console.log("REVIEWS RECEIVED FROM DB!");
      // console.log(response.data);
      this.setupReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  setupReviews(data) {
    var recent = data.slice(0, 10);
    this.setState({
      recent: recent,
      reviews: data
    });
  }

  render() {
    return (
      <div className="ReviewsContainer">
        <ReviewCount reviewLength={this.state.reviews.length} />
        <ConditionsRatings reviews={this.state.reviews} />
        <SearchReviews />
        <ReviewList recent={this.state.recent} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("reviews"));
