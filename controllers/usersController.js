const db = require("../models");

// Calling Schema Event for now
// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {

    console.log(req.body);
    const newUser = new db.Users (req.body);
    newUser
      .save()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(422).json(err));
  },

  // router.post('/', async (req, res) => {
  //   try {
  //     const userData = await User.create(req.body);
  
  //     req.session.save(() => {
  //       req.session.user_id = userData.id;
  //       req.session.use_name = userData.username;
  //       req.session.logged_in = true;
  
  //       res.status(200).json(userData);
  //     });
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });
  login: function(req, res) {
    db.Users.findOne({ username: req.body.username })
      .then ((user) => {
        console.log(user);
        if (!user) {
          console.log("wrong user")
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;
          console.log(req.body.password + ":", isMatch); 
          if (!isMatch) {
            console.log("wrong password")
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          } else {
            console.log("Success!");
            console.log(user);
            // req.session.save(() => {
            //   req.session.user_id = userData.id;
            //   req.session.use_name = userData.username;
            //   req.session.logged_in = true;
        
            //   res.json({ user: userData, message: 'You are now logged in!' });
            // });;

          }
        });
        
      })
      .then (() => {
        console.log("later");
      })
      .catch ((err) => {
        console.log(err);
      })
  },  
  logout: function (req, res) {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
  update: function(req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbUserData => dbUserData.remove())
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(422).json(err));
  }
};
