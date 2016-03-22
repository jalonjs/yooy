/*
* 聊天系统
* 接口协议: chat:[事件名]
*/

module.exports = function (ioChat, socket) {

    var headers = socket.handshake.headers;

    socket.emit('chat:connection', {msg: '已经建立连接!'});

    //  广播
    // ioChat.emit('a message', {
    //     everyone: 'in'
    //     , '/chat': 'will get'
    // });

    //  消息
    socket.on('chat:message', function (data) {
        console.log('I received a private message by ', data.from, ' saying ', data.msg);
    });

    //  用户失去连接
    socket.on('disconnect', function () {
        //  某用户下线,广播给所有人
        var user = {};
        console.log('有人离线');
        ioChat.emit('chat:disconnect', user);
    });

};
