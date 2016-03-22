var chat = require('../subsystem/chat')

module.exports = function (server) {
    var io = require('socket.io')(server);

    //  聊天系统
    var ioChat = io.of('/chat')
        .on('connection', function (socket) {
            chat(ioChat, socket);
        });

    //  通知系统
    var ioNotice = io.of('/notice')
        .on('connection', function (socket) {

        });

};
