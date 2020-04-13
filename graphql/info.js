const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const Info = require("../db/model/info");

const InfoType = new GraphQLObjectType({
  name: "Info",
  fields: {
    _id: {
      type: GraphQLID,
    },
    height: {
      type: GraphQLString,
    },
    weight: {
      type: GraphQLString,
    },
    hobby: {
      type: new GraphQLList(GraphQLString),
    },
    createdAt: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
  },
});

const infos = {
  type: new GraphQLList(InfoType),
  args: {},
  resolve(root, params, options) {
    return Info.find({}).exec();
  },
};

const info = {
  type: InfoType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    return Info.findOne({
      _id: params.id,
    }).exec();
  },
};

module.exports = {
  InfoType,
  infos,
  info,
};
