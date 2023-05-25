const express = require('express');
const router = express.Router();

const main = require('./main/index');
const athlete = require('./athlete/index');
const contact = require('./contact/index');
const facility = require('./facility/index');
const instructor = require('./instructor/index');
const login = require('./login/index');
const logout = require('./logout/index');
const match = require('./match/index');
const parent = require('./parent/index');
const signup = require('./signup/index');
const insert = require('./insert/index');


router.use('/', main);
router.use('/athlete', athlete);
router.use('/contact',contact);
router.use('/facility',facility);
router.use('/instructor',instructor);
router.use('/login',login);
router.use('/logout',logout);
router.use('/match',match);
router.use('/parent',parent);
router.use('/signup',signup);
router.use('/insert',insert)


module.exports = router;