const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();
const listsSeed = require("./listsData");

// Create users and events collections from data models
// and upload seed data to mongoose

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mulletevents", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });

// Connection to Users collection, removes collection and 
// recreates it with seed data

db.Lists
  .remove({})
  .then(() => db.Lists.collection.insertMany(listsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
