const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

module.exports = app;