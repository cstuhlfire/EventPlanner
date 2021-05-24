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
    db.Event
      .findById(req.params.id)
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Event
      .create(req.body)
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbEventData => dbEventData.remove())
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  }
};
