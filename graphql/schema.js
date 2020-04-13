const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { info, infos } = require("./info");
const { student } = require("./student");
const { course } = require("./course");

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Queries",
    fields: {
      infos,
      info,
      student,
      course,
    },
  }),
});
