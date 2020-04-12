module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Joe Gym',
          email: 'test1@test.com',
          age: 42,
          weight_metric: 80,
          height_metric: 1.9,
          date_of_birth: '1997-04-23',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
