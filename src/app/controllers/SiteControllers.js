const Course = require("../models/Course");
class SiteController {
  // Khai báo ra một phương thức index
  // GET /news

  home(req, res) {
    // res.json({
    //   name: "Test",
    // });
    // res.render("home");
    // Course.find{}, function (err, courses){
    //   if (err) res.json(courses);
    //   res.status(400).json(error : "Error!!!")
    // });
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
