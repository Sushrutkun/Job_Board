import { Box, Button, Grid, Typography} from "@mui/material";
import theme from '../theme/theme' 
import { useState } from "react";
import NewJob from "./Job/NewJob";
// import showModal from "./Job/NewJob";




function Header() 
{
  const [showModal,setshowModal]=useState(false);

  return (
    <Box py={10} bgcolor={"secondary.main"} color={"white"}>
      <Grid container justifyContent="center" >
        <Grid item xs={10}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5">Open Job Listing</Typography>
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