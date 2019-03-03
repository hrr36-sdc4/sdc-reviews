const createFakeListing = () => ({
  description: 'asdf',
});

const amount = 1000000;

function makeFakeListings() {
  const fakeListings = [];
  for (let i = 0; i < amount; i += 1) {
    fakeListings.push(createFakeListing());
  }
  return fakeListings;
}

exports.seed = function (knex) {
  return knex('listings')
    .del()
    .then(function () {
      return knex('listings').insert(makeFakeListings());
    });
};
