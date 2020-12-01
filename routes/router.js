<<<<<<< HEAD
// const db = require("../models")
// const path = require("path")

// module.exports = function (app) {
//     app.get("/", function (req, res) {
//         res.render("index");
//     })
// }

=======
const db = require("../models")

module.exports = function (app) {
    app.get("/", function (req, res) {
             res.render("index.handlebars", contractorsDB) 
            })
}
>>>>>>> 20ce6d1033f49cd646d0b115fa392d71ad35c0ae
