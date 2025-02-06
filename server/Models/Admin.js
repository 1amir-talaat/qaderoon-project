const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    uinque: true,
  },
  password: {
    type: String,
    required: true,
  },
  adminRefreshToken: {
    type: String,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
