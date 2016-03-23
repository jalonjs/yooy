var chat = require('../subsystem/chat')
var notice = require('../subsystem/notice')

module.exports = function (io) {

    //  聊天系统
    var ioChat = io.of('/chat')
        .on('connection', function (socket) {
            chat(ioChat, socket);
        });

    //  通知系统
    var ioNotice = io.of('/notice')
        .on('connection', function (socket) {
            notice(ioNotice, socket);
        });

};
