const express = require('express');
const router = express.Router();
const Lesson = require('../models/lesson');


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.post('/register', function(req, res, next) {
    var lesson = new Lesson();
    var info = req.body.lessonInfoJSON;
    
    for (var count in info) {
        lesson[count] = info[count];
    }
    
    console.log(lesson)

    lesson.save(function(err){
        if(err){
            res.json({result:2, msg:'register failed', data:err});
        }
        else {
            res.json({result:1, msg:'registered well', data:lesson});
        }
    })
});


module.exports = router;
