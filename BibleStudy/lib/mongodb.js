const express = require('express');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
/* 나중에 계정사용할 때, 필요.
var db = mongoose.createConnection("mongodb://localhost/futureStudy",{
    auth: {
        user: "rjacademy",
        password: "future!@#$"
    }
});
*/
var db = mongoose.createConnection('mongodb://localhost/bibleStudy');

mongoose.plugin(schema => {schema.options.usePushEach =true});
db.on('error',console.error);
db.once('open',function(){
    console.log('MongoDB connected');
});
autoIncrement.initialize(db);

module.exports = db;