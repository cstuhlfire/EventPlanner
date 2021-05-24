const db = require("../models");

// Defining methods for the actionsController
module.exports = {
  findAll: function(req, res) {
    db.Action
      .find(req.query)
      .sort({ event_id: -1 })
      .then(dbActionData => res.json(dbActionData))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Action
      .findById(req.params.id)
      .then(dbActionData => res.json(dbActionData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Action
      .create(req.body)
      .then(dbActionData => res.json(dbActionData))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Action
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbActionData => res.json(dbActionData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Action
      .findById({ _id: req.params.id })
      .then(dbActionData => dbActionData.remove())
      .then(dbActionData => res.json(dbActionData))
      .catch(err => res.status(422).json(err));
  }
};
