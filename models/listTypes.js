const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listTypesSchema = new Schema({
  listName: {
    type: String, 
    required: true
  },
  date: {
    type: Date, 
    default: Date.now 
  }
});

const ListTypes = mongoose.model("ListTypes", listTypesSchema);

module.exports = ListTypes;