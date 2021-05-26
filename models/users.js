const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
SALT_WORK_FACTOR = 10;

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
  email: { 
            type: String,
            trim: true,
            unique: false
          },
  phone: {
            type: String,
            trim: true,
            required: false
          }
},
{ timestamps: true }
);

// hash the password before saving
usersSchema.pre('save', function(next) {
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    
    if (err) {
      console.log("error: %s", err);
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt)
        .then((hash) =>  {

          // override the cleartext password with the hashed one
          user.password = hash;
          next();

      })
      .catch(err => {
        console.log("next error: %s", err);
        return next(err);
      })
    });
  });

  // password verification since user typed password will be in plain text
  // must do bcrypt.compareSync to verify
  usersSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
  };

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;