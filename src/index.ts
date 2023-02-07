console.log('starting server');

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('koa-example', '/', (ctx:any) => {
  ctx.body = 'Hello World:' + process.env.TEST;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);

router.get('koa-example', '/ping', (ctx:any) => {
  ctx.body = 'pong';
});

console.log('listening on port 8080');
