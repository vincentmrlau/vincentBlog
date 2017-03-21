'use strict';

var mysql = require('mysql');
var config = require("./app-config.js");

var connection = mysql.createConnection(config.mysqlConfig);

connection.connect();

var createUserTable = 'create table user(' +
// 'id int unsigned not null auto_increment,' +
'email varchar(255) not null unique primary key,' + 'password text not null,' + 'nickname text, ' + 'createdAT timestamp default current_timestamp not null,' + 'updatedAT timestamp default current_timestamp on update current_timestamp not null' + ')';
connection.query(createUserTable, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        console.log("createUserTable");
    }
});

var createBlogTable = 'create table blog(' + 'id int(16) unsigned not null auto_increment primary key,' + 'class char(255) not null,' + 'tittle text not null,' + 'picture varchar(255),' + 'href text not null,' + 'createdAT timestamp default current_timestamp not null,' + 'updatedAT timestamp default current_timestamp on update current_timestamp not null' + ')';
connection.query(createBlogTable, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        console.log("createBlogTable");
    }
});

var createCommentTable = 'create table comment(' + 'id int(16) unsigned not null auto_increment key,' + 'blog_id int(16) not null,' + 'email varchar(255) not null,' + 'nickname text not null, ' + 'content text not null,' + 'createdAT timestamp default current_timestamp not null,' + 'updatedAT timestamp default current_timestamp on update current_timestamp not null' + ')';
connection.query(createCommentTable, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        console.log("createCommentTable");
    }
});
var createTagsTable = 'create table tag(' + 'tag_id varchar(255) not null unique,' + 'type varchar(255) not null,' + 'createdAT timestamp default current_timestamp not null,' + 'updatedAT timestamp default current_timestamp on update current_timestamp not null' + ')';
connection.query(createTagsTable, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        console.log("createTagsTable");
    }
});
var createPaperTagsTable = 'create table paper_tag(' + 'id int(16) unsigned not null auto_increment key,' + 'tag_id varchar(255) not null,' + 'blog_id varchar(255) not null,' + 'createdAT timestamp default current_timestamp not null,' + 'updatedAT timestamp default current_timestamp on update current_timestamp not null' + ')';
connection.query(createPaperTagsTable, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        console.log("createPaperTagsTable");
    }
});

connection.end();
//# sourceMappingURL=mysql-initialize.js.map