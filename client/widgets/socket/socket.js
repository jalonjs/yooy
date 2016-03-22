angular.module('yApp').factory('socket', function () {
    var chat = io('/chat');
    var notice = io('/notice');
    return {
        chat: chat,
        notice: notice
    }
});
