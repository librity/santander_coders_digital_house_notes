const Series = require("../models/Serie");

class SeriesControllers {
  list(req, res) {
    return res.send(Series);
  }
  filter(req, res) {
    const { genero } = req.params;

    const filteredSeries = Series.filter(serie => serie.genre === genero);

    return res.send(filteredSeries);
  }
  create(req, res) {
    serie = {
      name: null,
      genre: null
    };

    return res.send(serie);
  }
}

module.exports = SeriesControllers();
