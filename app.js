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

app.listen(3000, () => {
  console.log(
    "El servidor esta corriendo de manera correcta en http://localhost:3000"
  );
});
