import * as React from 'react';
import { Avatar, Box, Button, Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import NewJob from "../Newjob/NewJob";
import { useNavigate } from 'react-router-dom';
import ViewProfile from '../Profile/ViewProfile';
import logo_job from '../../assets/Job-board-new.png';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { toast } from 'react-toastify';

function Header({ themePage, setThemePage }) {
  const [showModal, setshowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    setThemePage(!themePage);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewProfile = (event) => {
    // Handle the click action based on the selected option.
    // You can perform state updates or other actions here.
    if (localStorage.getItem('email')==undefined) {
      toast.warn('Please Login to view profile', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: themePage ? "dark" : "light",
        });
      navigate('/login');
      handleClose();
    }
    else {
      console.log(`${event}`);
      setShowProfile(true);
      handleClose();
    }
  };

  const handleHome = (event) => {
    // Handle the click action based on the selected option.
    // You can perform state updates or other actions here.
    console.log(`${event}`);
    navigate('/');
    handleClose();  
  };

  const handleSavedJobs = (event) => {
    // Handle the click action based on the selected option.
    // You can perform state updates or other actions here.
    console.log(`${event}`);
    if (localStorage.getItem('email') == undefined) {
      toast.warn('Please Login for saved jobs', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: themePage? 'dark':'light',
        })
      navigate('/login');
      handleClose();
    }
    else {
      navigate('/saved');
      handleClose();
    }
  };

  const handleAppliedJobs = (event) => {
    // Handle the click action based on the selected option.
    // You can perform state updates or other actions here.
    console.log(`${event}`);
    if (localStorage.getItem('email') == undefined) {
      toast.warn('Please Login for applied jobs', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: themePage? 'dark':'light',
        })
      navigate('/login');
      handleClose();
    }
    else {
      navigate('/applied');
      handleClose();
    }
  };


  return (
    <Box py={8} bgcolor={"dark.main"} color={"white"} display={"flex"} flexDirection={"column"} paddingTop={'50px'}>
      <Grid container justifyContent="center" >
        <Grid item xs={10}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <img src={logo_job} alt="logo"
                style={{ objectFit: 'cover', width: "100px", height: '100px', cursor: 'pointer' }}
                onClick={() => { navigate('/') }}
              />
            </Box>
            <Box display={"flex"} flexDirection={'column'} alignItems={"flex-end"} gap={'10px'}>
              <div>
                <div id='dark-light' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '30px' }}>
                  <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={30}
                    color='white'
                  />
                  <IconButton onClick={handleClick} >
                    <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                      style={{ cursor: "pointer" }} sx={{ width: 40, height: 40 }} />
                  </IconButton>
                </div>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  style={{ marginTop: "0px" }}
                >
                  <MenuItem onClick={() => handleHome("Home")} sx={{ fontSize: '16px' }}>Home</MenuItem>
                  <MenuItem onClick={() => handleViewProfile("View Profile")} sx={{ fontSize: '16px' }}>View Profile</MenuItem>
                  <MenuItem onClick={() => handleSavedJobs("Saved Jobs")} sx={{ fontSize: '16px' }}>Saved Jobs</MenuItem>
                  <MenuItem onClick={() => handleAppliedJobs("Applied Jobs")} sx={{ fontSize: '16px' }}>Applied Jobs</MenuItem>
                  <MenuItem onClick={() => {
                    localStorage.clear();
                    navigate('/login');
                  }}
                    sx={{ fontSize: '16px', display: localStorage.getItem('email') ? 'hidden' : 'none' }}

                  >Logout</MenuItem>

                  <MenuItem onClick={() => {
                    navigate('/login');
                  }}
                    sx={{ fontSize: '16px', display: localStorage.getItem('email') ? 'none' : "hidden" }}
                  >LogIn</MenuItem>
                </Menu>
                {showProfile ?
                  <ViewProfile setShowProfile={setShowProfile} themePage={themePage} /> : null}
              </div>
              <Button variant="contained"
                onClick={() => {
                  setshowModal(true);
                }}
                disableElevation >Post a job</Button>
              {showModal ?
                <NewJob showModal={showModal} setshowModal={setshowModal} /> : null}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

}

export default Header