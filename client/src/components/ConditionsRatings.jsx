import React from "react";

const ConditionsRatings = props => {
  let users = props.reviews;
  let accuracy = 0;
  let communication = 0;
  let cleanliness = 0;
  let location = 0;
  let checkIn = 0;
  let value = 0;
  for (let i = 0; i < users.length; i++) {
    accuracy += users[i].accuracy;
    communication += users[i].communication;
    cleanliness += users[i].cleanliness;
    location += users[i].location;
    checkIn += users[i].check_in;
    value += users[i].value;
  }
  console.log(accuracy);
  // &#9734; <- blank star
  // &#9733; <- colored star
  // var accurate = document.getElementsByClassName("accuracy");
  // console.log(accurate);
  // accurate.innerHTML += "U+02605";
  // accuracy = Math.ceil(accuracy / users)

  return (
    <div className="ConditionsRatings">
      <div className="ratings-container">
        <div>
          <div>Accuracy </div>
          <div />{" "}
        </div>
        <div>
          <div>Communication</div> <div>*****</div>{" "}
        </div>
        <div>
          <div>Cleanliness</div> <div>*****</div>{" "}
        </div>
      </div>
      <div className="ratings-container">
        <div>
          <div>Location</div> <div>*****</div>{" "}
        </div>
        <div>
          <div>Check-In</div> <div>*****</div>{" "}
        </div>
        <div>
          <div>Value</div> <div>*****</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ConditionsRatings;
