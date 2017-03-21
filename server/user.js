
var express = require('express');
var mysql = require('mysql');
var config = require("./app-config.js");

var router = express.Router();

var connection = mysql.createConnection(config.mysqlConfig);
connection.connect();
router.post("/login",function (req,res,next){
    var email = req.body.email;
    var psw = req.body.psw;
    var findUser = 'select * from user where email = "'+email+'"';
    connection.query(findUser,function (err,result) {
        if(err){
            console.log(err);
            res.json({
                'code':'sqlerror'
            });
        }else {
            console.log(result[0]);
            if(result.length>0){
                var sqlPsw = result[0].password;
                if (sqlPsw == psw){
                    res.json({
                        'code':'success',
                        'email':result[0].email,
                        'nickname':result[0].nickname,
                        'createdAT':result[0].createdAT,
                        'updatedAT':result[0].updatedAT
                    });
                }else {
                    res.json({
                        'code':'pswError'
                    });
                }
            }else {
                res.json({
                    'code':'error',
                    'email':'this email is not existed'
                });
            }
        }
    })
    // console.log(req.body);
    // res.send(req.body);
});

router.post('/register' , function (req,res,next) {
    var email = req.body.email;
    var psw = req.body.psw;
    var nickname = req.body.nickname;
    if(email&&psw&&nickname){

        var createUser = 'insert into user (email , password ,nickname) values(' +
                '\''+email+'\',' +
            '\''+psw +'\''+ ','+
            '\''+nickname +'\'' +
            ')';
        console.log(createUser);
        connection.query(createUser ,function (err,result) {
            if(err){
                console.log(err);
                if(err.errno == 1062){
                    res.json({
                        'code':'existed',
                        'email':email
                    });
                }else {
                    res.json({
                        'code':'sqlerror',
                        'email':email,
                        'psw':psw,
                        'nickname':nickname
                    });
                }

            }else {
                console.log(result);
                res.json({
                    'code':'success'
                });
            }
        });


    }else {
        var sendData = {
            'code':'error',
            'email':email,
            'psw':psw,
            'nickname':nickname
        }
        res.json(sendData);
    }
});



module.exports = router;
