import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  reg_no: {type:String, required: true},
  name:String,
  grade:String,
  email:String
});

const Student = mongoose.model("student", studentSchema);

export default Student;