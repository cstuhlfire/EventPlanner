const db = require("../models");

// Defining methods for the listsController
module.exports = {
  findAll: function(req, res) {
    db.Event
      .find({ 'Event.lists': `${req.params}` })
      .sort({ _id: -1 })
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  },
  findList: function(req, res) {
    db.Event
    // req.body should be the name of the list
      .findOne({ listName: req.body })
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Event
      .create(req.body)
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Event
        // req.params.id should be event._id req.body should be name of new list
      .findOneAndUpdate(
        { _id: req.params.id },
        { $push: { lists: req.body } }
        )
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event
        //req.body should be the list name
      .findByIdAnd({ lists: req.body })
      .then(dbListData => dbListData.remove())
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  }
};
