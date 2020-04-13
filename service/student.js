const Student = require("../db/model/student");

const saveStudent = async (ctx) => {
  const opts = ctx.request.body;
  const student = new Student(opts);
  const saveStudent = await student.save();

  ctx.body = saveStudent
    ? {
        success: true,
        data: saveStudent,
      }
    : {
        success: false,
      };
};

const fetchStudent = async (ctx) => {
  const students = await Student.find({});

  ctx.body = students.length
    ? {
        success: true,
        data: students,
      }
    : {
        success: false,
      };
};

const fetchStudentDetail = async (ctx) => {
  const students = await Student.find({})
    .populate({
      path: "info",
      select: "hobby height weight",
    })
    .exec();

  ctx.body = students.length
    ? {
        success: true,
        data: students,
      }
    : {
        success: false,
      };
};

module.exports = {
  saveStudent,
  fetchStudent,
  fetchStudentDetail,
};
