import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Avatar, Box, Button, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';



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
            toast.error("Error Occured Change  email-id or username", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            // alert("Error Occured Change email id or username")
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
                <Typography
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
                </Typography>
                <IconButton
                    className="imgcontainer"
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
                <Grid item
                    className="container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                    <Container>
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="Name"
                            variant="outlined"
                            type="text"
                            placeholder="Enter Username"
                            className='uname'
                            required
                            // maxLength="11"
                            value={username}
                            onChange={(e) => handleusernameChange(e)}
                            sx={{ marginBottom: '15px' }}
                        />
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="email"
                            placeholder="Enter Email"
                            className='uname'
                            required
                            value={email}
                            onChange={(e) => handleemailChange(e)}
                            sx={{ marginBottom: '15px' }}
                        />
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            required
                            value={password}
                            onChange={(e) => handlepasswordChange(e)}
                            sx={{ marginBottom: '15px' }}
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
                            onClick={() => navigate('/login')}
                        >
                            Already a User Click here...
                        </Typography>
                    </Container>
                </Grid>
            </form>
        </Box>

    );
}

export default SignupPage;