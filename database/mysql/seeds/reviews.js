const faker = require('faker');

const createFakeReview = (iteration, random) => ({
  created_at: faker.date.recent(90),
  description: faker.lorem.sentences(),
  image_url: `https://s3.amazonaws.com/honeyjar-images/${random}.jpg`,
  user_rating: faker.random.number({
    min: 0,
    max: 100,
  }),
  accuracy: faker.random.number({
    min: 3,
    max: 5,
  }),
  communication: faker.random.number({
    min: 3,
    max: 5,
  }),
  cleanliness: faker.random.number({
    min: 3,
    max: 5,
  }),
  location: faker.random.number({
    min: 3,
    max: 5,
  }),
  check_in: faker.random.number({
    min: 1,
    max: 5,
  }),
  username: faker.name.findName(),
  value: faker.random.number({
    min: 2,
    max: 5,
  }),
  listing_id: iteration,
});

function makeFakeReviews(iteration) {
  const fakeReviews = [];
  const desiredFakeReviews = faker.random.number({
    min: 0,
    max: 3,
  });
  for (let i = 0; i < desiredFakeReviews; i += 1) {
    const random = faker.random.number({
      min: 0,
      max: 906,
    });
    fakeReviews.push(createFakeReview(iteration, random));
  }
  return fakeReviews;
}

exports.seed = async function (knex) {
  return knex('reviews')
    .del()
    .then(async function () {
      for (let h = 1; h < 10000001; h++) {
        await knex('reviews').insert(makeFakeReviews(h));
      }
      return Promise.resolve(true);
    });
};
