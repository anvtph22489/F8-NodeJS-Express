const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
  {
    // name: {type: String, minLength: 1, default: ""} tối thiểu 1 kí tự không nhập thì default là ""
    name: { type: String, maxLength: 200, required: true },
    description: { type: String, maxnLength: 300 },
    videoID: { type: String, maxnLength: 300, required: true },
    level: { type: String, maxnLength: 300 },
    image: { type: String, maxnLength: 400 },
    slug: { type: String, slug: "name" },
  },
  {
    timestamps: true,
  }
);
// module.exports = mongoose.model('ModelName', mySchema);
module.exports = mongoose.model("Course", Course);
