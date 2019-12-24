const Koa = require('koa');
const cross = require('@koa/cors');
const koaBody = require('koa-body');

const server = new Koa();
server.use(cross());
server.use(koaBody());

const router = require('./router/router');
server.use(router.routes()).use(router.allowedMethods());



let serve = server.listen(3000, () => {
    console.log('打开成功');
});

require('./socket/socket')(serve);
