module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      date_of_birth: {
        type: Sequelize.DATEONLY,
      },
      age: {
        type: Sequelize.INTEGER,
      },

      weight_metric: {
        type: Sequelize.FLOAT,
      },
      weight_imperial: {
        type: Sequelize.FLOAT,
      },
      height_metric: {
        type: Sequelize.FLOAT,
      },
      height_imperial: {
        type: Sequelize.FLOAT,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('students');
  },
};
