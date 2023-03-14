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
  // GET courses/create
  create(req, res, next) {
    res.render("courses/create");
  }
  // GET courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooesToObject(course),
        })
      )
      .catch(next);
  }
  store(req, res, next) {
    const formData = req.body;
    formData.image =
      "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg";
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {
        console.log("Lỗi lòi đít: " + error);
      });
    // const course = new Course(req.body);
    // course.save();
    // res.json(req.body);
  }
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}
module.exports = new CourseController();
