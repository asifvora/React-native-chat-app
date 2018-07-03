const io = require('socket.io')();

io.on('connection', function (client) {
    // console.log('client Id::', client.id)
    //chat message
    client.on('chat-message', function (messageObj) {
        client.emit('chat-message', messageObj);
    });

    //disconnects...
    client.on('disconnect', function () {
        console.log('disconnect client Id::', client.id)
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port : ', port);
