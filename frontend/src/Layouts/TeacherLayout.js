
import React from "react";
import Media from "react-media";
import { Outlet } from "react-router-dom";

// ---------Mui-Imports-----------------

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Grid, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

// ---------Mui-Icons-----------------

import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import MessageIcon from '@mui/icons-material/Message';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';


const TeacherLayout = () =>{

return(
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} sx={{ position: 'relative' }}>
        {/* ================================Header============================ */}
        <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            sx={{ padding: '5px', zIndex: '1', backgroundColor:"#18266e", position: 'fixed', width: '100%' }}
        >
       
            <h2 style={{textAlign:"start", marginLeft:15}}>SmartMarks</h2>
        
        </Grid>
        
        {/* ================================SideBar============================ */}
        <Media query="(max-width: 900px)">
            {(matches) => {
                return matches ? (
                    <Grid item sm={12} md={12} xs={12} sx={{ paddingTop: { xs: '100px', sm: '100px' } }}>
                      {null}
                    </Grid>
                ) : (
                    <Grid item md={2} lg={1.5} sx={{ position: 'relative', paddingTop: { md: '60px', lg: '80px', zIndex:'0' } ,paddingBottom:28}}>
                          <List sx={{mt:'30px',ml:'10px'}}>
                          <ListItemButton href="/Teacher">
                                    <ListItemIcon><HomeIcon/></ListItemIcon>
                                    <ListItemText >Home</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="/Teacher/TeacherList">
                                    <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                                    <ListItemText >Teachers</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="/Teacher/StudentList">
                                    <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                                    <ListItemText >Students</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="/Teacher/SubjectList">
                                    <ListItemIcon><AutoAwesomeMotionIcon /></ListItemIcon>
                                    <ListItemText >Subjects</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="/Teacher/MarkList">
                                    <ListItemIcon><TypeSpecimenIcon/></ListItemIcon>
                                    <ListItemText >Marks</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="#">
                                    <ListItemIcon><MessageIcon/></ListItemIcon>
                                    <ListItemText >Parent's Feedback</ListItemText>
                                </ListItemButton>
                        </List>
                        
                    </Grid>
                );
            }}
        </Media>
        
        {/* ========================================Body============================== */}

        <Grid
        
            item
            xs={12}
            sm={12}
            md={10}
            lg={10.5}
            sx={{ padding: { xs: '20px 20px', sm: '20px 20px', md: '120px 20px', lg: '100px 20px' }, position: 'relative' }}
        >
            
            <Outlet />
        </Grid>
    </Grid>

    {/* ================================Footer============================ */}   
    <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            sx={{ padding: '10px', zIndex: '1', backgroundColor:"#18266e", position:'fixed', width: '100%',bottom:'0px' }}
        >
      <Typography > Copyrights © {new Date().getFullYear()} <a style={{fontWeight:'bold',color:'white'}} href='#' target="_Blank"> SmartMarks</a></Typography>  
  
    </Grid>
    
</Box>
)

}

export default TeacherLayout