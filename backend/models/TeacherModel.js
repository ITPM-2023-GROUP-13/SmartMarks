import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
  reg_no: {type:String, required: true},
  name:String,
  subject:String,
  email:String

});

const Teacher = mongoose.model("teacher", teacherSchema);

export default Teacher;