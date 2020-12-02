const express = require("express")
const routes = require("./routes/router.js")
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars")
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
app.use(express.static("public"));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.use(routes)

// app.get("/", function (req, res) {
//   res.render("index");
// })

app.get("/api/new", function (req, res) {
  db.contractorsdb.create({
    company: "company",
    email: "jimcontractor@contractor.com",
    city: "Cleveland",
    con_state: "Ohio",
  }).then(() => {
  res.json()
})})
=======
app.use(routes)
>>>>>>> 7d498bc7fb46b8df7880650bcdf75a801de1a63b

// app.get("/api/deletecontractor", function (req, res) {
//   db.contractorsdb.create({
//     contractor_name: "Jim Contractor", 
//     email: "jimcontractor@contractor.com"
//   }).then(() => {
//   res.json()
// })})

<<<<<<< HEAD
  db.sequelize.sync({ force: false }).then(function() {
=======

  db.sequelize.sync({ force: true }).then(function() {
>>>>>>> 7d498bc7fb46b8df7880650bcdf75a801de1a63b
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

  db.contractorsdb.create({
    company: "company",
    email: "jimcontractor@contractor.com",
    city: "Cleveland",
    con_state: "Ohio",
})
  app.put("/api/update", function (req, res) {
    console.log("route hit")
    db.contractorsdb.update({email: req.body.email}, {where: {id: 1}})
    .then(dbcontractor => {
      res.json(dbcontractor)
    })
  })
app.get("/", function (req, res) {
  console.log("hit")
  db.contractorsdb.findAll({})
  .then(dbcontractor => {
    console.log(dbcontractor)
    res.render("index", {contractors: dbcontractor})
  })
})