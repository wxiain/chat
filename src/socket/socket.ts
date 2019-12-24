const socket = require('socket.io');
let arrUser:[] = [];
let i = 0;
module.exports = serve => {
    let io = socket.listen(serve);
    // 连接
    io.sockets.on('connection', socket => {
        let id:[number, string] = socket.id;
        let query = socket.handshake.query;
        // console.log(query);
        socket.on('userLink', data => {
            arrUser.push({
                id,
                ...data
            });
            console.log(arrUser);
        });
        socket.on('call', data => {
            let bothId = data.bothId;
            let index = arrUser.findIndex(i => i.userId === bothId);
            if (index > -1) {
                socket.to(arrUser[index].id).emit('message', data.content);
            }
        })
        // socket.emit('receive');
        // io.emit('broadcast', {msg:'broadcast'});
        // io.broadcast.emit('new_user', {msg: '消息推送'});
        // https://www.jianshu.com/p/07a167b1482b
    });
    // // 消息发送
    // io.sockets.on('message', socket => {
    //     socket.on('')
    // })
};