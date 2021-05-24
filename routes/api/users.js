const router = require('express').Router();
const usersController = require("../../controllers/usersController");

///// Need to require session on server.js and include following 
///// boiler plate to server.js file
//  More boilerplate options for session({sess}) info below, see:
  // * https://www.npmjs.com/package/express-session#resave
  // * https://www.npmjs.com/package/express-session#saveuninitialized
//////////////////////////////////////
//////////////////////////////////////////////////////

// const express = require('express');
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
 

// const store = new MongoDBStore({
//   uri: 'mongodb://localhost/mullet',
//   collection: 'mulletSession'
// });
 
// // Catch errors
// store.on('error', function(error) {
//   console.log(error);
// });
 
// app.use(session({
//   secret: 'super secret secret',
//   cookie: {
//     // 1 hour
//     maxAge: 1000 * 60 * 60 * 1
//   },
//   store: store,

//   resave: false,
//   saveUninitialized: true
// }));
 


////////////////////////////////////////////////////// 


// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);


  // Matches with "/api/users/login"
  // Alternative with async/await function:
  // .post(usersController.alogin) 
// router.route("/login")
  // .post(usersController.login);

// Matches with "/api/users/logout"
router.route("/logout")
  .post(usersController.logout);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
