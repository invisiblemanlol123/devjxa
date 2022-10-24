var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser")
var ejs = require(`ejs`)
app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs")
app.use(express.static("public"));
var listeners = app.listen(`3412`, function() {
  console.log("Your app is listening on port " + listeners.address().port)
})

app.get("/", function(req, res) {
  res.render("index", {})
});


app.get("/r", function(req, res) {
  res.render("r.ejs", {})
});
