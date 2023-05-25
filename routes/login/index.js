const express = require('express');
const router = express.Router();
const mysql = require('mysql');  // mysql 모듈 로드
const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session)

const notifier = require('node-notifier');
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'kth'
};
var connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속  

router.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true,
    store: new mysqlStore(conn)
}));

router.get('/',(req,res,next)=>{
        res.render('login',{u_id : ''})
        
    }
);

router.post('/',(req,res)=>{
    // console.log(req.body);
    var u_id = req.body.u_id;
    var pwd = req.body.pwd;
    var sql = `SELECT * FROM members WHERE u_id ='${u_id}' AND pwd ='${pwd}';`
    connection.query(sql, function (err, results, fields) { // testQuery 실행
        if (err) {
            console.log(err);     
        }
        console.log(results);
        if(results.length !==0){
            notifier.notify({
                title:"WELCOME",
                message:`환영합니다! ${u_id} 님`,
                sound:true,
                wait:true
            })
            req.session.s_id = u_id;
            // console.log(req.session)
            res.json({
                ok:true
            })
        }else{
            notifier.notify({
                title:"DENIED",
                message:'아이디나 비밀번호를 다시 확인하세요!',
                sound:true,
                wait:true
            })
        }
        });
        // console.log('굳')
    })

module.exports = router;