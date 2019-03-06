module.exports = {
  fields: {
    review_id: 'int',
    username: 'text',
    timestamp: 'timestamp',
    description: 'text',
    image_url: 'text',
    user_rating: 'int',
    accuracy: 'int',
    communication: 'int',
    cleanliness: 'int',
    location: 'int',
    check_in: 'int',
    value: 'int',
  },
  key: ['review_id'],
};
