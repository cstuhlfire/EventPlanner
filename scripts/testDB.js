const mongoose = require("mongoose");
const db = require("../models");
const User = require("../models/users");
require('dotenv').config();

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mulletevents", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });

  // create a user a new user
let testUser = new db.Users({
  username: "jmar777",
  password: "Password"
});

// save user to database
testUser.save()
  .then (newUser => {
    console.log(newUser);

  });

// fetch user and test password verification
// db.Users.findOne({ username: 'jmar777' }, function(err, user) {
//   if (err) throw err;

//   // test a matching password
//   user.comparePassword('Password123', function(err, isMatch) {
//       if (err) throw err;
//       console.log('Password123:', isMatch); // -> Password123: true
//   });

//   // test a failing password
//   user.comparePassword('123Password', function(err, isMatch) {
//       if (err) throw err;
//       console.log('123Password:', isMatch); // -> 123Password: false
//   });
// });

  db.Users.findOne({username: "jmar777"})
  .then(dbUsers => {
    console.log(dbUsers);
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

// db.Events.find({}).populate("attendees.attendee")
// .then(dbEvents => {
//   let result = dbEvents.map((event) => 
//     (event.attendees).map(((guest) => guest.attendee.username)));
//   console.log(result);
//   process.exit(0);
// })
// .catch(err => {
//   console.log(err);
//   process.exit(1);
// });

// db.Lists.findOne({})
// .then(lists => {

//   // let test = lists.map((list) => list.items)
//   let test = lists.items.map((itm) => itm);
//   console.log(test);

//   process.exit(0);
// })
// .catch(err => {
//   console.log(err);
//   process.exit(1);
// });

// db.Events.findOne()
//   .populate({
//     path: "lists.items",
//     populate: "assignedTo"
//   })
//   .populate("attendees.attendee")
//   .populate("announcements.author")
//   .populate("comments.author")
  
//  .then(dbEvents => {

//     console.log(dbEvents);
//     dbEvents.lists.forEach((list) => console.log(list.items));
//     dbEvents.attendees.forEach((attendee) => console.log(attendee));
//     dbEvents.announcements.forEach((announcement) => console.log(announcement));
//     dbEvents.comments.forEach((comment) => console.log(comment));

   
//   process.exit(0);
// })
// .catch(err => {
//   console.log(err);
//   process.exit(1);
// });
