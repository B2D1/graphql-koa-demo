const { graphqlKoa, graphiqlKoa } = require("graphql-server-koa");
const { saveInfo, fetchInfo } = require("../controller/info");
const {
  saveStudent,
  fetchStudent,
  fetchStudentDetail,
} = require("../controller/student");
const router = require("koa-router")();

const schema = require("../graphql/schema");
router
  .post("/saveInfo", saveInfo)
  .get("/info", fetchInfo)
  .post("/saveStudent", saveStudent)
  .get("/student", fetchStudent)
  .get("/studentDetail", fetchStudentDetail);
  
router
  .post("/graphql", async (ctx, next) => {
    await graphqlKoa({ schema: schema })(ctx, next); // 使用schema
  })
  .get("/graphql", async (ctx, next) => {
    await graphqlKoa({ schema: schema })(ctx, next); // 使用schema
  })
  .get("/graphiql", async (ctx, next) => {
    await graphiqlKoa({ endpointURL: "/graphql" })(ctx, next); // 重定向到graphiql路由
  });
module.exports = router;
