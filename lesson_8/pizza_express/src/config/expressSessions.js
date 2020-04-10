import session from 'express-session';

export default session({
  secret: process.env.SESSIONS_SECRET,
  resave: true,
  saveUninitialized: true,
});
