const { findMostRelevant } = require("../database-pg/index.js");
const axios = require("axios");
var request = require("request");
var config = require("../knexfile.js");
var env = "development";
var knex = require("knex")(config[env]);

describe("Testing Postgres database", () => {
  // beforeEach(() => {

  // });

  afterAll(() => knex.destroy()); // knex.migrate.lates
  // knex.migrate.latest([config]);
  // afterAll(() => setTimeout(() => knex.destroy(), 2000));

  test("gets 10 most relevant users from db", async done => {
    await findMostRelevant().then(result => {
      result = result.slice(0, 10);
      expect(result).toHaveLength(10);
      done();
    });
  });

  test("each users accuracy rating is between 1 - 5", async done => {
    await findMostRelevant().then(results => {
      results = results.slice(0, 10);
      var accurate = 0;
      for (let i = 0; i < results.length; i++) {
        if (results[i].accuracy > 0 && results[i].accuracy < 6) {
          accurate++;
        }
      }
      expect(accurate).toBe(10);
      done();
    });
  });

  test("each users should have a different review id", async done => {
    await findMostRelevant().then(results => {
      let accurate = false;
      if (results[0].review_id !== results[1].review_id) {
        accurate = !accurate;
      }
      expect(accurate).toBeTruthy();
      done();
    });
  });
});

describe("testing api calls", () => {
  test("should be able to GET request to api and grab most recent user reviews", () => {
    axios.get("http://localhost:3000/rooms/reviews/recent").then(results => {
      let parsed_results = JSON.parse(results);
      expects(parsed_results).toBe(Array);
    });
  });

  test("should be able to GET request to api and grab most relevant user reviews", () => {
    axios.get("http://localhost:3000/rooms/reviews/recent").then(results => {
      let parsed_results = JSON.parse(results);
      expects(parsed_results[0].user_rating).toBe(100);
    });
  });
});

// test("should respond to GET request for /rooms/reviews/recent with a 200 satus code", async done => {
//   request("http://127.0.0.1:3000/rooms/reviews/recent", function(err, res) {
//     expect(res.statusCode).toEqual(200);
//   });
// });

// afterAll(done => {
//   done();
// });
