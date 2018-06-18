var db = require('../models');

// //this is the users_controller.js file
// exports.registrationPage = function(req,res) {
//     res.render('users/registration', {
//       layout: 'main-registration'
//     });
//   };

//this is for employees to update their profile: username can be fullname, update email, phone number or password; editable data displayed in input
exports.userProfileUpdate = function(req, res) {
    db.User.update(req.body,
        {
          where: {
            id: req.params.id
          }
        }).then(function(dbUser){
          res.json(dbUser);
          
 
        });
};
exports.findUser = function (req, res) {
    var query = {};
    if (req.query.firstname) {
      query.firstname = req.query.firstname;
    };
    if (req.query.lastname) {
        query.lastname = req.query.lastname;
    };

    if (req.query.id) {
        query.id = req.query.id;
    };
    
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.User.findAll({
      //where: query
    }).then(function(dbUser) {
      //res.json(dbUser);
    //   res.render("admin",{
    //       layout: 'main',
    //       users: dbUser
    //   });
    });
};
//for admin to add new user
exports.adminAdduser = function(req, res) {
    db.User.findAll({
        where: {username: req.body.username}
      }).then(function(users) {
        if (users.length > 0) {
          res.json({
            duplicateUser: true
          });
        //At some point, make sure that only one user can be associated with an email.
        } else {
          db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          }).then(function() {
            res.send({redirect: '/'});
          }).catch(function(err) {
            res.json(err);
          });
        }
      })
};
//need to create admin page which owner is able to add and delete user, show users in a table with button of edit and delete in the last column
exports.adminUpdateuser = function(req, res) {
    db.User.update(req.body,
        {
          where: {
            id: req.params.id
          }
        }).then(function(dbUser){
          res.json(dbUser);
          
 
        });
};
//for admin to delete a user
exports.adminDeleteuser = function(req, res) {
    db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
};

exports.adminMain = function (req, res) {
    db.User.findAll({
        //where: query
      }).then(function(dbUser) {
        //res.json(dbUser);
        console.log(dbUser);
        res.render("admin",{
            layout: 'main',
            users: dbUser
        });
      });
};

exports.signOutUser = function(req,res) {
    req.logout();
    res.redirect("/");
};
  
  // login
exports.loginUser = function(req, res) {
    console.log(req);
      // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
      // So we're sending the user back the route to the members page because the redirect will happen on the front end
      // They won't get this or even be able to access this page if they aren't authed
    res.json("/");
};
  
  