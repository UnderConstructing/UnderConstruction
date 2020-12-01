const express = require("express")
const routes = require("./routes/router.js")
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars")
const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
app.use(express.static("public"));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.use(routes)

app.get("/", function (req, res) {
  res.render("index");
})

app.get("/api/newcontractor", function (req, res) {
  db.contractorsdb.create({
    contractor_name: "Jim Contractor", 
    email: "jimcontractor@contractor.com"
  }).then(() => {
  res.json()
})})

app.get("/api/deletecontractor", function (req, res) {
  db.contractorsdb.create({
    contractor_name: "Jim Contractor", 
    email: "jimcontractor@contractor.com"
  }).then(() => {
  res.json()
})})
=======
app.use(routes)

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

>>>>>>> 20ce6d1033f49cd646d0b115fa392d71ad35c0ae

  db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
