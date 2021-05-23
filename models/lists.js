const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    listName: {
        type: String,
        trim: true
    },
    itemName: {
        type: String,
        trim: true
    },
    assignedTo: {
        type: Schema.Type.ObjectId,
        ref: "Users"
    },
    status: {
        type: String,
        trim: true
    }
},
{ timestamps: true }
);

const Lists = mongoose.model("Lists", userSchema);

module.exports = Lists;