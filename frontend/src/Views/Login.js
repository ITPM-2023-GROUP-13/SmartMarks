import React from "react";
import Button from '@mui/material/Button';
import { Grid, Typography} from "@mui/material";
import "./Login.css";

function Login (){

return(
        <div className="container">
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            sx={{ padding: '5px', zIndex: '1', backgroundColor:"#18266e", position: 'fixed',top:0, width: '100%' }}
        >
       
            <h2 style={{textAlign:"start", marginLeft:15}}>SmartMarks</h2>
        
        </Grid>
          <div className="card" >
            <Button  variant="contained" href="/Teacher" sx ={{marginBottom:4 , size:"large"}}>Login as a Teacher</Button>
            <Button variant="contained" href="/Student">Login as a Student</Button>
          </div>

          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            sx={{ padding: '10px', zIndex: '1', backgroundColor:"#18266e", position:'fixed', width: '100%',bottom:'0px' }}
        >
      <Typography> Copyrights © {new Date().getFullYear()} <a style={{fontWeight:'bold',color:'white'}} href='#' target="_Blank"> SmartMarks</a></Typography>  
  
    </Grid>
        </div>

      )
}

export default Login;