const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exhbs = require('express-handlebars');
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")

app.listen(PORT, function () {
  console.log("listening at port " + PORT);
});
