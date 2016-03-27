module.exports = function (ioChat, socket) {

    var userWS = {};

    socket.on('chat:start', function (me) {
        userWS[me.id] = socket;
        console.log(me.id)
        userWS[me.id].on('chat:message', function (data) {
            console.log(data)
            userWS[data.to.id].emit('chat:message', data);
        });
    });

};
