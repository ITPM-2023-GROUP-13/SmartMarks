import React from "react";
import { Link } from '@mui/material';
import { Divider, Grid, ListItemButton, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";

function TeacherHome (){

return(
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop:2}}>
    
        <Grid item xl={3} lg={4} md={6} sm={12}>
            <Box sx={{backgroundColor:"gray",borderRadius:5, height:200 ,marginLeft:10,marginBottom:5}}>
                <Typography>Students Count</Typography>

            </Box>
        </Grid>

        <Grid item xl={3} lg={4} md={6} sm={12}>
            <Box sx={{backgroundColor:"gray",borderRadius:5, height:200 ,marginLeft:10}}>
                    <Typography>Teachers Count</Typography>

            </Box>
        </Grid>

        <Grid item xl={3} lg={4} md={6} sm={12}>
            <Box sx={{backgroundColor:"gray" ,borderRadius:5, height:200 ,marginLeft:10}}>
                    <Typography>Subjects Count</Typography>

            </Box>
        </Grid>

        <Grid item xl={3} lg={4} md={6} sm={12}>
            <Box sx={{backgroundColor:"gray" ,borderRadius:5, height:200 ,marginLeft:10}}>
                    <Typography>Marks Count</Typography>

            </Box>
        </Grid>

        <Grid item xl={3} lg={4} md={6} sm={12}>
            <Box sx={{backgroundColor:"gray" ,borderRadius:5, height:200 ,marginLeft:10}}>
                    <Typography>Parent Messages Count</Typography>

            </Box>
        </Grid>

        <Grid item xl={3} lg={4} md={6} sm={12}>
            <Box sx={{backgroundColor:"gray" ,borderRadius:5, height:200 ,marginLeft:10}}>
                    <Typography>Parent Messages Count</Typography>

            </Box>
        </Grid>

    </Grid>
)
}

export default TeacherHome