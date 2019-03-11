const env = 'development';
const config = require('../knexfile');

const knex = require('knex')(config[env]);
const date = knex.fn.now();

const findMostRecent = (id) => {
  console.log('accessing mysql db.....');
  return knex
    .from('reviews')
    .where('listing_id', id)
    .orderBy('created_at', 'desc')
    .then(records => records);
};

const findMostRelevant = (id) => {
  console.log('accessing mysql db.....');
  return knex
    .from('reviews')
    .where('listing_id', id)
    .orderBy('user_rating', 'desc')
    .then(records => records);
};

const findFilteredReviews = (id, query) => {
  return knex
    .from('reviews')
    .where('listing_id', id)
    .andWhere('description', 'like', `%${query}%`)
    .then(records => records);
};

const findAllReviewsPerListing = (id) => {
  console.log('accessing mysql db.....');
  return knex
    .from('reviews')
    .where('listing_id', id)
    .then(records => records);
};

const createReviewByListing = (id, req) => {
  console.log('accessing mysql db.....');
  // console.log(req.body);
  const body = {
    created_at: new Date(),
    description: req.body.description,
    image_url: req.body.image_url,
    user_rating: req.body.user_rating,
    accuracy: req.body.accuracy,
    communication: req.body.communication,
    cleanliness: req.body.cleanliness,
    location: req.body.location,
    check_in: req.body.check_in,
    username: req.body.username,
    value: req.body.value,
    listing_id: id,
  };
  return knex('reviews')
    .insert(body)
    .then(response => response);
};

const updateReview = (id, req) => {
  const body = {
    created_at: new Date(),
    description: req.body.description,
    image_url: req.body.image_url,
    user_rating: req.body.user_rating,
    accuracy: req.body.accuracy,
    communication: req.body.communication,
    cleanliness: req.body.cleanliness,
    location: req.body.location,
    check_in: req.body.check_in,
    username: req.body.username,
    value: req.body.username,
    listing_id: id,
  };
  knex('reviews')
    .where({
      review_id: id,
    })
    .update(body)
    .then(updatedRows => updatedRows);
};

const deleteReview = (id) => {
  knex('reviews')
    .where('review_id', id)
    .del()
    .then((result) => {
      console.log(result);
    });
}

module.exports = knex;

module.exports = {
  findMostRecent,
  findMostRelevant,
  findFilteredReviews,
  findAllReviewsPerListing,
  createReviewByListing,
  updateReview,
  deleteReview,
};
