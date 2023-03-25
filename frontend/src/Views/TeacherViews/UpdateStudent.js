import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.css";

function UpdateStudent (props){
    const { row } = props.location.state;
    console.log('props', row);
  
    const [reg_no, setRegNo] = useState("");
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
  
    useEffect(() => {
      setRegNo(row.reg_no);
      setName(row.name);
      setGrade(row.grade);
    }, [row]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const updatedStudent = { reg_no, name, grade };
  
      try {
        await axios.put(`http://localhost:5000/teacher/updateStudent/${row._id}`, updatedStudent);
        console.log("Student Updated");
      } catch (error) {
        console.log(error);
      }
    };
    // await axios.get(
    //     `https://www.googleapis.com/customsearch/v1?key=AIzaSyBYW4B8xzKMApVvzVevwJi4r4IcnuuZFnY&cx=66ac6fa7ccb7d4eca&q=${name}&num=5`
    //   ).then((response)=>{       
    //     setSearchResults(response.data.items)

    //     console.log("Response1",response.data.items)
    //   }).catch((err)=>{
    //     console.log(err)
    //  })
      



return(
        <>
        <h1>Update a student</h1>
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
            <input type="submit" value="Update" />
        </form>
        </div>
      

            {/* {searchResults.map((result,index) => (
                <div key={index}>
                <a href={result.link}>{result.title}</a>
                <p>{result.snippet}</p>
                </div>
            ))} */}

        </>
        
    )
}

export default UpdateStudent