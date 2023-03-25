
import React, { useEffect, useState } from "react";
import  "./Table.css";
import { Button } from "@mui/material";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { blueGrey, green, grey, orange, red, yellow } from "@mui/material/colors";

function TeacherList() {
    
    const [tableData, setTableData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/teacher/getAllTeachers")
        .then(response => {
           // console.log("response",response.data)
          setTableData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      },[])

      const handleDelete = async (row) => {
        try {
          await axios.delete(`http://localhost:5000/teacher/deleteTeacher/${row._id}`);
          setTableData(tableData.filter((p) => p._id !== row._id));
          console.log('Record deleted successfully');
        } catch (error) {
          console.error('Error deleting record:', error);
        }
      }

    return(
        <>
        <h1>Teacher List</h1>
       
          <div className="table-container">
            <table className="table">
                <thead>
                <tr>
                    <th>Reg NO</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <Button href="/Teacher/AddTeacher" variant="contained" startIcon={<AddIcon/> } sx={{marginBottom:2,backgroundColor:green[900]}}>Add a teacher</Button>
                </tr>
                </thead>
                <tbody>
                {tableData.map((row, index) => (
                    <tr key={index}>
                    <td>{row.reg_no}</td>
                    <td>{row.name}</td>
                    <td>{row.subject}</td>

                    <td>
                    <Button href="/Teacher/UpdateTeacher"  variant="contained"  startIcon={<EditIcon/> } sx={{marginBottom:2,backgroundColor:orange[900]}} onc>Edit</Button>
                    </td>

                    <td>
                    <Button

                        variant="contained" 
                        startIcon={<DeleteIcon/> } 
                        sx={{marginBottom:2,backgroundColor:red[900]}}
                        onClick={()=>handleDelete(row)}
                    >Delete</Button>
                    </td>

                    </tr>
                ))}
                </tbody>
            </table>
            
          </div>
        </>
    )

}
export default TeacherList;