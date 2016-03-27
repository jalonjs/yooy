angular.module('yApp').factory('socket', function () {
    var chat = io('http://localhost:3003/chat');
    var notice = io('http://localhost:3003/notice');

    chat.on('chat:connection', function (data) {
        console.log(data);
        chat.emit('chat:message', {from: 'Jalon', msg: '[聊天系统]客户端收到!'});
    });
    notice.on('notice:connection', function (data) {
        console.log(data);
        notice.emit('notice:message', {from: 'Jalon', msg: '[通知系统]客户端收到!'});
    });


    return {
        chat: chat,
        notice: notice
    }
});
