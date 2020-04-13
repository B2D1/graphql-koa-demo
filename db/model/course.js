const mongoose = require("mongoose");
const CourseSchema = require("../schema/course");

module.exports = mongoose.model("Course", CourseSchema);
