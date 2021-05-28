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

    const newUser = new db.Users (req.body);
    newUser
      .save()
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData._id;
          req.session.username = dbUserData.username;
          req.session.logged_in = true;

        res.json(dbUserData);
        })
      })
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
         if (!user) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) {
            console.log("Error logging in.");

            res.status(400)
              .json({message: "Incorrect username or password, please try again."});
          };

          if (!isMatch) {
            console.log("Incorrect login.");

            res.status(400)
              .json({ message: "Incorrect username or password, please try again." });

            return;

          } else {
            console.log("Success!");

            req.session.save(() => {
              req.session.user_id = user._id;
              req.session.username = user.username;
              req.session.logged_in = true;
            })

            res.json({ user: user.username, 
                      user_id: user._id,  
                      logged_in: true,
                      message: 'Welcome! You are logged in as: '+user.username });
          }
        });
        
      })
      // .then (() => {
      //   console.log("later");
      // })
      .catch ((err) => {
        console.log(err);
        res.json({message: "Error: "+err});
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
