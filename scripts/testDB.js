const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mulletevents", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });


db.Events.find({}).populate("attendees.attendee")
.then(dbEvents => {
  console.log(dbEvents);
  process.exit(0);
})
.catch(err => {
  console.log(err);
  process.exit(1);
});