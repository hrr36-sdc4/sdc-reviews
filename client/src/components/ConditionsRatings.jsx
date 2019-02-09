import React from "react";

class ConditionsRatings extends React.Component {
  grabStars(rating, condition) {
    let users = this.props.reviews;
    // grab specific condtions rating from each user
    for (let i = 0; i < users.length; i++) {
      rating += users[i][condition];
    }
    // find the average rating from the users
    rating = Math.ceil(rating / users.length);

    // add the appropriate bold stars
    for (let i = 0; i < rating; i++) {
      var boldStar = document.createElement("span");
      boldStar.innerHTML = "&#9733;";
      var accurate = document.getElementsByClassName(condition);
      accurate[0].appendChild(boldStar);
    }

    // add the necessary unfilled stars
    if (rating != 5) {
      for (let i = rating; i < 5; i++) {
        var blankStar = document.createElement("span");
        blankStar.innerHTML = "&#9734;";
        var accurate = document.getElementsByClassName(condition);
        accurate[0].appendChild(blankStar);
      }
    }
  }

  render() {
    return (
      <div className="ConditionsRatings">
        <div className="ratings-container">
          <div>
            <div className="accuracy">
              Accuracy {this.grabStars(0, "accuracy")}
            </div>
            <div />
          </div>
          <div>
            <div className="communication">
              Communication {this.grabStars(0, "communication")}
            </div>
          </div>
          <div>
            <div className="cleanliness">
              Cleanliness {this.grabStars(0, "cleanliness")}
            </div>
          </div>
        </div>
        <div className="ratings-container">
          <div>
            <div className="location">
              Location {this.grabStars(0, "location")}
            </div>
          </div>
          <div>
            <div className="check_in">
              Check-In {this.grabStars(0, "check_in")}
            </div>
          </div>
          <div>
            <div className="value">Value {this.grabStars(0, "value")}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConditionsRatings;
