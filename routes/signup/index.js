const express = require('express');
const router = express.Router();
const qs = require('querystring');


router.get('/',(req,res,next)=>{
    res.render('signup',{u_id:''});
});

module.exports = router;