var express = require('express');
var router = express.Router();
var controller = require('../controllers/shutdown.controller');

/* GET users listing. */
router.post('/', controller.shutdown);

module.exports = router;