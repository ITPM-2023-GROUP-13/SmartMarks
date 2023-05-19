import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormHelperText } from "@mui/material";


function Login() {
  const navigate = useNavigate();
  const theme = createTheme();
  const [uType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [formErrors, setFormErrors] = useState({});

const handleSubmit = async (event) => {
  event.preventDefault();

  const errors = {};

  if (!uType) {
    errors.uType = "User type is required";
  }

  if (!email) {
    errors.email = "Email is required";
  }

  if (!userID) {
    errors.userID = "UserID is required";
  }

  if (uType === "Teacher" && !errors.email && !errors.userID) {
    try {
      const response = await axios.post(
        "http://localhost:5000/teacher/teacherLogin",
        {
          reg_no: userID,
          email: email,
        },
        // {
        //   timeout: 10000, // Set the timeout to 10 seconds (adjust as needed)
        // }
      );

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        // Save the token to local storage or a state variable

        navigate(`/Teacher/${userID}`, { replace: true });
      } else {
        console.log("User not found");
      }
    } catch (error) {
      alert("User Not Found")
      console.log("error",error);
    }
  } else if (uType === "Student" && !errors.userID) {
    navigate(`/Student/${userID}`, { replace: true });
  }

  setFormErrors(errors);
};


return(

  <ThemeProvider theme={theme}>
  <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://edunewsnetwork.files.wordpress.com/2021/07/view-heres-why-india-needs-to-be-future-ready-in-online-education.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form"  sx={{ mt: 1 }}>

          <TextField
            margin="normal"
            required
            fullWidth
            name="userID"
            label="UserID"
            type=""
            id="username"
            autoComplete="current-password"
            value={userID}
            onChange={(event) => setUserID(event.target.value)}
            error={!!formErrors.userID}
            helperText={formErrors.userID}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email Address"
            type=""
            id="email"
            autoComplete="current-email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
              <Grid item xs={12} >
                  <FormControl error={!!formErrors.uType} component="fieldset">
                    <FormLabel id="demo-controlled-radio-buttons-group">User Type</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="user-type"
                      name="user-type"
                     
                     value={uType}
                      onChange={(event) => setUserType(event.target.value)}
                    >
                      <FormControlLabel value="Student" control={<Radio />} label="Student" />
                      <FormControlLabel value="Teacher" control={<Radio />} label="Teacher" />
                    </RadioGroup>
                    {formErrors.uType && (
                        <FormHelperText>{formErrors.uType}</FormHelperText>
                        )}
                  </FormControl>
              </Grid>
            
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box sx={{marginTop:3}}>
        <Typography > Copyrights © {new Date().getFullYear()} <a style={{fontWeight:'bold',color:'black'}} href='#' target="_Blank"> SmartMarks</a></Typography> 
        </Box>
        </Box>
      </Box>
    </Grid>
  </Grid>
</ThemeProvider>
      )
}

export default Login;