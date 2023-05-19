import Student from "../models/StudentModel.js";
import Mark from "../models/MarksModel.js";

export const studentLogin = async (req, res) => {
    const { reg_no, email} = req.body;
  
    try {
      // Check if the user exists in the database
      const user = await Student.findOne({ reg_no, email });
  
      if (user) {
        // User exists, perform login logic here
        // For example, you can generate a JWT token and return it as the response
        const token = generateToken(user);
  
        res.status(200).json({ token });
      } else {
        // User not found
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getmarkBySID = async (req, res) => {
    const { id } = req.params;
    console.log("id::",id)
  
    try {
      const markDetails = await Mark.find({studentRegNO:id});
      console.log("marks::",markDetails)
      res.status(200).json(markDetails);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };