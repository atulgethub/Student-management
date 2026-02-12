const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  reg: { type: String, required: true },
  section: { type: String, required: true },
  roll: { type: String, required: true }
});

module.exports = mongoose.model("Student", studentSchema);
