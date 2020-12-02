const express = require("express")
const routes = require("./routes/router.js")
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars")
const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


  db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
