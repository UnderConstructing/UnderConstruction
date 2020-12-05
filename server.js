const express = require("express")
const routes = require("./routes/router.js")
const app = express();
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars")
const db = require("./models");
const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

console.log(PORT)
console.log(process.env.HOST_NAME)
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.use(routes)

app.get("/", function (req, res) {
  res.render("index");
})
// app.get("/results", function (req,res) {
//   res.render("results")
// })

app.get("/api/newcontractor", function (req, res) {
  console.log(db.finance);
  db.finance.create({
    company: "Key Bank",
    email: "​banker@key.com",
    city: "Cleveland",
    con_state: "Ohio",
    phone: "1 (800) 539-2968",
    website: "www.key.com"
  }).then(() => {
  res.json()
})}) 


  app.get("/results",  (req, res) => {
     db.contractors.findAll({
      attributes: {
        city: req.query.city
      }
    }).then(result => {
      console.log(result)
      res.render("results", {contractors: result})
    })
    .catch(error => console.error(error))
    })

    app.get("/lenders",  (req, res) => {
      db.finance.findAll({
     }).then(result => {
       console.log(result)
       res.render("lenders", {lenders: result})
     })
     .catch(error => console.error(error))
     })




db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)})})