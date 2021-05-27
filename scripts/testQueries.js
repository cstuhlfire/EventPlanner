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


  /////////// Testing Create Event ----------- Success
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


// selects just the eventName field
// db.Events.findOne().select('eventName, location, description')
//     .then(dbEvent => console.log(dbEvent));


// populated findAllEvents -------- Success
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


/////////////////////// Event findEventById ------------------- Success

// db.Events.findOne({id: req.params.id})
//     .populate({
//       path: "lists.items",
//       populate: "assignedTo"
//     })
//     .populate("attendees.attendee")
//     .populate("announcements.author")
//     .populate("comments.author")
    
//     .then(dbEvent => {

//       console.log(dbEvent);
//       console.log("entire event instance: \n-----------------\n" + dbEvent);
//       dbEvent.lists.forEach((list) => console.log("Lists for event instance: \n-----------------\n" +list.items));
//       dbEvent.attendees.forEach((attendee) => console.log("Attendee (each) for event instance: \n-----------------\n" +attendee));
//       dbEvent.announcements.forEach((announcement) => console.log("Announcement (each) for event instance: \n-----------------\n" +announcement));
//       dbEvent.comments.forEach((comment) => console.log("Comment (each) for event instance: \n-----------------\n" +comment));

//       res.json(dbEventData)

//     })
//     .catch(err => {
//       console.log(err);
//       res.status(422).json(err);
//     });

// //////////////////// Testing delete Event --------- Success
// let reqparamsid = "60ad3abd2059fd0abbe71dc6"

// db.Events
//       .findById({ _id: reqparamsid })
//       .then(dbEventData => dbEventData.remove())
//       .then(dbEventData => console.log(dbEventData))
//       .catch(err => console.log(err));



///////////// Lists
/////////////////////////////////////////////
/////////////////////////////////////////////


////////// Testing add list to event ID passed in ------ Success

// let reqparamsid1 = "60ad393469e56e0a903434bc"
// let reqbody1 = {
//     listName: "Food",
//   }
// db.Events
//     .updateOne({ _id: reqparamsid1 }, {$push: { lists: {listName: reqbody1.listName, items: []}}})
//     .then(dbEventData => console.log(dbEventData))
//     .catch(err => console.log(err));

/////////// Testing add single list items to existing list with single item and listname passed in ------ Success
// let reqparamsid = "60ad393469e56e0a903434bc"
// let reqbody = {
//     listName: "Food",
//     list_id: "60ae5f1b52abc815710cb370",
//     items: [  {itemName: "Cookies", assignedTo: "60ad0b20bbba44045a0a0eb0", status: "needed", assigned: true},
//               {itemName: "Pizza", assignedTo: "60ad0b20bbba44045a0a0eb1", status: "needed", assigned: true}]
//   }

// db.Events
//       .updateOne({ _id: reqparamsid }, {
//         $push: { "lists.$[list].items": reqbody.items }
//       }, {
//         arrayFilters: [{
//           "list.listName": reqbody.listName,
//           "list._id": reqbody.list_id
//         }]
//       })
//       .then(dbEventData => console.log(dbEventData))
//       .catch(err => console.log(err));

/////////// Testing update on single list items to existing list with single item and listname passed in ------ Success
///// Takes in entire item to update and item._id in order to do so
// let reqparamsid = "60ad393469e56e0a903434bc"
// let reqbody = {
//     listName: "Food",
//     list_id: "60ae5f1b52abc815710cb370",
//     item: {itemName: "Pizza", assignedTo: "60ad0b20bbba44045a0a0eb1", status: "needed", assigned: false},
//     item_id: "60ae8e8fec67d61a9ea54c8a"
// }


// db.Events
//       .findByIdAndUpdate({ _id: reqparamsid }, {
//         $set: { "lists.$[list].items.$[item]": reqbody.item }
//       }, {
//         arrayFilters: [{
//           "list.listName": reqbody.listName,
//           "list._id": reqbody.list_id
//         },{
//           "item._id": reqbody.item_id
//         }]
//       })
//       .then(dbEventData => console.log(dbEventData))
//       .catch(err => console.log(err));


///////////// Testing add list items to event ID and listname passed in ---------- Success
// let reqparamsid = "60ad3bd829e84e0afd34226f"
// let reqbody = {
//     listName: "Needs:",
//     items: [  {itemName: "Drinks", assignedTo: "60ad0b20bbba44045a0a0eb1", status: "needed", assigned: true},
//               {itemName: "Projector", assignedTo: "60ad0b20bbba44045a0a0eb1", status: "needed", assigned: true}, 
//               {itemName: "Snacks", assignedTo: "60ad0b20bbba44045a0a0eb1", status: "needed", assigned: true}, 
//               {itemName: "Cupware", assignedTo: "60ad0b20bbba44045a0a0eb1", status: "needed", assigned: true}, 
//               {itemName: "Plateware", assignedTo: "60ad0b20bbba44045a0a0eb1", status: "needed", assigned: true}]
//   }

// db.Events
//       .findById({ _id: reqparamsid })
//       .then(dbEventData => dbEventData.update({lists: { listName: reqbody.listName, items: reqbody.items}}))
//       .then(dbEventData => console.log(dbEventData))
//       .catch(err => console.log(err));
///////////////////////////////////


///// Testing remove single list ------- Success
// let eventId = "60ad393469e56e0a903434bc"
// let listId = "60ae5f8c0e2223159c446885"
 
// db.Events
//     .updateOne({ _id: eventId }, {$pull: { lists: {_id: listId}}})
//     .then(dbEventData => console.log(dbEventData))
//     .catch(err => console.log(err));

/////////////////

/////////// Testing remove single list items to existing list with single item and listname passed in ------ Success
// eventId = "60ad393469e56e0a903434bc"
// let reqbody = {
//     listName: "Food",
//     listId: "60ae5f1b52abc815710cb370",
//     itemId:  "60ae5fc8d6dbfb15a6c987bd"
// }

// db.Events
//       .updateOne({ _id: eventId }, {
//         $pull: { "lists.$[list].items": {_id: reqbody.itemId} }
//       }, {
//         arrayFilters: [{
//           "list.listName": reqbody.listName,
//           "list._id": reqbody.listId
//         }]
//       })
//       .then(dbEventData => console.log(dbEventData))
//       .catch(err => console.log(err));




///////////////////////Comments
/////////////////////////////////////////////
/////////////////////////////////////////////

/////////// Testing Add Comments ------------------ Success

// Comments test data
const eventId = "60ad393469e56e0a903434bc";
const body = {
    comments: [
      {author:  "60ad0b20bbba44045a0a0eb0", text: "What does Jeremy want for his bday this year?"},
      {author:  "60ad0b20bbba44045a0a0eb1", text: "Legos, Legos, Legos, and tigers."},
    ]}

db.Events.findByIdAndUpdate({_id: eventId},
  {$push: {comments: body.comments}},
  {new: true})
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
/////////////////////////////////////////////////

////////////// Testing Delete Comment --------- Success
////Event id
const eventId = "60ad393469e56e0a903434bc";
////Comment id
const commentId = "60ae62a6d6b75315f82587e5"

db.Events
  .updateOne({ _id: eventId }, {$pull: { comments: {_id: commentId}}})
  .then(dbEventData => console.log(dbEventData))
  .catch(err => console.log(err));
///////////////////////////////////////






//////////// Announcements
/////////////////////////////////////////////
/////////////////////////////////////////////

// /////// //////// Testing Add Announcement ------- Success
  // Announcements test data
//   const eventId = "60ad393469e56e0a903434bc";
//   const body = {
//       announcements: [
//         {author:  "60ad0b20bbba44045a0a0eb0", text: "Cake and icecream are at 4pm."},
//         {author:  "60ad0b20bbba44045a0a0eb1", text: "Great news! We will have lunch with the tigers!!"},
//       ]}

// db.Events.findByIdAndUpdate({_id: eventId},
//     {$push: {announcements: body.announcements}},
//     {new: true})
//     .then((data) => {
//       console.log(data);
//       process.exit(0);
//     })
//     .catch((err) => {
//       console.log(err);
//       process.exit(1);
//     });
/////////////////////////////////


////////////// Testing Delete Announcement --------- Success
// ////Event id
// const eventId = "60ad393469e56e0a903434bc";
// ////Comment id
// const announcementId = "60ae7ce7bc24ae18c91532c1"

// db.Events
//   .updateOne({ _id: eventId }, {$pull: { announcements: {_id: announcementId}}})
//   .then(dbEventData => console.log(dbEventData))
//   .catch(err => console.log(err));
///////////////////////////////////////





////////////////////// Attendees 
/////////////////////////////////////////////
/////////////////////////////////////////////

// /////// //////// Testing Add Attendee ------- Success
//   // Announcements test data
//   const eventId = "60ad393469e56e0a903434bc";
//   const body = {
//       attendee:  "60ad0b20bbba44045a0a0eaf", host: false
//       }

// db.Events.findByIdAndUpdate({_id: eventId},
//     {$push: {attendees: body}},
//     {new: true})
//     .then((data) => {
//       console.log(data);
//       process.exit(0);
//     })
//     .catch((err) => {
//       console.log(err);
//       process.exit(1);
//     });
/////////////////////////////////


////////////// Testing Delete Attendee --------- Success
// ////Event id
// const eventId = "60ad393469e56e0a903434bc";
// ////Comment id
// const attendeeId = "60ae7ed3ee8e1a1900beabac"

// db.Events
//   .updateOne({ _id: eventId }, {$pull: { attendees: {_id: attendeeId}}})
//   .then(dbEventData => console.log(dbEventData))
//   .catch(err => console.log(err));
///////////////////////////////////////