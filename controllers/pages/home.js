const router = require('express').Router();
const Home = require('../../page_models/Home')

router.route("/")
    .get(Home.baseRoute)
    .post(Home.postRoute)

module.exports = router;