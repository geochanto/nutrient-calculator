const express = require("express");
const bodyParser = require("body-parser");
// const sequelize = require("./config/connection.js");
const path=require("path");
const PORT = process.env.PORT || 3800;
const app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
//app.use(favicon(__dirname + '/public/favicon.png'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//app.set('views', path.join(__dirname, '/../views'));    
// Import routes and give the server access to them.

// passport.serializeUser(function(user, done) {
// 	console.log(user);
// 	done(null, user._id);
// });

// passport.deserializeUser(function(id, done) {
// 	user.findById(id, function(err, user) {
// 		done(err, user);
// 	});
// });


// app.use(passport.initialize());
// app.use(passport.session());
//require("./routes/api-routes.js")(app);
const db = require("./models");

//db.sequelize.sync({force: true}).then(function() {
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
     console.log("App now listening at localhost:" + PORT);
  });
});