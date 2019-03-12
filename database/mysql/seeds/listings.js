const createFakeListing = () => ({
  description: 'asdf',
});

const amount = 10000000;

function makeFakeListings() {
  const fakeListings = [];
  for (let i = 0; i < amount; i += 1) {
    fakeListings.push(createFakeListing());
  }
  return fakeListings;
}

exports.seed = async function (knex) {
  var rows = makeFakeListings();
  var chunkSize = 100000;
  await knex.batchInsert('listings', rows, chunkSize)
    .then(async function () {
      return Promise.resolve(true);
    })
    .catch(function (error) {
      console.log(error);
    });
};
