

var express = require('express');
var mysql = require('mysql');
var config = require("./app-config.js");

var router = express.Router();

var connection = mysql.createConnection(config.mysqlConfig);
connection.connect();


router.get('/getByClass',function (req,res,next) {

    var sqlClass = req.query.class;
    if(sqlClass){
        var searchBlogByClass = 'select * from blog b ' +
            'right join paper_tag p on b.id = p.blog_id ' +
            'left join ( select blog_id as cBlog_id , count(id) as comment_count from comment group by blog_id) c on c.cBlog_id = b.id' +
            ' where class = "'+sqlClass+'"';

        connection.query(searchBlogByClass,function (err,result) {
            if(err){
                console.log(err);
                res.json({
                    code:'sqlerror'
                });
            }else {
                console.log(result);
                if (result.length == 0){
                    res.json({
                        code:'noBlog'
                    });
                }else {

                    var dataStore = [];
                    var blogId = [];
                    for(var i = 0;i<result.length;i++){
                        if(blogId.indexOf(result[i].blog_id)>=0){

                        }else {
                            blogId.push(result[i].blog_id);
                        }
                    }
                    // console.log(blogId);
                    function searchId(data , id) {
                        return data.blog_id == id;
                    }
                    for(var i = 0;i<blogId.length;i++){
                        dataStore.push({
                            tag_id:[]
                        });
                        for(var k = 0;k<result.length;k++){
                            if(result[k].blog_id == blogId[i]){
                                dataStore[i].blog_id =result[k].blog_id;
                                dataStore[i].comment_count =result[k].comment_count||0;
                                dataStore[i].title =result[k].title;
                                dataStore[i].picture =result[k].picture;
                                dataStore[i].href =result[k].href;
                                dataStore[i].tag_id.push(result[k].tag_id);
                            }
                        }
                    }
                    // console.log(dataStore);
                    res.json({
                        'code':'success',
                        'data':dataStore
                    });
                }
            }
        });
    }else {
        res.json({
            code:'emptyClass'
        });
    }
});

router.post('/newComment',function (req,res,next) {
    console.log(req.body);
    var content = req.body.content;
    var email = req.body.email;
    var blog_id = req.body.blog_id;
    var nickname = req.body.nickname;

    if (content&&email&&blog_id&&nickname){
        //insert query
        var insertComment = 'insert into comment (blog_id,email,nickname,content) value(' +
            '\"' +blog_id +'\",'+
            '\"' +email +'\",'+
            '\"' +nickname +'\",'+
            '\"' +content +'\"'+
            ')';
        connection.query(insertComment,function (err,result) {
            if(err){
                console.log(err);
                res.json({
                    code:'sqlErr'
                })
            }else {
                console.log(result);
                var searchComment = 'select * from comment where blog_id=\"' +
                    blog_id + '\"';
                connection.query(searchComment,function (err,result) {
                    if(err){
                        console.log(err);
                        res.json({
                            code:"sqlError"
                        });
                    }else {
                        console.log(result);
                        if (result.length == 0){
                            res.json({
                                code:'noComment'
                            });
                        }else {
                            res.json({
                                code:'success',
                                data:result
                            });
                        }
                    }
                });
            }
        })
    }else {
        res.json({
            code:'noParas'
        });
    }

});

router.get('/commentsByBlogId',function(req,res,next) {
    var blog_id = req.query.blog_id;
    if(blog_id){
        var searchComment = 'select * from comment where blog_id=\"' +
            blog_id + '\"';
        connection.query(searchComment,function (err,result) {
            if(err){
                console.log(err);
                res.json({
                    code:"sqlError"
                });
            }else {
                console.log(result);
                if (result.length == 0){
                    res.json({
                        code:'noComment'
                    });
                }else {
                    res.json({
                        code:'success',
                        data:result
                    });
                }
            }
        })
    }else {
        res.json({
            code:'noParas'
        });
    }
});

module.exports = router;