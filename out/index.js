"use strict";
console.log('starting server');
var Koa = require('koa');
var Router = require('@koa/router');
var app = new Koa();
var router = new Router();
router.get('koa-example', '/', function (ctx) {
    ctx.body = 'Hello World';
});
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(8080);
console.log('listening on port 8080');
