export default (req, res, next) => {
  const { username } = req.session;

  if (username != undefined && username != null) return next();

  return res.redirect('/sessions/new');
};
