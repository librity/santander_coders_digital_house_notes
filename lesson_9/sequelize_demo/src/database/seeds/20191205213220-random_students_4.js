module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Christina',
          email: 'test4@test.com',
          age: 25,
          weight_imperial: 80,
          height_imperial: 5.2,
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
