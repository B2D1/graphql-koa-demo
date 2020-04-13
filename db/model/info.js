const mongoose = require("mongoose");
const InfoSchema = require("../schema/info");

module.exports = mongoose.model("Info", InfoSchema);
