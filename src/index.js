const path = require("path");
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const port = 3000;
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
//template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
// console.log(path.join(__dirname, "resources/views"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// tạo các tuyến đường
route(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
