# chat
## on和emit
- 使用时注意创建用emit, 监听用on, 配对使用就可以收发消息
```
// 服务端
io.on('message', (data)=>{
    console.log(data, '11234');
});
io.emit('receive', '后台过来的数据');
// 客户端
socket.emit('message', 'hello world');
socket.on('receive', data => {
    console.log(data, '接收成功');
})
```
## token
- 可以选择用路由参数的方式传输
- 在请求头里设置有问题, 目前没找到方法