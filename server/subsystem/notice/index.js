/*
 * 通知系统
 * 接口协议: notice:[事件名]
 */

module.exports = function (ioNotice, socket) {

    var headers = socket.handshake.headers;

    socket.emit('notice:connecting', {msg: '已经建立连接!'});

    //  用户失去连接
    socket.on('disconnect', function () {
        //  某用户下线,广播给所有人
        var user = {};
        ioNotice.emit('chat:disconnect', user);
    });
    //
    // socket.emit('a message', {
    //     that: 'only'
    //     , '/chat': 'will get'
    // });
    //
    // ioNotice.emit('a message', {
    //     everyone: 'in'
    //     , '/chat': 'will get'
    // });

};
