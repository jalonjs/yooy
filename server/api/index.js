var express = require('express');
var router = express.Router();

router.get('/*', function (req, res, next) {
    if (!req.session.uid) {
        res.json({tip: '似乎没有登录...'})
    }else {
        next();
    }
});

router.get('/name', function (req, res, next) {
    res.json({name: 'api'})
});


module.exports = router;
