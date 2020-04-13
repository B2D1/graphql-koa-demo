const { GraphQLSchema, GraphQLObjectType } = require("graphql");
// 引入 type
const { info, infos } = require("./info");
const { student } = require("./student");

// 建立 schema
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Queries",
    fields: {
      infos,
      info,
      student,
    },
  }),
});
