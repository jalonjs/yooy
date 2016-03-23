angular.module('yApp').factory('socket', function () {
    var chat = io('http://localhost:3003/chat');
    var notice = io('http://localhost:3003/notice');
    return {
        chat: chat,
        notice: notice
    }
});
