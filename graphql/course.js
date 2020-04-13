const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const Course = require("../db/model/course");

let CourseType = new GraphQLObjectType({
  name: "Course",
  fields: {
    _id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    desc: {
      type: GraphQLString,
    },
    page: {
      type: GraphQLInt,
    },
    author: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
  },
});

const course = {
  type: new GraphQLList(CourseType),
  args: {},
  resolve(root, params, options) {
    return Course.find({}).exec();
  },
};

module.exports = {
  course,
};
