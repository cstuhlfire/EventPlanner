const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  title: { type: String, required: true },
  location: String,
  description: String,
  eventDateTime: Date,
  date: { type: Date, default: Date.now }
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;