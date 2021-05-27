const express = require("express");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware
const store = new MongoDBStore({
  uri: 'mongodb://localhost/mulletevents',
  collection: 'mulletSession'
});

// // Catch MongoDBStore errors
store.on('error', function(error) {
  console.log(error);
});
 
// Uss express session to track session's login status
app.use(session({
  secret: 'super secret secret',
  cookie: {
    // 1 hour
    maxAge: 1000 * 60 * 60 * 1
  },
  store: store,

  resave: false,
  saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mulletevents");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



 

 