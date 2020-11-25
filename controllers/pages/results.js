const router = require('express').Router();
const Results = require('../../page_models/Results')

router.route("/").get(Results.baseRoute)

module.exports = router;