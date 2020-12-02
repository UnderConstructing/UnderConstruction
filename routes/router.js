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
>>>>>>> 7d498bc7fb46b8df7880650bcdf75a801de1a63b

