const Koa = require('koa');
const cross = require('@koa/cors');
const koaBody = require('koa-body');

const app = new Koa();
app.use(cross());
app.use(koaBody());

const router = require('./router/router');
app.use(router.routes()).use(router.allowedMethods());



let serve = app.listen(3000, () => {
    console.log('打开成功');
});

require('./socket/socket')(serve);
