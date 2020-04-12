import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        date_of_birth: Sequelize.DATEONLY,
        weight_metric: Sequelize.INTEGER,
        weight_imperial: Sequelize.INTEGER,
        height_metric: Sequelize.INTEGER,
        height_imperial: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async student => {
      if (student.weight_metric) {
        student.weight_imperial = student.weight_metric * 2.205;
      } else if (student.weight_imperial) {
        student.weight_metric = student.weight_imperial * 0.454;
      }

      student.weight_metric = Math.round(student.weight_metric);
      student.weight_imperial = Math.round(student.weight_imperial);

      if (student.height_metric) {
        student.height_imperial = student.height_metric * 3.281;
      } else if (student.height_imperial) {
        student.height_metric = student.height_imperial * 0.305;
      }

      student.height_metric = Math.round(student.height_metric * 1e2) / 1e2;
      student.height_imperial = Math.round(student.height_imperial * 1e2) / 1e2;

      if (student.date_of_birth) {
        const current_year = new Date().getFullYear();
        const birth_year = new Date(student.date_of_birth).getFullYear();

        student.age = current_year - birth_year;
      }
    });

    return this;
  }
}

export default Student;
