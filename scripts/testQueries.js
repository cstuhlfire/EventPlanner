const mongoose = require("mongoose");
const db = require("../models");
const { populate } = require("../models/users");
require('dotenv').config();

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mulletevents", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });



/// unpopulated attendees
// db.Events
//       .find({})
//       .sort({ date: -1 })
//       .then(dbEventData => console.log(dbEventData[0].attendees))
//       .catch(err => console.log(err));


//// unpopulated lists
// db.Events
//       .find({})
//       .sort({ date: -1 })
//       .then(dbEventData => console.log(dbEventData[0].lists[0].items))
//       .catch(err => console.log(err));



// db.Users
//       .find({})
//     //   .sort({ date: -1 })
//       .then(dbEventData => console.log(dbEventData))
//       .catch(err => console.log(err));


// selects just the eventName field
db.Events.findOne().select('eventName, location, description')
    .then(dbEvent => console.log(dbEvent));


// populated Events
// // db.Events.find()
// db.Events.findOne()
//   .populate({
//       path: "lists.items",
//       populate: "assignedTo"
//     })
//   .populate("attendees.attendee")
//   .populate("announcements.author")
//   .populate("comments.author")
//   .then(dbEvents => {
//     console.log(dbEvents, dbEvents.lists);
//     // console.log(dbEvents.lists[1].items);
//     // dbEvents.attendees.forEach((attendee) => console.log(attendee));
//     // let details = dbEvents.lists.map((list) => console.log(list.items));
//     // let person = details.map((detail) => console.log(detail));
//   process.exit(0);
// })
// .catch(err => {
//   console.log(err);
//   process.exit(1);
// });






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