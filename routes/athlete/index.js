const express = require('express');
const router = express.Router();
const controller = require('./athlete.controller');

router.get('/',controller.athlete);

module.exports = router;