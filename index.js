const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const staticDir = require('koa-static');
const path = require('path')
const router = require('./server/router');
const bodyParser = require("koa-bodyparser");
const koaBody = require('koa-body');
const log = require('./config').common;



app.use(staticDir(
    path.join(__dirname, './static')
))
app.use(koaBody({ multipart: true }));

// 配置ctx.body解析中间件
app.use(bodyParser());

app.use(views('./view'));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002);
console.log('[start] app is starting at port 3002');

