class StaticController {
  home(req, res) {
    return res.send("Welcome to our beautiful pizzaria!");
  }

  contact(req, res) {
    return res.send("Call 1800-MAMAMIA!");
  }

  about(req, res) {
    return res.send("We're a family business!");
  }
}

module.exports = new StaticController();
