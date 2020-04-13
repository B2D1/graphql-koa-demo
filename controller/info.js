// const mongoose = require("mongoose");

// const Info = mongoose.model("Info");
const Info = require("../mongodb/model/info");
// 保存info信息
const saveInfo = async (ctx, next) => {
  // 获取请求的数据
  const opts = ctx.request.body;
  const info = new Info(opts);
  const saveInfo = await info.save(); // 保存数据
  // 简单判断一下 是否保存成功，然后返回给前端
  if (saveInfo) {
    ctx.body = {
      success: true,
      info: saveInfo,
    };
  } else {
    ctx.body = {
      success: false,
    };
  }
};

// 获取所有的info数据
const fetchInfo = async (ctx, next) => {
  const infos = await Info.find({}); // 数据查询

  if (infos.length) {
    ctx.body = {
      success: true,
      info: infos,
    };
  } else {
    ctx.body = {
      success: false,
    };
  }
};

module.exports = {
  fetchInfo,
  saveInfo,
};
