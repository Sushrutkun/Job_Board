import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';
// const URL=process.env.REACT_APP_URL_API;

// const BASE_URL = URL+"/api/v1/users/";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const handleusernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlepasswordChange = (e) => {
    setPassword(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //     // const RQ_URL=(URL+"/api/v1/users/login");
      const { data } = await axios.post(
        `${BASE_URL}signin`,
        {
          username,
          password
        },
      );
      console.log(data);
      localStorage.setItem("token", data.token)
      localStorage.setItem("username", data.username)
      localStorage.setItem("email", data.email)
      // console.log(username);
      // console.log(password);
      navigate('/');
    }
    catch (err) {
      console.log(err);
      toast.error("Username or Password   is Incorrect", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    // const name = e.target.elements.username;
    // const password = e.target.elements.password;
    // console.log(name);
    // console.log(password);
    // console.log(e.target.username);
    // console.log(e.target.password);
    // e.target.reset();


  };



  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.22)',
        backgroundSize: 'cover',
        justifyContent: 'center',
        flexShrink: 0,
        alignItems: 'center',
      }} >
      <form onSubmit={handleSubmit}
        style={{
          maxHeight: '67vh', // Limit the height of the form
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px',
          boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '400px',
          paddingTop: '50px',
          paddingBottom: '10px',
        }}>
        <Typography className="signup" style={{
          textAlign: 'center',
          marginBottom: '10px',
          marginTop: "0px",
          fontSize: '28px',
          color: '#333', // Customize the text color
        }}>Login</Typography>

        <IconButton className="imgcontainer"
        // style={{ marginBottom: '50px' }}
        >
          <Avatar
            src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
            alt="Avatar" className="avatar" sx={{
              width: '90px', // Set the avatar width
              height: '90px', // Set the avatar height
            }} />
        </IconButton>

        <Grid item
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
          <Container>
            <TextField id="outlined-basic" label="Name" variant="outlined" type="text" placeholder="Enter Username" className='uname' required maxLength="11" fullWidth value={username} onChange={(e) => handleusernameChange(e)}
              sx={{ marginBottom: '15px' }} />
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => handlepasswordChange(e)} fullWidth
              sx={{ marginBottom: '15px' }} />
            <Button variant="outlined" disableElevation type="submit" style={{
              width: '100%',
              fontSize: '20px',
              padding: '10px',
            }}>Login</Button>
            <Typography
              type="submit"
              style={{
                width: '100%',
                fontSize: '15px',
                color: 'blue',
                padding: '20px',
                // paddingRight:'100px',
                alignItems: 'flex-end',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/signup')}
            >
              New User Register here...
            </Typography>
          </Container>
        </Grid>
      </form>
    </Box>
  );
}

export default LoginPage;