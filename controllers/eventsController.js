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
  findById: function(req, res) {
    db.Events
      .findById(req.params.id)
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
      let result = dbEvents.map((event) => 
        (event.attendees).map(((guest) => guest.attendee.username)));
      console.log(result);
      // process.exit(0);
    })
    .catch(err => {
      console.log(err);
      // process.exit(1);
    });

  }



};
