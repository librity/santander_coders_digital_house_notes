module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Chad',
          email: 'arnold@test.com',
          age: 22,
          weight_imperial: 200,
          height_imperial: 6.1,
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
