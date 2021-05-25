const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const announcementsSchema = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: "Users"
    },
    text: {
      type: String,
      trim: true        
    }
},
    { _id : true }
);

const eventsSchema = new Schema({
  eventName: {
      type: String, 
      trim: true, 
      required: true
    },
  location: {
      type: String,
      trim: true
    },
  description: {
      type: String,
      trim: true
    },
  eventDateTime: { 
      type: Date,
      default: Date.now
    },
  eventImage: { 
      type: String,
      default: "/images/balloons.jpg"
    },
  attendees: [
    {
      attendee: {
          type: Schema.Types.ObjectId,
          ref: "Users"
        },
      host: {
          type: Boolean
        }
    }
  ],
  lists: [
    {
        listName: {
            type: String,
            trim: true
        },
        items: [
          {
              itemName: {
                  type: String,
                  trim: true
              },
              assignedTo: {
                  type: Schema.Types.ObjectId,
                  ref: "Users"
              },
              status: {
                  type: String,
                  trim: true
              },
              assigned: {
                type: Boolean,
                default: false
            }
          }
        ]
    }
  ],
  // announcements: [announcementsSchema],
  announcements: [new Schema (
    {
      author: {
        type: Schema.Types.ObjectId,
        ref: "Users"
      },
      text: {
        type: String,
        trim: true        
      }
    })
  ],
  comments: [
    {
      author: {
        type: Schema.Types.ObjectId,
        ref: "Users"
      },
      text: {
        type: String,
        trim: true        
      }
    }
  ]
},
{ timestamps: true }
);

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;