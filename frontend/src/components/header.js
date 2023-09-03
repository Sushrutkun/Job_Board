import * as React from 'react';
import { Avatar, Box, Button, Grid, Typography} from "@mui/material";
import { useState } from "react";
import NewJob from "./Job/NewJob";

// import f from "../../avatar.png"

function Header() 
{
  const [showModal,setshowModal]=useState(false);

  return (
    <Box py={8} bgcolor={"secondary.main"} color={"white"} >
      <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" 
        style={{marginLeft:"20px",marginBottom:"-50px"}} sx={{ width: 80, height: 80 }} onClick={()=>{
          console.log("shabas sale idhar hi daba tu...");
        }}/>
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