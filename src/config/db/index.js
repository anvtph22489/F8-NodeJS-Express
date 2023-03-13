// Cấu hình connect đến mongodb
const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_laptrinh");
    // await mongoose.connect("mongodb://localhost:27017/f8_laptrinh", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    console.log("Connect sucssessfully!!!");
  } catch (error) {
    console.log("Connect LỖI LÒI ĐÍT!!!");
    console.log("Lỗi tên là: " + error);
  }
}
module.exports = { connect };
