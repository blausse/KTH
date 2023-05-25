const express = require('express');
const router = express.Router();
const controller = require('./insert.controller');
const mysql = require('mysql'); 
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'kth'
};

router.get('/',controller.insert);

router.post('/',insert = (req,res,next)=>{
    var u_id = req.body.u_id;
    var pwd = req.body.pwd;
    var name = req.body.name;
    var birth = req.body.birth;
    var gender = req.body.gender;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var identity = req.body.identity;
    var connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    var sql = `INSERT INTO members (u_id,pwd,name,birth,gender,email,mobile,identity) VALUES ('${u_id}','${pwd}','${name}','','${gender}','','${mobile}','${identity}');`;
    connection.query(sql, function (err, results, fields) { // testQuery 실행
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
    res.json({ok:true})
});

module.exports = router;