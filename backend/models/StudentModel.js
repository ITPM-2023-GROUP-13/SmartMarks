import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  reg_no: {type:String, required: true},
  name:String,
  grade:String

});

const Student = mongoose.model("student", studentSchema);

export default Student;