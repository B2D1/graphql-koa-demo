const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InfoSchema = new Schema(
  {
    hobby: [String],
    height: String,
    weight: Number,
  },
  { timestamps: { updatedAt: "updatedAt", updatedAt: "updatedAt" } }
);

module.exports = InfoSchema;
