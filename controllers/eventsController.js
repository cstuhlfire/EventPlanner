const db = require("../models");

// Calling Schema Event for now
// Defining methods for the eventsController
module.exports = {
  createEvent: function(req, res) {
    // let req.body = {
    //   eventName: "Underwater Basket Weaving – World Championship",
    //   location: "Atlantis, Online",
    //   description: "Join us as we find the world's next best underwater basket weaver!",
    //   eventDateTime: Date(2021-05-25),
    //   lists: [],
    //   announcements: [],
    //   comments: []
    // }
    db.Events
      .create(req.body)
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  updateEvent: function(req, res) {
    // let req.params.id -> event._id = "60ad393469e56e0a903434bc"
    // let req.body = {
    //     eventName: "Zoo Birthday Party!",
    //     location: "Dallas Zoo",
    //     description: "Jeremy's 6th Birthday Party"}
    db.Events
      .findByIdAndUpdate({ _id: req.params.id }, 
      {$set: req.body})
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  deleteEvent: function(req, res) {
    // req.params.id --> event._id = "60ad393469e56e0a903434bc"
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
    .then(dbEvents => res.json(dbEvents))
    .catch(err => res.status(422).json(err));
  },
  findEventById: function(req, res) {
    // req.params.id --> event._id = "60ad393469e56e0a903434bc"
    console.log("entered eventsController/findById")
    db.Events.findOne({id: req.params.id})
    .populate({
      path: "lists.items",
      populate: "assignedTo"
    })
    .populate("attendees.attendee")
    .populate("announcements.author")
    .populate("comments.author")
    .then(dbEventData => res.json(dbEventData))
    .catch(err =>  res.status(422).json(err));
  },
  addList: function(req, res){
    // req.params.id --> event._id = "60ad393469e56e0a903434bc"
    // req.body = { listName: "Food", }
    db.Events
    .updateOne({ _id: req.params.id }, 
      {$push: { lists: {listName: req.body.listName, items: []}}})
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err));
  },
  updateList: function(req, res){
    // req.params.id -> event._id
    // req.params.list_id -> list_id to update item on
    // req.body.listName -> listName to update item on
    db.Events
      .findByIdAndUpdate({ _id: req.params.id }, {
        $set: { "lists.$[list].listName": req.body.listName }
      }, {
        arrayFilters: [{
          "list._id": req.params.list_id
        }]
      })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err));

  },
  removeList: function(req, res) {
    // req.params.id -> eventId = "60ad393469e56e0a903434bc"
    // req.params.list_id -> "60ae5f8c0e2223159c446885"
    db.Events
    .updateOne({ _id: req.params.id }, 
      {$pull: { lists: {_id: req.body.listId}}})
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err));
  },
  addListItem: function(req, res) {
    // req.params.id -> event._id "60ad393469e56e0a903434bc"
    // req.params.list_id: "60ae5f1b52abc815710cb370",
    // req.body -> {
    // listName: "Food",
    // item:  {itemName: "Cookies", assignedTo: "60ad0b20bbba44045a0a0eb0", status: "needed", assigned: true}}
    db.Events
      .updateOne({ _id: req.params.id }, {
        // push lists[1].items 
          $push: { "lists.$[list].items": req.body.item }
        }, {
        arrayFilters: [{
          "list.listName": req.body.listName,
          "list._id": req.params.list_id       
        }]
      })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err));

  },
  updateListItem: function(req, res){
    // req.params.id -> event._id
    // req.params.list_id -> list_id to update item on
    // req.params.item_id -> id of item we want to update
    // req.body: {listName: listName
    //      item:  {itemName: "Chocolate Chip Cookies", assignedTo: "60ad0b20bbba44045a0a0eb0", status: "needed", assigned: true}}
    db.Events
      .findByIdAndUpdate({ _id: req.params.id }, {
        $set: { "lists.$[list].items.$[item]": req.body.item }
      }, {
        arrayFilters: [{
          "list.listName": req.body.listName,
          "list._id": req.params.list_id
        },{
          "item._id": req.params.item_id
        }]
      })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err));

  },
  removeListItem: function(req, res) {
    // req.params.id -> "60ad393469e56e0a903434bc"
    // req.params.list_id: "60ae5f1b52abc815710cb370",
    // req.params.item_id:  "60ae5fc8d6dbfb15a6c987bd"
    // req.body = {
    // listName: "Food",
    // }
    db.Events
      .updateOne({ _id: req.params.id }, {
        $pull: { "lists.$[list].items": {_id: req.params.item_id} }
      }, {
        arrayFilters: [{
          "list.listName": req.body.listName,
          "list._id": req.params.list_id
        }]
      })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err));
  },
  addComment: function (req, res) {
    // req.params.id = "60ad393469e56e0a903434bc";
    // req.body = {
    // comments: [
    //   {author:  "60ad0b20bbba44045a0a0eb0", text: "What does Jeremy want for his bday this year?"},
    //   {author:  "60ad0b20bbba44045a0a0eb1", text: "Legos, Legos, Legos, and tigers."},
    // ]}
    db.Events
    .findByIdAndUpdate({_id: req.params.id},
      {$push: {comments: req.body.comments}},
      {new: true})
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err))
  },
  updateComment: function(req, res) {
    // let req.params.id -> event._id = "60ad393469e56e0a903434bc"
    // let req.params.comment_id = "<objectId>"
    // let req.body = { text: Updated comment }
    db.Events
    .findByIdAndUpdate({ _id: req.params.id }, {
        $set: { "comments.$[comment]": req.body.text }
      }, {
        arrayFilters: [{
          "comment._id": req.params.comment_id
        }]
      })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err)); 
  },
  deleteComment: function (req, res){
    ////Event id
    // req.params.id = "60ad393469e56e0a903434bc";
    ////Comment id
    // req.params.comment_id = "60ae62a6d6b75315f82587e5"
    db.Events
    .updateOne({ _id: req.params.id }, 
      {$pull: { comments: {_id: req.params.comment_id}}})
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err))
  },
  addAnnouncement: function(req, res) {
    //   Announcements test data
    // req.params.id = "60ad393469e56e0a903434bc";
    // req.body = {
    //     announcements: [
    //       {author:  "60ad0b20bbba44045a0a0eb0", text: "Cake and icecream are at 4pm."},
    //       {author:  "60ad0b20bbba44045a0a0eb1", text: "Great news! We will have lunch with the tigers!!"},
    //     ]}

    db.Events.findByIdAndUpdate({_id: req.params.id},
      {$push: {announcements: req.body.announcements}},
      {new: true})
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err))
  },
  updateAnnouncement: function(req, res) {
    // let req.params.id -> event._id = "60ad393469e56e0a903434bc"
    // let req.params.announcement_id -> announcement_id: "ObjectId","
    // let req.body = {  text: "Feel free to show up early!" }
    db.Events
    .findByIdAndUpdate({ _id: req.params.id }, {
        $set: { "announcements.$[attendee]": req.body.text }
      }, {
        arrayFilters: [{
          "announcement._id": req.params.announcement_id
        }]
      })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err)); 
  },
  deleteAnnouncement: function (req, res) {
    // ////Event id
    // req.params.id = "60ad393469e56e0a903434bc";
    // ////Comment id
    // req.params.announcement_id = "60ae7ce7bc24ae18c91532c1"
    db.Events
      .updateOne({ _id: req.params.id }, 
        {$pull: { announcements: {_id: req.params.announcement_id}}})
      .then(dbEventData => res.json(dbEventData))
      .catch(err => res.status(422).json(err));
  },
  addAttendee: function (req, res) {
    //   Announcements test data
    //   req.params.id = "60ad393469e56e0a903434bc";
    //   req.body = {
    //       attendee:  "60ad0b20bbba44045a0a0eaf", host: false
    //       }
    db.Events
    .findByIdAndUpdate({_id: req.params.id},
      {$push: {attendees: req.body.attendee}},
      {new: true})
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err))
  },
  updateAttendee: function(req, res) {
    // let req.params.id -> event._id = "60ad393469e56e0a903434bc"
    // let req.params.attendee_id -> attendee._id = "ObjectId"
    
    // let req.body = {   host: true})
    db.Events
    .findByIdAndUpdate({ _id: req.params.id }, {
        $set: { "attendees.$[attendee]": req.body.host }
      }, {
        arrayFilters: [{
          "attendee._id": req.params.attendee_id
        }]
      })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err)); 
  },
  deleteAttendee: function (req, res) {
    // ////Event id
    // req.params.id = "60ad393469e56e0a903434bc";
    // ////Comment id
    // req.params.attendee_id = "60ae7ed3ee8e1a1900beabac"
    db.Events
      .updateOne({ _id: req.params.id }, 
        {$pull: { attendees: {_id: req.params.attendee_id}}})
    .then(dbEventData => res.json(dbEventData))
    .catch(err => res.status(422).json(err));
  }


};
