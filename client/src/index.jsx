// main js file where the rendering will happen and all the components are imported here
import React from "react";
import ReactDOM from "react-dom";
import Reviews from "./components/Reviews.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.setupReviews = this.setupReviews.bind(this);
  }

  componentDidMount() {
    this.grabReviews();
  }

  async grabReviews() {
    try {
      const response = await axios.get("http://localhost:3000/rooms/reviews");
      console.log("REVIEWS RECEIVED FROM DB!");
      console.log(response.data);
      this.setupReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  setupReviews(data) {
    this.setState({
      reviews: data
    });
  }

  render() {
    return (
      <div>
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("reviews"));
