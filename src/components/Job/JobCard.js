import { makeStyles } from '@material-ui/styles';
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../theme/theme' 
import { differenceInMinutes } from 'date-fns';
import { useEffect } from 'react';
import { useState } from 'react';

  

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


const JobCard = () => {
    const [myData, setmyData] = useState([]);
    const classes = useStyles();
  
    useEffect(() => {
      const fetchData = async () => {
        const url = 'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=react&PageSize=10&PageNumber=2';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '906daa7dfbmsh866b26b3abd48e4p1e469fjsna1cc01584116',
            'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
          }
        };
  
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result.data);
          setmyData(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  

    return (
      <>
      {myData.length > 0 ? (
        myData.map((post) => {
          const { id, title, url, company,dateAdded,tags} = post;
          
          return (
            <Box p={2} className={classes.wrapper} key={id}>
              <Grid container alignContent="center">
                <Grid item container xs direction="column">
                  <Grid item>
                    <Typography variant="subtitle1">{title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.companyName} variant="subtitle2">
                      {company}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item container xs alignContent="center">
                {tags.map((tag) => (
                  <Grid key={tag.id} item>
                    <Box className={classes.skillChip}>{tag.text}</Box>
                  </Grid>
                ))}
              </Grid>
                <Grid item container xs direction="column" alignItems="flex-end">
                  <Grid item>
                    <Typography variant="caption">
                      {`${dateAdded.slice(0,10)}`} | Full time | Remote 
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box mt={1}>
                      <Button variant="outlined" href={url}>
                        Apply Now
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          );
        })
        ) : (
          <p>No data available.</p> 
        )}
      </>
    );
  };
  
  export default JobCard;