const Koa = require("koa");
const KoaStatic = require("koa-static");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const log4js = require("log4js");

const connect = require("./mongodb");
const GraphqlRouter = require('./router')

connect();

const logger = log4js.getLogger();
logger.level = "debug";

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + "/public"));

router.use('', GraphqlRouter.routes())

app.use(router.routes()).use(router.allowedMethods());

// 监听端口、启动程序
app.listen(3000, () => {
  logger.debug("graphQL server listen port: " + 3000);
});
