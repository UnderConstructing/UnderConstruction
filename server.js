const express = require("express")
const routes = require("./routes/router.js")
const app = express();
var router = express.Router()
const dotenv = require("dotenv")
const result = dotenv.config()
if (result.error) {
  throw result.error
}
//DON'T FUCKING TOUCH THIS!!!!//
const PORT = process.env.PORT || 8080;
//SERIOUSLY//
const exphbs = require("express-handlebars")
const db = require("./models");
const { response } = require("express");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

console.log(PORT)
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.use(routes)

app.get("/", function (req, res) {
  res.render("index");
})

app.get("/api/newcontractor", function (req, res) {
  console.log(db.finance);
  db.finance.create({
    company: "Key Bank",
    email: "",
    city: "Cleveland",
    con_state: "Ohio",
    phone: "1 (800) 539-2968",
    website: "www.key.com"
  }).then(() => {
    res.json()
  })
})


let contractorsRender = []
let project = ""


app.get("/results", function (req, res) {
  res.render("results", {
    contractors: contractorsRender,
    project: project
  })
})

app.get("/api/results", function (req, res) {
      console.log(`THE REQUEST ${req.query.city}`)
      db.contractors.findAll({
        where: {
          city: req.query.city
        },
        raw: true
  }).then(results => {
    console.log("results" + JSON.stringify(results))
    contractorsRender = results
    project = req.query.project
    console.log(contractorsRender)
    res.redirect(resultURL, 200)
    console.log("CONTRACTORS " + JSON.stringify(contractorsRender))
  })
})

const resultURL = "/results"

app.get("/lenders", (req, res) => {
  db.finance.findAll({
  }).then(result => {
    console.log("LENDERS PAGE " + JSON.stringify(contractorsRender))
    res.render("lenders", { lenders: result })
  })
    .catch(error => console.error(error))
})
app.get("/newcontractors", (req, res) => {
  res.render("newcontractor")
})

app.post("/api/newcontractor", function (req, res) {
  db.contractors.create({
    company: req.body.company,
    email: req.body.email,
    city: req.body.city,
    con_state: req.body.state,
    phone: req.body.phone
  }).then(response=> {
    console.log(response)
    res.json()
  })
})

app.get("/newlender", function (req, res){
  db.finance.create({
    company: "Golden Oak Lending",
    email: "info@goldenoaklending.com",
    city: "Pittsburgh",
    con_state: "Pennsylvania",
    phone: "(724) 779-4653",
    website: "https://www.goldenoaklending.com/pittsburgh-mortgage-company.html",
  }).then(response => {
    console.log("hit")
    res.json(response)
  })
})

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
  })
})