const db = require("../models");

// Calling Schema Event for now
// Defining methods for the eventsController
module.exports = {
  findAll: function(req, res) {
    db.Events
      .find(req.query)
      .sort({ date: -1 })
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Events
      .create(req.body)
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Events
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Events
      .findById({ _id: req.params.id })
      .then(dbEventData => dbEventData.remove())
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  findAllEvents: function (req, res) {
    console.log("entered eventsController/findAllEvents")
    db.Events.find({})
    .populate({
      path: "lists.items",
      populate: "assignedTo"
    })
    .populate("attendees.attendee")
    .populate("announcements.author")
    .populate("comments.author")
    .populate("attendees.attendee")
    .then(dbEvents => {

      console.log(dbEvents);
      dbEvents.forEach(dbEvent => {
         
        console.log("entire event instance: \n-----------------\n" + dbEvent);
        dbEvent.lists.forEach((list) => console.log("Lists for event instance: \n-----------------\n" +list.items));
        dbEvent.attendees.forEach((attendee) => console.log("Attendee (each) for event instance: \n-----------------\n" +attendee));
        dbEvent.announcements.forEach((announcement) => console.log("Announcement (each) for event instance: \n-----------------\n" +announcement));
        dbEvent.comments.forEach((comment) => console.log("Comment (each) for event instance: \n-----------------\n" +comment));
       
       }
      )
      res.json(dbEvents);
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
  },
  findById: function(req, res) {
    console.log("entered eventsController/findById")
    db.Events.findOne({id: req.params.id})
    .populate({
      path: "lists.items",
      populate: "assignedTo"
    })
    .populate("attendees.attendee")
    .populate("announcements.author")
    .populate("comments.author")
    
    .then(dbEvent => {

      console.log(dbEvent);
      console.log("entire event instance: \n-----------------\n" + dbEvent);
      dbEvent.lists.forEach((list) => console.log("Lists for event instance: \n-----------------\n" +list.items));
      dbEvent.attendees.forEach((attendee) => console.log("Attendee (each) for event instance: \n-----------------\n" +attendee));
      dbEvent.announcements.forEach((announcement) => console.log("Announcement (each) for event instance: \n-----------------\n" +announcement));
      dbEvent.comments.forEach((comment) => console.log("Comment (each) for event instance: \n-----------------\n" +comment));

      res.json(dbEventData)

    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });

  }



};
