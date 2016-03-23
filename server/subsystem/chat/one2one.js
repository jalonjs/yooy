module.exports = function (ioChat, socket) {

    var userWS = {};

    socket.on('chat:message', function (data) {
        console.log(data.from, ':', data.msg);
    });

};
