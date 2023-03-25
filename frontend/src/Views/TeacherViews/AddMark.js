import axios from "axios";
import React, { useState } from "react";
import "./Form.css";

function AddMark (){

const [studentRegNO, setRegNo] = useState("");
const [subjectCode, setsubject] = useState("");
const [mark, setMark] = useState("");

const handleSubmit = async (event) => {
  
    event.preventDefault();
    const newMark={ studentRegNO, subjectCode, mark}

    axios.post("http://localhost:5000/Teacher/AddMark",newMark).then(()=>{
        console.log("Mark Added")
    }).catch((err)=>{
        console.log(err)
    })

};
    

return(
        <>
        <h1>Add a Mark</h1>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
                Student Registration number:
                <input 
                    type="text"
                    name="studentRegNO" 
                    value={studentRegNO}
                    onChange={(event) => setRegNo(event.target.value)}
                />
            </label>
            <br />

            <label>
            Subject Code:
                <input 
                    type="text" 
                    name="subjectCode" 
                    value={subjectCode}
                    onChange={(event) => setsubject(event.target.value)}
                />
            </label>
            <br />
            <label>
                Mark:
                <input 
                    type="text" 
                    name="mark" 
                    value={mark}
                    onChange={(event) => setMark(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
        </div>
    

        </>
        
    )
}

export default AddMark