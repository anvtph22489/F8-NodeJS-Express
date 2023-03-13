const Course = require("../models/Course");
const { mongooesToObject } = require("../../util/mongooes");
class CourseController {
  show(req, res, next) {
    // res.send("Details" + req.params.slug);
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooesToObject(course) });
        // Truyền qua biến là course
      })
      .catch(next);
  }
}
module.exports = new CourseController();
