import { makeStyles } from '@material-ui/styles';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import theme from "../../theme/theme"
import CloseIcon from '@material-ui/icons/Close';

const useStyles=makeStyles(() => ({
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "15.5px",
        borderRadius:"5px",
        transition:".2s",
        cursor:"pointer",
        fontWeight:600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color:theme.palette.secondary.main,
         
        "&:hover":{
            backgroundColor:theme.palette.secondary.main,
            color:"#fff",
        },
    },
}));

const NewJob = ({showModal,setshowModal}) => {
    const skill =[
        "Javascript",
        "React",
        "Node",
        "Vue",
        "Firebase",
        "MongoDB",
        "SQL",
    ];


    // const state =useState();
    // let [count,setCount]=useState("hidden");
    // console.log(count);
    // const showModal =()=>
    // {
    //     setCount("visible");
    // };

    const classes=useStyles();
  return (
    <Dialog open={true} fullWidth 
    >
        <DialogTitle>
            <Box display={'flex'} justifyContent={"space-between"}alignItems={"center"}>
                Post Job
                <IconButton >
                    <CloseIcon onClick={()=>{
              setshowModal(false);
            }}/>
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FilledInput placeholder='Job title *' disableunderline fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <Select 
                        fullWidth
                        disableunderline="true"
                        variant='filled'
                        defaultValue={"Full-time"}
                    >
                    <MenuItem value="Full-time">Full-time</MenuItem>
                    <MenuItem value="Part-time">Part-time</MenuItem>
                    <MenuItem value="Intern">Intern</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder='Company name *' disableunderline="true" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder='Company URL *' disableunderline="true" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <Select 
                        fullWidth
                        disableunderline="true"
                        variant='filled'
                        defaultValue={"Remote"}
                    >
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="In office">In office</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder='Job Link *' disableunderline="true" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <FilledInput
                    placeholder='Job description *' 
                    disableunderline="true"
                    fullWidth
                    multiline
                    rows={4}
                    />
                </Grid>
            </Grid>
           <Box>
                <Typography>Skills</Typography>
                <Box display={"flex"}>
                    {skill.map((skill)=>(
                        <Box className={classes.skillChip} key={skill}>
                            {skill}
                        </Box>
                    ))}
                </Box>
           </Box>
        </DialogContent>
        <DialogActions>
            <Box
                color={"red"}
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={'center'}
            >
                <Typography>*Required fields</Typography>
                <Button variant="contained" disableElevation color='primary'>Post job</Button>
            </Box>
        </DialogActions>
    </Dialog>
  )
}

export default NewJob
