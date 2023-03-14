const Course = require("../models/Course");
const {
  mongooesToObject,
  mutipleMongooesToObject,
} = require("../../util/mongooes");
class MeController {
  // GET stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: mutipleMongooesToObject(courses),
        })
      )
      .catch(next);
  }
}
module.exports = new MeController();
