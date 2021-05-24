const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      type: Date 
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
          type: Schema.Types.ObjectId,
          ref: "Lists"
    }
  ],
  announcements: [
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