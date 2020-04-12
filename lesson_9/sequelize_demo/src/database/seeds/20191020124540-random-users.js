const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Recpcionist1',
          email: 'test1@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Recpcionist2',
          email: 'test2@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'PersonalTrainer1',
          email: 'test3@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'PersonalTrainer2',
          email: 'test4@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
