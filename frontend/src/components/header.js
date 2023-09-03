import * as React from 'react';
import { Avatar, Box, Button, Grid, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import { useState } from "react";
import NewJob from "./Job/NewJob";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// import f from "../../avatar.png"

function Header() 
{
  const [showModal,setshowModal]=useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option) => {
    // Handle the click action based on the selected option.
    // You can perform state updates or other actions here.
    console.log(`Clicked on: ${option}`);
    handleClose();
  };


  return (
    <Box py={8} bgcolor={"secondary.main"} color={"white"} >
      <IconButton onClick={handleClick}>
        <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" 
          style={{marginLeft:"10px",marginBottom:"-55px",cursor:"pointer"}} sx={{ width: 90, height: 90 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{marginTop:"40px"}}
      >
        <MenuItem onClick={() => handleOptionClick("View Profile")}sx={{ fontSize: '16px' }}>View Profile</MenuItem>
        <MenuItem onClick={() => handleOptionClick("Logout")}sx={{ fontSize: '16px' }}>Logout</MenuItem>
      </Menu>
      <Grid container justifyContent="center" >
        <Grid item xs={10}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Typography variant="h5">Open Job Listing</Typography>
            </Box>
            <Button variant="contained" 
            onClick={()=>{
              setshowModal(true);
            }}
            disableElevation >Post a job</Button>
            {showModal? 
            <NewJob showModal={showModal} setshowModal={setshowModal}/> : null}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

}  

export default Header