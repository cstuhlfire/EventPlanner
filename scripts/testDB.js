const mongoose = require("mongoose");
const db = require("../models");
const User = require("../models/users");
require('dotenv').config();

// const Regex = require("regex");
const regexEmail1 = /.+\@.+\..+/;
// const regexEmail2 = new Regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
// const regexEmail3 = new Regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mulletevents", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });


  init();
  
  function validateEmail(email) {
    const re = regexEmail1;
    return re.test(String(email).toLowerCase());
}

  function init () {
    let valid = validateEmail("cstuhlfire@gmailcom");
    if (valid) {
      console.log("Yay! Valid email");
    } else {
      console.log("Blerg. Invalid email");
    }
  }


  // Password creation with bcrypt
  // // create a user a new user
  // console.log("new user");

  // // create a user a new user
  // const testUser = new User({
  //   username: "cfire777",
  //   password: "Password777!"
  // });


  // // save user to database
  // console.log("saving");

  // testUser.save()
  // .then((data) => {
  //   console.log(data);
  // }) 
  // .catch((err) => {
  //   console.log(err);
  // });
 

  // console.log("saved");



  // console.log("find");

  // // fetch user and test password verification
  // User.findOne({ username: 'cfire777' })
  //   .then ((user) => {
  //     console.log(user);
  //     user.comparePassword("Password777!", function(err, isMatch) {
  //       if (err) throw err;
  //       console.log("Password777!:", isMatch); 
        
  //     });
  //   })
  //   .then (() => {
  //     console.log("later");
  //   })
  //   .catch ((err) => {
  //     console.log(err);
  //   })
    


    // // test a failing password
    // user.comparePassword("Password777!", function(err, isMatch) {
    //     if (err) throw err;
    //     console.log("Password777!:", isMatch); // -> 123Password: false
    // // });




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



// db.Events.find({})
// .then(data => {

//   console.log(data);

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

process.exit(0);