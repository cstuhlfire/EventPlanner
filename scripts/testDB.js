const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mulletevents", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });


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

db.Events.findOne()
  .populate({
    path: "lists.items",
    populate: "assignedTo"
  })
  .populate("attendees.attendee")
  .populate("announcements.author")
  .populate("comments.author")
  
 .then(dbEvents => {

    console.log(dbEvents);
    dbEvents.lists.forEach((list) => console.log(list.items));
    dbEvents.attendees.forEach((attendee) => console.log(attendee));
    dbEvents.announcements.forEach((announcement) => console.log(announcement));
    dbEvents.comments.forEach((comment) => console.log(comment));

   
  process.exit(0);
})
.catch(err => {
  console.log(err);
  process.exit(1);
});
