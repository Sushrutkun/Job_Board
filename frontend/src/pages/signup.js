import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Avatar, Box, Button, IconButton, TextField } from '@mui/material';



function SignupPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [isDarkMode, setDarkMode] = React.useState(false);

    
    const navigate = useNavigate();

    const handleusernameChange = (e) => {
        setUsername(e.target.value)
        // console.log(e.target.value)
    }
    const handlepasswordChange = (e) => {
        setPassword(e.target.value)
        // console.log(e.target.value)
    }
    const handleemailChange = (e) => {
        setEmail(e.target.value)
        // console.log(e.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                `${BASE_URL}signup`,
                {
                    username,
                    email,
                    password
                },
            )
            console.log(data);
            localStorage.setItem("token", data.token)
            localStorage.setItem("username", data.username)
            localStorage.setItem("email", data.email)
            event.target.reset();
            navigate('/');
        }
        catch (err) {
            console.log(err);
            alert("Error Occured Change email id or username")
        }
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
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    maxHeight: '80vh', // Limit the height of the form
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '10px',
                    boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '400px',
                    paddingTop: '20px',
                    // paddingBottom: '50px',
                }}
            >
                <h1
                    className="signup"
                    style={{
                        textAlign: 'center',
                        marginBottom: '10px',
                        marginTop: "0px",
                        fontSize: '28px',
                        color: '#333', // Customize the text color
                    }}
                >
                    Signup
                </h1>
                <IconButton
                    className="imgcontainer"
                    style={{ marginBottom: '50px' }}
                >
                    <Avatar
                        src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                        alt="Avatar"
                        className="avatar"
                        sx={{
                            width: '90px', // Set the avatar width
                            height: '90px', // Set the avatar height
                        }}
                    />
                </IconButton>
                <div className="container" style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        type="text"
                        placeholder="Enter Username"
                        className='uname'
                        required
                        // maxLength="11"
                        value={username}
                        onChange={(e) => handleusernameChange(e)}
                        sx={{ width: '150%', marginBottom: '15px' }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        placeholder="Enter Email"
                        className='uname'
                        required
                        value={email}
                        onChange={(e) => handleemailChange(e)}
                        sx={{ width: '150%', marginBottom: '15px' }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                        value={password}
                        onChange={(e) => handlepasswordChange(e)}
                        sx={{ width: '150%', marginBottom: '20px' }}
                    />
                    {/* <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}> */}
                    <Button
                        variant="outlined"
                        disableElevation
                        type="submit"
                        style={{
                            width: '100%',
                            fontSize: '20px',
                            padding: '10px',
                            // marginTop: '10px', // Add some spacing between buttons
                        }}
                    >
                        Sign Up
                    </Button>
                    <a
                        variant="contained" // Use a filled button style
                        color="primary" // Customize the button color
                        type="submit"
                        style={{
                            width: '100%',
                            fontSize: '15px',
                            color: 'blue',
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                        onClick={() => navigate('/login')}
                    >
                        Already a User Click here...
                    </a>
                </div>
            </form>
        </Box>

    );
}

export default SignupPage;