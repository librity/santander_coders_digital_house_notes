export default (req, res, next) => {
  res.locals.req = req;

  return next();
};
