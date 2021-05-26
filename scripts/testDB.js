const mongoose = require("mongoose");
const db = require("../models");
const User = require("../models/users");
require('dotenv').config();

// const Regex = require("regex");
// const regexEmail2 = new Regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
// const regexEmail3 = new Regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const regexEmail1 = /.+\@.+\..+/;
const regexPhone = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mulletevents", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });


  init();
  
  
  function init () {
    let testEmail = "cfire@fire.com";
    let testPhone = "222.888.3343";
    
    validateEmail(testEmail);
    validatePhone(testPhone);
  }
  
  // validate checkString with regexPattern
  function validate(regexPattern, checkString) { 
    return regexPattern.test(String(checkString).toLowerCase());
}

  function validateEmail(testEmail) {
    let reg = /.+\@.+\..+/;
    
    let validEmail = validate(reg, testEmail);
        if (validEmail) {
          console.log("Yay! Valid email");
          return testEmail;
        } else {
          console.log("Blerg. Invalid email");
          return "";
        }
  }

  function validatePhone(testPhone) {
    let reg = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    
    // strip non numeric characters and spaces
    let digits = testPhone.replace(/\D/g, "");

    let validPhone = validate(reg, digits);

    console.log(digits);
    if (validPhone) {
      console.log("Yay! Valid phone");
      return digits;
    } else {
      console.log("Blerg. Invalid phone");
      return 0;
    }
  }




  // Workout.findByIdAndUpdate(req.params.id, 
  //       { $push: { exercises: req.body } }, 
  //       { new: true })
  // .then(dbWorkout => {
  //   res.json(dbWorkout);
  // })
  // .catch(err => {
  //   res.json(err);
  // });

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