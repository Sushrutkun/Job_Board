import { makeStyles } from '@material-ui/styles';
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../theme/theme' 
import { differenceInMinutes } from 'date-fns';


const useStyles=makeStyles(() => ({
    wrapper:{
        border:'1px solid #c8c8c8',
        cursor:"pointer",
        transition:"0.3s",

        "&:hover":{
            boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",
            borderLeft:"6px solid #000",
        },
    },
    companyName:{
        fontSize:"13.5px",
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius:"5px",
        display:"inline-block",
        fontWeight:600,
    },
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "15.5px",
        borderRadius:"5px",
        transition:".2s",
        cursor:"pointer",
        fontWeight:600,
        backgroundColor: theme.palette.secondary.main,
        color:"#fff",
    }
}));

const JobCard = (props) => {
const classes=useStyles();
  return (
    <Box p={2} className={classes.wrapper}>
      <Grid container alignContent={"center"}>
        <Grid item container xs direction={'column'}>
            <Grid item>
                <Typography variant='subtitle1'>{props.title}</Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.companyName} variant='subtitle2' >{props.companyName}</Typography>
            </Grid>
        </Grid>

        <Grid item container xs >
            {props.skills.map((skill)=>(
                <Grid key={skill} item>
                    <Box className={classes.skillChip}>{skill}</Box>
                </Grid>
            ))}
        </Grid>

        <Grid item container xs direction={"column"} alignItems={"flex-end"}>
            <Grid item>
                <Typography variant='caption'>{`${differenceInMinutes(Date.now(),props.postedOn)}`} min ago | {props.type} | {props.location}</Typography>
            </Grid>
            <Grid item>
                <Box mt={1}>
                    <Button variant="outlined" href={props.link}>Apply Now</Button>
                </Box>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default JobCard
