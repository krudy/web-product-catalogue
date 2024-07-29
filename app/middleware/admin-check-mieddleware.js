module.exports = function (req, res, next) {
    if (!req.session.user) {
      res.redirect('/login');
    }
    if (!req.session.user.isAdmin) {
      res.redirect('/');
    }
    next();
  }
