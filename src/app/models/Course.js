const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = new Schema({
  // name: {type: String, minLength: 1, default: ""} tối thiểu 1 kí tự không nhập thì default là ""
  name: { type: String, maxLength: 200 },
  description: { type: String, maxnLength: 300 },
  image: { type: String, maxnLength: 400 },
  createdAtt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
// module.exports = mongoose.model('ModelName', mySchema);
module.exports = mongoose.model("Course", Course);
