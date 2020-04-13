const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    name: String,
    gender: String,
    age: Number,
    info: {
      type: Schema.Types.ObjectId,
      ref: "Info",
    },
  },
  { timestamps: { updatedAt: "updatedAt", updatedAt: "updatedAt" } }
);

module.exports = StudentSchema;
