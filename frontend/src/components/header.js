import * as React from 'react';
import { Avatar, Box, Button, Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import NewJob from "./Job/NewJob";
import { useNavigate } from 'react-router-dom';
import ViewProfile from './User/ViewProfile';

function Header() {
  const [showModal, setshowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewProfile = (event) => {
    // Handle the click action based on the selected option.
    // You can perform state updates or other actions here.
    console.log(`${event}`);
    setShowProfile(true);
    handleClose();
  };

  const handleSavedJobs = (event) => {
    // Handle the click action based on the selected option.
    // You can perform state updates or other actions here.
    console.log(`${event}`);
    navigate('/saved');
    setShowProfile(true);
    handleClose();
  };

  const handleAppliedJobs = (event) => {
    // Handle the click action based on the selected option.
    // You can perform state updates or other actions here.
    console.log(`${event}`);
    navigate('/applied');
    setShowProfile(true);
    handleClose();
  };


  return (
    <Box py={8} bgcolor={"secondary.main"} color={"white"} display={"flex"} flexDirection={"column"} >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "end", marginRight: "100px", marginBottom: "20px", marginTop: "-40px" }}>
        <IconButton onClick={handleClick} >
          <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
            style={{ cursor: "pointer" }} sx={{ width: 40, height: 40 }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{ marginTop: "0px" }}
        >
          <MenuItem onClick={() => handleViewProfile("View Profile")} sx={{ fontSize: '16px' }}>View Profile</MenuItem>
          <MenuItem onClick={() => handleSavedJobs("Saved Jobs")} sx={{ fontSize: '16px' }}>Saved Jobs</MenuItem>
          <MenuItem onClick={() => handleAppliedJobs("Applied Jobs")} sx={{ fontSize: '16px' }}>Applied Jobs</MenuItem>
          <MenuItem onClick={() => navigate('/login')} sx={{ fontSize: '16px' }}>Logout</MenuItem>
        </Menu>
        {showProfile ?
          <ViewProfile setShowProfile={setShowProfile} /> : null}
      </div>
      <Grid container justifyContent="center" >
        <Grid item xs={10}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Typography variant="h5">Open Job Listing</Typography>
            </Box>
            <Button variant="contained"
              onClick={() => {
                setshowModal(true);
              }}
              disableElevation >Post a job</Button>
            {showModal ?
              <NewJob showModal={showModal} setshowModal={setshowModal} /> : null}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

}

export default Header