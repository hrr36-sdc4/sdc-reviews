const express = require('express');

const app = express();
const cors = require('cors');
const redis = require("redis");

let client = redis.createClient();
const bodyParser = require('body-parser');
const {
  findMostRecent,
  findMostRelevant,
  findFilteredReviews,
  findAllReviewsPerListing,
  createReviewByListing,
  updateReview,
  deleteReview,
} = require('../database/index.js');

// for migrating and seeding db
// var config = require('../knexfile.js');
const env = 'development';
// var knex = require('knex')(config[env]);

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(__dirname + '/../client/dist'));

// // seed db
// knex.migrate.latest([config]).then(function () {
//   return knex.seed.run();
// });
// create redis middleware
let redisMiddleware = (req, res, next) => {
  let key = "__expIress__" + req.originalUrl || req.url;
  client.get(key, function (err, reply) {
    if (reply) {
      res.send(reply);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        client.set(key, JSON.stringify(body));
        res.sendResponse(body);
      }
      next();
    }
  });
};


app.get('/rooms/:id/reviews/recent', redisMiddleware, (req, res) => {
  let {
    id,
  } = req.params;
  console.log('Inside server for get request');
  findMostRecent(id).then((records) => {
    console.log('retrieved recent reviews from DB!!!');
    return res.status(200).send(records);
  });
});

app.get('/rooms/:id/reviews/relevant', redisMiddleware, (req, res) => {
  let {
    id,
  } = req.params;
  console.log('Inside server for relevant get request');
  findMostRelevant(id).then((records) => {
    console.log('retrieved relevant reviews from DB!!!');
    return res.status(200).send(records);
  });
});

app.get('/rooms/:id/reviews/filter', redisMiddleware, (req, res) => {
  let {
    id
  } = req.params;
  let {
    query,
  } = req.query.data;
  console.log(id, query);
  console.log('on server side!!!');
  findFilteredReviews(id, query).then(records => res.status(200).send(records));
});

app.get('/rooms/:id/reviews', redisMiddleware, (req, res) => {
  let {
    id
  } = req.params;
  console.log(id);
  console.log('on server side!!!');
  findAllReviewsPerListing(id).then(records => res.status(200).send(records));
});

app.post('/rooms/:id/reviews', redisMiddleware, (req, res) => {
  let {
    id
  } = req.params;
  console.log('on server side!!!');
  createReviewByListing(id, req).then(records => res.status(200).send(records));
});

app.post('/rooms/:id/reviews', (req) => {
  let {
    id
  } = req.params;
  console.log('on server side!!!');
  createReviewByListing(id, req).then(res => res.status(200).send(req.body));
});

app.put('/reviews/:id', redisMiddleware, (req, res) => {
  let {
    id
  } = req.params;
  console.log('on server side!!!');
  updateReview(id, req).then(records => res.status(200).send(records));
});

app.delete('/reviews/:id', redisMiddleware, (req, res) => {
  console.log(req.params.id)
  let {
    id
  } = req.params;
  console.log('on server side!!!');
  deleteReview(id);
});

app.listen(port);
console.log('Listening on port', port);
