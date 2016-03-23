'use strict';

angular.module('yApp')
    .controller('FeedCtrl', ['$scope', 'socket', function ($scope, socket) {
        $scope.name = 'Feed';
        var chat = socket.chat;
        var notice = socket.notice;
        chat.on('chat:connection', function (data) {
            console.log(data);
            chat.emit('chat:message', {from: 'Jalon', msg: '[聊天系统]客户端收到!'});
        });
        notice.on('notice:connection', function (data) {
            console.log(data);
            notice.emit('notice:message', {from: 'Jalon', msg: '[通知系统]客户端收到!'});
        });
    }]);
