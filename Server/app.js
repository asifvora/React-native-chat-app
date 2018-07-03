const io = require('socket.io')();
const AVATAR = 'https://i1.wp.com/tricksmaze.com/wp-content/uploads/2017/10/Stylish-Girls-Profile-Pictures-11.jpg';
const NAME = '@zoya';

io.on('connection', function (client) {
    // console.log('client Id::', client.id)
    //chat message
    client.on('chat-message', function (messages) {
        let { message } = messages;
        let messageObj = {
            sender: NAME,
            avatar: AVATAR,
            message
        }
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
