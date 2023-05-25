const express = require('express');
const router = express.Router();
const controller = require('./match.controller');

router.get('/',controller.match);

module.exports = router;