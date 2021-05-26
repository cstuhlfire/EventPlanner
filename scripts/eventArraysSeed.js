const mongoose = require("mongoose");
const db = require("../models");
require("dotenv").config();

// Create attendees for events

// Connect to mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mulletevents",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Connection to Events collection
user1 = "60adf0e185de061214353e42";
user2 = "60adf0e185de061214353e43";
user3 = "60adf0e185de061214353e44";
user4 = "60adf0e185de061214353e45";
user5 = "60adf0e185de061214353e46";
user6 = "60adf0e185de061214353e47";

eventId1 = "60ae0291c4b66d34d0cce0b1";
eventId2 = "60ae0291c4b66d34d0cce0b2";
eventId3 = "60ae0291c4b66d34d0cce0b3";
eventId4 = "60ae0291c4b66d34d0cce0b4";

let eventIds = [eventId1,
                eventId2,
                eventId3,
                eventId4
              ];   

let body = {
  attendees: [
    { attendee: user1, host: true },
    { attendee: user2, host: false },
    { attendee: user3, host: false },
    { attendee: user4, host: false },
    { attendee: user5, host: false },
    { attendee: user6, host: false },
  ],
};

// Attendees
// Add attendees for each event
for (let i = 0; i < eventIds.length; i++) {
    let eventId = eventIds[i];

    //Create new guest list
    db.Events.findByIdAndUpdate(
      { _id: eventId },
      { $push: { attendees: body.attendees } },
      { new: true }
    )
      .then((data) => {
        console.log(data);
        process.exit(0);
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
}

//Lists
// List and Items test data
body = {
  listName: "Games",
  items: [
    {itemName: "Darts", assignedTo: user1, status: "needed", assigned: true},
    {itemName: "Jenga", assignedTo: user3, status: "needed", assigned: true},
    {itemName: "Slack Line", assignedTo: user4, status: "needed", assigned: true}
  ]};


    // Create new event list 
    db.Events.findByIdAndUpdate({_id: eventId1},
      {$push: {lists: {listName: body.listName}}})
      .then((data) => {
        console.log(data);
        process.exit(0);
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });


    // add list items
    db.Events.updateOne({_id: eventId1}, {
        $push: {"lists.$[list].items": body.items}
        }, {
          arrayFilters: [{
            "list.listName": "Games" 
            }]
        })
      .then((data) => {
        console.log(data);
        process.exit(0);
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });


body = {
  listName: "Food",
  items: [
    {itemName: "Cake", assignedTo: user6, status: "ordered", assigned: true},
    {itemName: "Fruit", assignedTo: user5, status: "ordered", assigned: true},
    {itemName: "Snacks", assignedTo: user4, status: "needed", assigned: true}
  ]};


    // Create new event list 
    db.Events.findByIdAndUpdate({_id: eventId1},
      {$push: {lists: {listName: body.listName}}})
      .then((data) => {
        console.log(data);
        process.exit(0);
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });


    // add list items
    db.Events.updateOne({_id: eventId1}, {
        $push: {"lists.$[list].items": body.items}
        }, {
          arrayFilters: [{
            "list.listName": "Food" 
            }]
        })
      .then((data) => {
        console.log(data);
        process.exit(0);
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });


body = {
  listName: "Supplies",
  items: [
    {itemName: "Party hats", assignedTo: user4, status: "ordered", assigned: true},
    {itemName: "Paper products", assignedTo: user5, status: "ordered", assigned: true},
    {itemName: "Decorations", assignedTo: user4, status: "needed", assigned: true}
  ]};


// Create new event list 
db.Events.findByIdAndUpdate({_id: eventId1},
  {$push: {lists: {listName: body.listName}}})
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });


// add list items
db.Events.updateOne({_id: eventId1}, {
    $push: {"lists.$[list].items": body.items}
    }, {
      arrayFilters: [{
        "list.listName": "Supplies" 
        }]
    })
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });


// Add announcements
// Announcements seed data
let bodyAn1 = {
      announcements: [
        {author:  user1, text: "Cake and icecream are at 4pm."},
        {author:  user5, text: "Great news! We will have lunch with the tigers!!"},
        {author:  user5, text: "Sign up to bring snacks"}
      ]};

let bodyAn2 = {
      announcements: [
        {author:  user1, text: "Dress is casual."},
        {author:  user5, text: "Bring graduation gown for pics."}
      ]};

let bodyAn3 = {
      announcements: [
        {author:  user3, text: "Our next meeting will feature a speaker from Napa Valley."},
        {author:  user5, text: "You can order cases or bottles from the Napa vinyard."}
      ]};

let bodyAn4 = {
      announcements: [
        {author:  user3, text: "Next months book: The Shining, by Stephen King."},
      ]};

  createAnnouncements(bodyAn1, eventId1);
  createAnnouncements(bodyAn2, eventId2);
  createAnnouncements(bodyAn3, eventId3);
  createAnnouncements(bodyAn4, eventId4);

   // Create new announcements
  function createAnnouncements(body, ev){
    db.Events.findByIdAndUpdate({_id: ev},
        {$push: {announcements: body.announcements}},
        {new: true})
        .then((data) => {
          console.log(data);
          process.exit(0);
        })
        .catch((err) => {
          console.log(err);
          process.exit(1);
        });
   }  
