const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listsSchema = new Schema(    {
  listName: {
      type: String,
      trim: true
  },
  EventId: {
    type: Schema.Types.ObjectId,
    ref: "Events"
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
    }
  ]
},
{ timestamps: true }
);

const Lists = mongoose.model("Lists", listsSchema);

module.exports = Lists;