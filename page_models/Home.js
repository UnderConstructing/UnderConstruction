module.exports = {
    baseRoute: (req, res) => {
        res.render("home")
    },
    postRoute: (req, res) => {
        res.redirect("/")
    }
}