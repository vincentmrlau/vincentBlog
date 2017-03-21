'use strict';

var express = require('express');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var user = require('./server/user.js');
var blog = require('./server/blog.js');

var app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

//对所有的（/）URL或路由返回index.html
app.get('/', function (req, res) {
    res.render('index');
});

//设置views路径
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//静态文件配置
app.use('', express.static(path.join(__dirname, 'client')));

app.use(bodyParser());

app.use('/user', user);
app.use('/blog', blog);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at", host, port);
});
//# sourceMappingURL=app.js.map