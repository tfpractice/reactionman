// route middleware to make sure a user is logged in
export const isLoggedIn = (req, res, next) => {
    // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();

 // if they aren't redirect them to the home page
  console.log('you are not authorized for this action');
  res.redirect('/');
};
