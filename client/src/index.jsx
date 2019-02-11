// main js file where the rendering will happen and all the components are imported here
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import ReviewCount from "./components/ReviewCount.jsx";
import ConditionsRatings from "./components/ConditionsRatings.jsx";
import SearchReviews from "./components/SearchReviews.jsx";
import DropdownSearch from "./components/DropdownSearch.jsx";

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
      // console.log("REVIEWS RECEIVED FROM DB!");
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

  filterReviews(data) {
    var recent = data.slice(0, 10);
    this.setState({
      recent: recent
    });
  }

  async queryReviewListings(query) {
    axios
      .get("http://localhost:3000/rooms/reviews/filter", {
        params: { data: query }
      })
      .then(res => {
        this.filterReviews(res.data);
      });
  }

  async customReviewListings(query) {
    axios.get(`http://localhost:3000/rooms/reviews/${query}`).then(res => {
      this.filterReviews(res.data);
    });
  }

  calculateUserRatings(users) {
    var ratings = {
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0,
      check_in: 0,
      value: 0
    };
    // grab specific condtions rating from each user
    for (let i = 0; i < users.length; i++) {
      ratings["accuracy"] += users[i]["accuracy"];
      ratings["communication"] += users[i]["communication"];
      ratings["cleanliness"] += users[i]["cleanliness"];
      ratings["location"] += users[i]["location"];
      ratings["check_in"] += users[i]["check_in"];
      ratings["value"] += users[i]["value"];
    }
    for (var key in ratings) {
      // find the average rating from the users
      ratings[key] = Math.ceil(ratings[key] / users.length);
    }

    return ratings;
  }

  render() {
    var ratings = this.calculateUserRatings(this.state.reviews);

    return (
      <div className="ReviewsContainer">
        <ReviewCount reviewLength={this.state.reviews.length} />
        <ConditionsRatings ratings={ratings} reviews={this.state.reviews} />
        <div>
          <SearchReviews
            handleSearchInput={this.queryReviewListings.bind(this)}
          />
          <DropdownSearch
            handleValueChange={this.customReviewListings.bind(this)}
          />
        </div>
        <ReviewList recent={this.state.recent} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("reviews"));
