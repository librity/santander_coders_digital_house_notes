class StaticController {
  home(req, res) {
    res.send("Welcome to our beautiful pizzaria!");
  }

  contact(req, res) {
    res.send("Call 1800-MAMAMIA!");
  }

  about(req, res) {
    res.send("We're a family business!");
  }
}

module.exports = new StaticController();
