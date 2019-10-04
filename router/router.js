const Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
    ctx.body = '12345';
});

module.exports = router;