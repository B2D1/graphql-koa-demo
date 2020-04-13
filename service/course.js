const Course = require("../db/model/course");

const saveCourse = async (ctx) => {
  const opts = ctx.request.body;
  const course = new Course(opts);
  const saveCourse = await course.save();

  ctx.body = saveCourse
    ? {
        success: true,
        data: saveCourse,
      }
    : {
        success: false,
      };
};

const fetchCourse = async (ctx, next) => {
  const courses = await Course.find({});

  ctx.body = courses.length
    ? {
        success: true,
        data: courses,
      }
    : {
        success: false,
      };
};

module.exports = { saveCourse, fetchCourse };
