import { readdirSync } from 'fs';
import { basename, join } from 'path';

const models = [];

const fileNames = readdirSync(__dirname).filter(
  (file) =>
    file.indexOf('.') !== 0 &&
    file !== basename(__filename) &&
    file.slice(-3) === '.js'
);

fileNames.forEach((file) => {
  const model = require(join(__dirname, file));

  models.push(model.default);
});

console.info(`Successfully imported models: ${fileNames.join(', ')}`);

export default models;
