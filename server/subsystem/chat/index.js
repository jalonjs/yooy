/*
* 聊天系统
* 接口协议: chat:[事件名]
*/
var one2one = require('./one2one');

module.exports = function (ioChat, socket) {
    var headers = socket.handshake.headers;

    socket.emit('chat:connection', {msg: '聊天系统已经建立连接!'});
    //  用户失去连接
    socket.on('disconnect', function () {
        //  某用户下线,广播给所有人
        var user = {};
        console.log('有人离线');
        ioChat.emit('chat:disconnect', user);
    });

    //  私聊
    one2one(ioChat, socket)

};
