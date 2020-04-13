const mongoose = require("mongoose");
const StudentSchema = require("../schema/student");

module.exports = mongoose.model("Student", StudentSchema);
