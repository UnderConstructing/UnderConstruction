const router = require('express').Router();

router.use("/results", require('./results'))
router.use(require('./home'))

module.exports = router;