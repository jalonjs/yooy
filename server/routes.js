var path = require('path');
var config = require('./config');

module.exports = function (app) {

    // API请求
    app.use('/api', require('./api'));

    // 登录页
    app.get('/login', function(req, res) {
        if (req.session.uid) {
            res.redirect('/');
        }else {
            res.render('login.ejs', {tip: ''});
        }
    });

    // 登录
    app.post('/login', function(req, res) {
        if(req.body.email == '824525504@qq.com' && req.body.password == '111111') {
            req.session.uid = 1;
            res.redirect('/');
        }else {
            res.render('login.ejs', {tip: '用户名或密码错误'});
        }
    });

    // 登出
    app.get('/logout', function(req, res) {
        req.session.destroy();
        res.redirect('/');
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
