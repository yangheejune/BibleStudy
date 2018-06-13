const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../lib/mongodb');

// 주제 
// 성구 주소
// 성구 내용
const LessonSchema = new Schema({
    subject : String,
    lessonAddr : String,
    lessonContent : String
});

module.exports = db.model('lesson', LessonSchema)