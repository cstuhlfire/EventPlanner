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

  /// .findOne ///
  login: async function(req, res) {
    try {
      const userData = await db.Users.findOne({ username: req.body.username });
      console.log(userData)
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      // Ensure instance method .checkPassword is on User model
      // const validPassword = await userData.comparePassword(req.body.password);


      await userData.comparePassword(req.body.password, function(err, validPassword){
        if (err) throw err;
        console.log(req.body.password, validPassword)
      });
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      
      console.log("Success!");
      // req.session.save(() => {
      //   req.session.user_id = userData.id;
      //   req.session.use_name = userData.username;
      //   req.session.logged_in = true;
  
      //   res.json({ user: userData, message: 'You are now logged in!' });
      // });
    } catch (err) {
      res.status(400).json(err);
    }

  },

  /// .findOne ///
  // login: function(req, res) { 
  //   db.Users
  //     .findOne({ where: { email: req.body.email } }, req.body)
  //     .then(dbUserData => {
  //       if (!dbUserData) {
  //         res
  //           .status(400)
  //           .json({ message: 'Incorrect email or password, please try again' });
  //         return;
  //       }
  //           /// Ensure .checkPassword method on User model
  //       const validPassword = await dbUserData.checkPassword(req.body.password);
  //       if (!validPassword) {
  //         res
  //           .status(400)
  //           .json({ message: 'Incorrect email or password, please try again' });
  //         return;
  //       }
  //       req.session.save(() => {
  //         req.session.user_id = dbUserData.id;
  //         req.session.use_name = dbUserData.username;
  //         req.session.logged_in = true;
    
  //         res.json(dbUserData);
  //       });

  //     })
  //     .catch(err => res.status(422).json(err));
  // },

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
