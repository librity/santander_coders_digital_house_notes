import Sequelize from 'sequelize';

import { development } from '../config/database';
import models from '../app/models';

class Database {
  constructor() {
    this.init();
    this.loadModels();
  }

  init() {
    this.connection = new Sequelize(development);

    this.connection
      .authenticate()
      .then(() => {
        console.info('Connection has been established successfully.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
  }

  loadModels() {
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
