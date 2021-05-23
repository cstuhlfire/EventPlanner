const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
            type: String,
            trim: true, 
            required: true,
            unique: true 
          },
  password: {
            type: String, 
            trim: true,
            required: true 
          },
  eamil: { 
            type: String,
            trim: true
            // match: /.+\@.+\..+/,
            // unique: true
          },
  phone: {
            type: String,
            trim: true 
          }
},
{ timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;