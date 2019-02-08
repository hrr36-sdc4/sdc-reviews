var config = require("../knexfile.js");
var env = "development";
var knex = require("knex")(config[env]);
const { findMostRelevant10 } = require("../database-pg/index.js");
var request = require("request");

describe("testing db", () => {
  afterAll(() => knex.destroy());

  test.only("gets 10 most relevant users from db", async done => {
    let results = await findMostRelevant10();
    expect(results).toHaveLength(10);
    done();
  });

  test.only("each users accuracy rating is between 1 - 5", async done => {
    let results = await findMostRelevant10();
    var accurate = 0;
    for (let i = 0; i < results.length; i++) {
      if (results[i].accuracy > 0 && results[i].accuracy < 6) {
        accurate++;
      }
    }
    expect(accurate).toBe(10);
    done();
  });

  test.only("each users should have a different review id", async done => {
    let results = await findMostRelevant10();
    let accurate = false;
    if (results[0].review_id !== results[1].review_id) {
      accurate = !accurate;
    }
    expect(accurate).toBeTruthy();
    done();
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
