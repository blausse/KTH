const express = require('express');
const router = express.Router();
const controller = require('./contact.controller');

router.get('/',controller.contact);

module.exports = router;