class StaticPagesController {
  home(req, res) {
    const { name } = req.query;

    return res.render('index', {
      products: ['produtos1', 'produtos2', 'produtos3', 'produtos4'],
      test: name,
    });
  }
}

export default new StaticPagesController();
