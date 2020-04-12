module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Jane Gym',
          email: 'test2@test.com',
          age: 30,
          weight_metric: 120,
          height_metric: 1.5,
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
