import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, IconButton, TextField } from '@mui/material';
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
      alert("Username or Password is Incorrect")
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
        {/* <Box className="signup-box" > */}
        <h1 className="signup" style={{
          textAlign: 'center',
          marginBottom: '10px',
          marginTop: "0px",
          fontSize: '28px',
          color: '#333', // Customize the text color
        }}>Login</h1>
        <IconButton className="imgcontainer" style={{ marginBottom: '50px' }}>
          <Avatar
            src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
            alt="Avatar" className="avatar" sx={{
              width: '90px', // Set the avatar width
              height: '90px', // Set the avatar height
            }} />
        </IconButton>
        <div className="container" style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <TextField id="outlined-basic" label="Name" variant="outlined" type="text" placeholder="Enter Username" className='uname' required maxLength="11" value={username} onChange={(e) => handleusernameChange(e)} sx={{ width: '150%', marginBottom: '15px' }} />
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => handlepasswordChange(e)}
            sx={{ width: '150%', marginBottom: '20px' }} />
          <Button variant="outlined" disableElevation type="submit" style={{
            width: '100%',
            fontSize: '20px',
            padding: '10px',
          }}>Login</Button>
          <a
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
          </a>
        </div>
      </form>
    </Box>
  );
}

export default LoginPage;