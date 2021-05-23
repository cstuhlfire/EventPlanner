const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  eamil: String,
  phone_number: String,
  date: { type: Date, default: Date.now }
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;