const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });

  //   app.get("/search", (req, res) => {
  //     res.render("search");
  //     // console.log(req.query);
  //   });

  // app.post("/search", (req, res) => {
  //   // res.render("search");
  //   // console.log(req.query);
  //   console.log(req.body);
  //   res.send("");
  // });
}
module.exports = route;
