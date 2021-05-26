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
// let user1 = "60adf0e185de061214353e42";
// let user2 = "60adf0e185de061214353e43";
// let user3 = "60adf0e185de061214353e44";
// let user4 = "60adf0e185de061214353e45";
// let user5 = "60adf0e185de061214353e46";
// let user6 = "60adf0e185de061214353e47";
// let eventId1 = "60ae74276d91141fb4379613";
// let eventId2 = "60ae74276d91141fb4379614";
// let eventId3 = "60ae74276d91141fb4379615";
// let eventId4 = "60ae74276d91141fb4379616";

// let eventIds = [eventId1, eventId2, eventId3, eventId4];

let user1 = "";
let user2 = "";
let user3 = "";
let user4 = "";
let user5 = "";
let user6 = "";

let userIds = [];
let eventIds = [];

init();

function init() {

  getEvents();

}

function getUsers() {
  db.Users.find().select("_id") 
  .then((data) => {
    userIds = data.map((da) => (da._id));

    user1 = userIds[0];
    user2 = userIds[1];
    user3 = userIds[2];
    user4 = userIds[3];
    user5 = userIds[4];
    user6 = userIds[5];

    console.log(userIds);

    return userIds;
  });
}

function getEvents() {
  getUsers();
  
  db.Events.find().select("_id") 
  .then((data) => {
    eventIds = data.map((da) => (da._id));

    return eventIds;
  })
  .then((eventIds) => {
    loadAttendees(eventIds);
    loadLists(eventIds);
    loadAnnouncements(eventIds);
    loadComments(eventIds);
  });
}

function loadAttendees(eventIds) {
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

  // // Attendees
  // // Add attendees for each event
  for (let i = 0; i < eventIds.length; i++) {
    let eventId = eventIds[i];

    //Create new guest list
    db.Events.findByIdAndUpdate(
      { _id: eventId },
      { $push: { attendees: body.attendees } }
    )
      .then((data) => {
        console.log(data);
        // process.exit(0);
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
  }
}

function loadLists(eventIds) {
  // Lists
  // List and Items test data
  let bodyList1 = {
    listName: "Games",
    items: [
      {
        itemName: "Darts",
        assignedTo: user1,
        status: "needed",
        assigned: true,
      },
      {
        itemName: "Jenga",
        assignedTo: user3,
        status: "needed",
        assigned: true,
      },
      {
        itemName: "Slack Line",
        assignedTo: user4,
        status: "needed",
        assigned: true,
      },
    ],
  };

  let bodyList2 = {
    listName: "Food",
    items: [
      {
        itemName: "Cake",
        assignedTo: user6,
        status: "ordered",
        assigned: true,
      },
      {
        itemName: "Fruit",
        assignedTo: user5,
        status: "ordered",
        assigned: true,
      },
      {
        itemName: "Snacks",
        assignedTo: user4,
        status: "needed",
        assigned: true,
      },
    ],
  };

  let bodyList3 = {
    listName: "Supplies",
    items: [
      {
        itemName: "Party hats",
        assignedTo: user4,
        status: "ordered",
        assigned: true,
      },
      {
        itemName: "Paper products",
        assignedTo: user5,
        status: "ordered",
        assigned: true,
      },
      {
        itemName: "Decorations",
        assignedTo: user4,
        status: "needed",
        assigned: true,
      },
    ],
  };

  // create list and add items
  let eventId1 = eventIds[0];

  createList(bodyList2, eventId1);
  createList(bodyList1, eventId1);
  createList(bodyList3, eventId1);

  addListItems(bodyList1, eventId1);
  addListItems(bodyList2, eventId1);
  addListItems(bodyList3, eventId1);

  return 1;
}

//Create new event list
function createList(body, ev) {
  db.Events.findByIdAndUpdate(
    { _id: ev },
    { $push: { lists: { listName: body.listName } } }
  )
    .then((data) => {
      console.log(data);
      //process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

// add list items
function addListItems(body, ev) {
  db.Events.updateOne(
    { _id: ev },
    {
      $push: { "lists.$[list].items": body.items },
    },
    {
      arrayFilters: [
        {
          "list.listName": body.listName,
        },
      ],
    }
  )
    .then((data) => {
      console.log(data);
      // process.exit (0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}


function loadAnnouncements(eventIds) {
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
          {author:  user3, text: "Next month's book: The Shining, by Stephen King."},
        ]};

    let eventId1 = eventIds[0];
    let eventId2 = eventIds[1];
    let eventId3 = eventIds[2];
    let eventId4 = eventIds[3];

    createAnnouncements(bodyAn1, eventId1);
    createAnnouncements(bodyAn2, eventId2);
    createAnnouncements(bodyAn3, eventId3);
    createAnnouncements(bodyAn4, eventId4);

    return 1;
  }

  // Create new announcements
  function createAnnouncements(body, ev){
    db.Events.findByIdAndUpdate({_id: ev},
        {$push: {announcements: body.announcements}},
        {new: true})
        .then((data) => {
          console.log(data);
          // process.exit (0);
        })
        .catch((err) => {
          console.log(err);
          process.exit(1);
        });
  }

 function loadComments(eventIds) {

    // Add comments
    // Comments seed data
    let bodyCm1 = {
          comments: [
            {author:  user3, text: "What does Jeremy want for his bday this year?"},
            {author:  user4, text: "Legos, Legos, Legos, and tigers."}
          ]};

    let bodyCm2 = {
          comments: [
            {author:  user1, text: "The Tavern is great. They have fun games!!"},
            {author:  user5, text: "Can't wait."}
          ]};

    let bodyCm3 = {
          comments: [
            {author:  user3, text: "Dress is casual."},
            {author:  user5, text: "Does anyone want to get dinner first?"}
          ]};

    let bodyCm4 = {
          comments: [
            {author:  user3, text: "Please bring ideas for future books to read."},
          ]};

      let eventId1 = eventIds[0];
      let eventId2 = eventIds[1];
      let eventId3 = eventIds[2];
      let eventId4 = eventIds[3];    

      createComments(bodyCm1, eventId1);
      createComments(bodyCm2, eventId2);
      createComments(bodyCm3, eventId3);
      createComments(bodyCm4, eventId4);

      return 1;
    }
    
  // Create new comments
  function createComments(body, ev){
    db.Events.findByIdAndUpdate({_id: ev},
        {$push: {comments: body.comments}},
        {new: true})
        .then((data) => {
          console.log(data);
          // process.exit (0);
        })
        .catch((err) => {
          console.log(err);
          process.exit(1);
        });
  }

