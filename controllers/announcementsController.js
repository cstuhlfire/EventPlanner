const db = require("../models");

// Defining methods for the actionsController
module.exports = {
  findAll: function(req, res) {
    db.Announcement
      .find(req.query)
      .sort({ event_id: -1 })
      .then(dbAnnouncementData => res.json(dbAnnouncementData))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Announcement
      .findById(req.params.id)
      .then(dbAnnouncementData => res.json(dbAnnouncementData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Announcement
      .create(req.body)
      .then(dbAnnouncementData => res.json(dbAnnouncementData))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Announcement
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbAnnouncementData => res.json(dbAnnouncementData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Announcement
      .findById({ _id: req.params.id })
      .then(dbAnnouncementData => dbAnnouncementData.remove())
      .then(dbAnnouncementData => res.json(dbAnnouncementData))
      .catch(err => res.status(422).json(err));
  }
};
