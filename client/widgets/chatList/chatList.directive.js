'use strict';

angular.module('yApp')
    .directive('chatList', ['$rootScope', 'socket', function ($rootScope, socket) {
        return {
            templateUrl: 'widgets/chatList/chatList.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {
                var me  = $rootScope.__me;

                // mock
                scope.list = [{
                    id: 2,
                    username: '湫个麻呆',
                    avatar: 'http://ww1.sinaimg.cn/crop.0.0.2044.2044.1024/6a75cc55gw1ejy428nqh0j21kw1kwams.jpg'
                }, {
                    id: 1,
                    username: 'Jalon',
                    avatar: 'static/images/jalon.jpg'
                }];

                // 提示服务器
                var chat = socket.chat;

                $(document).click(function () {
                    chat.emit('chat:start', me);
                })

                chat.on('chat:message', function (data) {
                    console.log(data);
                });

                // 聊天
                scope.openChat = function (user) {
                    scope.chatWindowVisible = true;
                    scope.from = me;
                    scope.to = user;
                }

            }
        };
    }]);
