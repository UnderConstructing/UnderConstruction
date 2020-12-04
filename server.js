const express = require("express")
const routes = require("./routes/router.js")
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars")
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.use(routes)

app.get("/", function (req, res) {
  res.render("index");
})
app.get("/results", function (req,res) {
  res.render("results")
})

// app.get("/api/newcontractor", function (req, res) {
//   db.contractors.create({
//     company: "Stone and Grain",
//     email: "​Estone.grain@gmail.com",
//     city: "Cleveland",
//     con_state: "Ohio",
//     phone: "330-289-6325"
//   }).then(() => {
//   res.json()
// })}) 


  app.get("/results", function (req, res) {
    const project = req.body.project
    db.contractors.findAll({
      attributes: {
        city: req.body.city
      }
    }).then(dbcontractors => {
      console.log(project)
      res.render("results", {
        project: project,
        results: true,
        contractors: dbcontractors})
    })
  })
  
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)})})