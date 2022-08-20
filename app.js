// Imports
const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const app = express();
const port = process.env.PORT || 3000;

// Static Files
app.use(express.static("public"));
// Specific folder example
app.use("/sass", express.static(__dirname + "public/sass"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/image"));

// // Set View's
app.set("views", "./views");
app.set("view engine", "ejs");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Navigation
app.get("", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", urlencodedParser, (req, res) => {
  res.json(req.body);
});

app.listen(port, () => console.info(`App listening on port ${port}`));
