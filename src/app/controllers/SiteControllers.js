const Course = require("../models/Course");
const { mutipleMongooesToObject } = require("../../util/mongooes");
class SiteController {
  // Khai báo ra một phương thức index
  // GET /news

  home(req, res, next) {
    // res.json({
    //   name: "Test",
    // });
    // res.render("home");
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: mutipleMongooesToObject(courses),
        });
      })
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
