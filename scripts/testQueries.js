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


  /////////// Testing Create Event
// let reqbody = {
//   eventName: "Underwater Basket Weaving – World Championship",
//   location: "Atlantis, Online",
//   description: "Join us as we find the world's next best underwater basket weaver!",
//   eventDateTime: Date(2021-05-25),
//   lists: [],
//   announcements: [],
//   comments: []
// }

//   // create: function(req, res) {
// db.Events
//       .create(reqbody)
//       .then(dbEventData => console.log(dbEventData))
//       .catch(err => console.log(err));






/// unpopulated attendees
// db.Events
//       .find({})
//       .sort({ date: -1 })
//       .then(dbEventData => console.log(dbEventData[0].attendees))
//       .catch(err => console.log(err));


// unpopulated lists
// db.Events
//       .find({})
//       .then(dbEventData => console.log(dbEventData))
//       .catch(err => console.log(err));



// db.Users
//       .find({})
//     //   .sort({ date: -1 })
//       .then(dbEventData => console.log(dbEventData))
//       .catch(err => console.log(err));


// selects just the eventName field
// db.Events.findOne().select('eventName, location, description')
//     .then(dbEvent => console.log(dbEvent));


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





//////////////////// Testing delete Event
let reqparamsid = "60ad3abd2059fd0abbe71dc6"

db.Events
      .findById({ _id: reqparamsid })
      .then(dbEventData => dbEventData.remove())
      .then(dbEventData => console.log(dbEventData))
      .catch(err => console.log(err));