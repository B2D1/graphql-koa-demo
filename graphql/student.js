const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const Student = require("../db/model/student");
const { InfoType } = require("./info");

const StudentType = new GraphQLObjectType({
  name: "Student",
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    info: {
      type: InfoType,
    },
  },
});

const student = {
  type: new GraphQLList(StudentType),
  args: {},
  resolve(root, params, options) {
    return Student.find({})
      .populate({
        path: "info",
        select: "hobby height weight",
      })
      .exec();
  },
};

module.exports = {
  student,
};
