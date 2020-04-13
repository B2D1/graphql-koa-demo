const Koa = require("koa");
const KoaStatic = require("koa-static");
const bodyParser = require("koa-bodyparser");
const compose = require("koa-compose");
const { ApolloServer } = require("apollo-server-koa");

const myGraphQLSchema = require("./graphql/schema.js");
const connect = require("./db");
const requestRouter = require("./router");
const { logger } = require("./config");

const PORT = 3000;
const PATH = "/api";

// 连接数据库
connect();

const server = new ApolloServer({ schema: myGraphQLSchema });
const app = new Koa();

const middlewares = compose([
  bodyParser(),
  KoaStatic(__dirname + "/public"),
  requestRouter.routes(),
  requestRouter.allowedMethods(),
]);

// 调用中间件
app.use(middlewares);
server.applyMiddleware({ app, path: PATH });

// 监听端口
app.listen(PORT, () => {
  logger.info(
    `Server ready at http://${"localhost"}:${PORT}${server.graphqlPath}`
  );
});
