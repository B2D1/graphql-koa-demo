const { saveInfo, fetchInfo } = require("../service/info");
const {
  saveStudent,
  fetchStudent,
  fetchStudentDetail,
} = require("../service/student");
const { saveCourse, fetchCourse } = require("../service/course");
const Router = require("koa-router");

const requestRouter = new Router();

requestRouter
  .post("/saveInfo", saveInfo)
  .get("/info", fetchInfo)
  .post("/saveStudent", saveStudent)
  .get("/student", fetchStudent)
  .get("/studentDetail", fetchStudentDetail)
  .post("/savesCourse", saveCourse)
  .get("/course", fetchCourse);

module.exports = requestRouter;
