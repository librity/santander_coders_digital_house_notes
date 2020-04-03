class StaticPagesController {
  home(req, res) {
    const { name } = req.query;

    return res.render('staticPages/index', {
      products: ['produtos1', 'produtos2', 'produtos3', 'produtos4'],
      test: name,
    });
  }
}

export default new StaticPagesController();
