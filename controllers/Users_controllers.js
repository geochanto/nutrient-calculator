var db = require('../models');

// //this is the users_controller.js file
// exports.registrationPage = function(req,res) {
//     res.render('users/registration', {
//       layout: 'main-registration'
//     });
//   };

//this is for employees to update their profile: username can be fullname, update email, phone number or password; editable data displayed in input
exports.userProfileUpdate = function(req, res) {
    console.log(req.body);
    
    db.User.update(req.body,
        {
          where: {
            id: req.params.id
          }
        }).then(function(dbUser){
          res.json(dbUser);
          
 
        });
};
// exports.findUser = function (req, res) {
//     var query = {};
//     if (req.query.firstname) {
//       query.firstname = req.query.firstname;
//     };
//     if (req.query.lastname) {
//         query.lastname = req.query.lastname;
//     };

//     if (req.query.id) {
//         query.id = req.query.id;
//     };
    
    
//     db.User.findAll({
//       //where: query
//     }).then(function(dbUser) {
//       //res.json(dbUser);
//     //   res.render("admin",{
//     //       layout: 'main',
//     //       users: dbUser
//     //   });
//     });
// };
//for admin to add new user
exports.adminAdduser = function(req, res) {
    console.log(req.body);  
    db.User.findAll({
        where: {username: req.body.username}
      }).then(function(users) {
        console.log(users);
        if (users.length > 0) {
          res.json({
            duplicateUser: true
          });
        //At some point, make sure that only one user can be associated with an email.
        } else {
          console.log("this is a new user");
          db.User.create(req.body          
         ).then(function(newuser) {
            console.log("New User created: " + newuser);
            console.log("id: "+newuser.insertId);
            res.send({redirect: '/users/admin'});
          }).catch(function(err) {
            res.json(err);
          });
        }
      })
};
//need to create admin page which owner is able to add and delete user, show users in a table with button of edit and delete in the last column
exports.adminUpdateuser = function(req, res) {
    console.log(req.body);
    
    db.User.update(req.body,
        {
          where: {
            id: req.params.id
          }
        }).then(function(dbUser){
        //   res.json(dbUser);
        console.log("updated");
          
 
        });
};
//for admin to delete a user
exports.adminDeleteuser = function(req, res) {
    console.log(req.body);
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
  
  