import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function AddStudent (){
const navigate = useNavigate();
const [reg_no, setRegNo] = useState("");
const [name, setName] = useState("");
const [grade, setGrade] = useState("");
const [email, setEmail] = useState("");

// const [searchResults, setSearchResults] = useState([]);

const handleSubmit = async (event) => {
  
    event.preventDefault();
    const newStudent={ reg_no, name, grade ,email}

    axios.post("http://localhost:5000/Teacher/AddStudent",newStudent).then(()=>{
        console.log("Student Added")
        navigate(`/Teacher/StudentList`);
    }).catch((err)=>{
        console.log(err)
    })
      
    
};

return(
        <>
        <h2>Add a student</h2>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
                Reg NO:
                <input 
                    type="text"
                    name="reg_no" 
                    value={reg_no}
                    onChange={(event) => setRegNo(event.target.value)}
                />
            </label>
            <br />

            <label>
                Name:
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label>
                Grade:
                <input 
                    type="text" 
                    name="grade" 
                    value={grade}
                    onChange={(event) => setGrade(event.target.value)}
                />
            </label>
            <br />
            <label>
                Email Address:
                <input 
                    type="text" 
                    name="email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
        </div>
      
        </>
        
    )
}

export default AddStudent