const socket = require('socket.io');
let arrUser = [];
let set = new Set();

module.exports = serve => {
    let io = socket.listen(serve);
    io.sockets.on('connection', (socket) => {
        let id = socket.id;
        socket.on('message', (data)=>{
            if (data.userId !== undefined) {
                set.add(data.userId);
                arrUser = [...set];
                console.log(data, '11234');
            }

        });
        socket.emit('receive', id);
        // io.emit('broadcast', {msg:'broadcast'});
        // io.broadcast.emit('new_user', {msg: '消息推送'});
    });
};