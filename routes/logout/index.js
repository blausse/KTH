const express = require('express')
const router = express.Router();
const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session)
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'kth'
};
router.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true,
    store: new mysqlStore(conn)
}));

router.get('/',(req,res,next)=>{
    req.session.destroy();
    res.redirect('/');
    // next('/routes')
})

module.exports = router;