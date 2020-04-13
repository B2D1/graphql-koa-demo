const Info = require("../db/model/info");

const saveInfo = async (ctx) => {
  const opts = ctx.request.body;
  const info = new Info(opts);
  const saveInfo = await info.save();

  ctx.body = saveInfo
    ? {
        success: true,
        data: saveInfo,
      }
    : {
        success: false,
      };
};

const fetchInfo = async (ctx) => {
  const infos = await Info.find({});

  ctx.body = infos.length
    ? {
        success: true,
        data: infos,
      }
    : {
        success: false,
      };
};

module.exports = {
  fetchInfo,
  saveInfo,
};
