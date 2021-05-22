const db = require("../models");

// Defining methods for the listsController
module.exports = {
  findAll: function(req, res) {
    db.List
      .find(req.query)
      .sort({ _id: -1 })
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.List
      .findById(req.params.id)
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.List
      .create(req.body)
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.List
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.List
      .findById({ _id: req.params.id })
      .then(dbListData => dbListData.remove())
      .then(dbListData => res.json(dbListData))
      .catch(err => res.status(422).json(err));
  }
};
