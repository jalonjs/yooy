var path = require('path');
var config = require('./config');

module.exports = function (app) {

    // API请求
    app.use('/api', require('./api'));

    // 登录
    app.get('/login', function(req, res) {
        if (req.session.uid) {
            res.redirect('/');
        }else {
            res.render('login.ejs', {name: '登录'});
        }
    });

    // 首页
    app.route('/').get(function(req, res) {
        res.redirect('/feed');
    });

    // All other routes should redirect to the index.html
    app.route('/*').get(function (req, res, next) {
        if (req.session.uid) {
            res.render('app');
        } else {
            res.redirect('/login');
        }
    });

    function checkToken(req, res) {

    }

    function sha1(data) {
        var Buffer = require("buffer").Buffer;
        var buf = new Buffer(data);
        var str = buf.toString("binary");
        var crypto = require("crypto");
        return crypto.createHash("sha1").update(str).digest("hex");
    }
};
