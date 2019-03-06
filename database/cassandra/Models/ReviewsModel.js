module.exports = {
  fields: {
    review_id: 'int',
    accuracy: 'int',
    check_in: 'int',
    cleanliness: 'int',
    communication: 'int',
    created_at: 'timestamp',
    description: 'text',
    image_url: 'text',
    listing_id: 'int',
    location: 'int',
    user_rating: 'int',
    username: 'text',
    value: 'int',
  },
  key: ['review_id'],
};
