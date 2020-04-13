const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    title: String,
    desc: String,
    page: Number,
    author: String,
  },
  { timestamps: { updatedAt: "updatedAt", updatedAt: "updatedAt" } }
);

module.exports = CourseSchema;
