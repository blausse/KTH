const express = require('express');
const router = express.Router();
const controller = require('./instructor.controller');

router.get('/',controller.instructor);

module.exports = router;