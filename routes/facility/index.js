const express = require('express');
const router = express.Router();
const controller = require('./facility.controller');

router.get('/',controller.facility);

module.exports = router;