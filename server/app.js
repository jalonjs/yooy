var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var app = express();

// 基本配置
var config = require('./config');

// view engine 设置
app.set('views', [path.join(__dirname, '../client'), path.join(__dirname, 'views')]);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// 各种中间件
//app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));

//  日志
var fs = require('fs')
var date = new Date();
var YMD = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
var logDirectory = __dirname + '/logs'
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
var accessLogStream = fs.createWriteStream(logDirectory +'/' + YMD +'.log', {flags: 'a'})
var logMode = process.env.NODE_ENV
logMode === 'development' ? app.use(logger('dev')) : app.use(logger('combined', {stream: accessLogStream}))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('jalon'));
app.use(session({
    name: 'ysid', // 在cookie里的session cookie的名字
    secret: 'yooy-secret', // 加密字符串
    resave: true, // 每次请求都重新设置session cookie，假设你的cookie是6000毫秒过期，每次请求都会再设置6000毫秒。
    saveUninitialized: true, // 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid。
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 }, // 一个月
    maxAge: 1000 * 60 * 60 * 24 * 30
}))

//  静态资源
app.use(express.static(path.join(__dirname, '../client')));

// 路由
require('./routes')(app);

//  导出给bin/www启动server
module.exports = app;
//// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function (err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});

