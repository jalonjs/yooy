'use strict';

angular.module('yApp')
    .controller('FeedCtrl', ['$scope', 'socket', function ($scope, socket) {
        $scope.name = 'Feed';
        var chat = socket.chat;
        chat.on('chat:connection', function () {
            chat.emit('chat:message', {form: 'Jalon', msg: '哈哈,我是Jalon!'});
        });
    }]);
