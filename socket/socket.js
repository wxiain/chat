const socket = require('socket.io');
let arrUser = [];

module.exports = serve => {
    let io = socket.listen(serve);
    // 连接
    io.sockets.on('connection', (socket) => {
        let query = socket.handshake.query;
        // console.log(query);
        socket.on('userLink', (data) => {
            arrUser.push(data);
            console.log(arrUser);
        });
        socket.on('call', data => {
            let bothId = data.bothId;
            let id = data.user;
            console.log(data);
            console.log(id, '发送的消息', arrUser.findIndex(i => i.id === bothId) > -1);
            if (arrUser.findIndex(i => i.userId === bothId) > -1) {
                // let toSocket = _.findWhere(io.sockets.sockets, {id: bothId});
                console.log(io.sockets.sockets);
                /*toSocket.emit('message', data.content);
                console.log('执行完毕');*/
            }
        })
        // socket.emit('receive');
        // io.emit('broadcast', {msg:'broadcast'});
        // io.broadcast.emit('new_user', {msg: '消息推送'});
        // https://www.jianshu.com/p/07a167b1482b
    });
    // 消息发送
    io.sockets.on('message', socket => {
        socket.on('')
    })
};