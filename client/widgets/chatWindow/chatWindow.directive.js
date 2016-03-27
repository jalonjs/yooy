'use strict';

angular.module('yApp')
  .directive('chatWindow', ['socket', function (socket) {
    return {
      templateUrl: 'widgets/chatWindow/chatWindow.html',
      restrict: 'EA',
      scope: {
          from: '=',
          to: '='
      },
      link: function (scope, element, attrs) {
          var chat = socket.chat;

          // 聊天记录
          scope.chatMsgs = [];

          // 消息文本
          scope.message = '';

          //  发送消息
          scope.send = function () {
              if(scope.message == '') return;
              chat.emit('chat:message', {from: scope.from, to: scope.to, msg: scope.message});
              scope.chatMsgs.push({
                  user: scope.from,
                  msg: scope.message,
                  time: new Date().getTime()
              })

              // $('#msg-list-box').animate({scrollTop: $('#msg-list-box').height()}, 300);
              
              scope.message = '';

          }

      }
    };
  }]);
