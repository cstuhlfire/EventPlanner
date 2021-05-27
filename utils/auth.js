const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      return false;
      // res.redirect('/login');
    } else {
      return true;
      // next();
    }
  };
  
  module.exports = withAuth;