const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();
const eventsData = require("./eventsData");

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

loadEvents();

function loadEvents() {
    console.log(eventsData);
    
    db.Events
      .deleteMany({})
      .then(() => db.Events.collection.insertMany(eventsData))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });

}

module.exports = {loadEvents};


