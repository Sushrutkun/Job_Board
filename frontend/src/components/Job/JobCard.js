import { makeStyles } from '@material-ui/styles';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material'
import React from 'react'
import {BsBookmarkStar,BsBookmarkStarFill} from 'react-icons/bs'
import theme from '../../theme/theme' 
import { useEffect } from 'react';
import { useState } from 'react';
import Searchbar from '../searchbar';
import './loading.css'

  

const useStyles=makeStyles(() => ({
    wrapper:{
        border:'1px solid #c8c8c8',
        cursor:"pointer",
        transition:"0.3s",
        boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius: "5px",
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

// const query='java';
// const pageno='1';

// function geturl (query,pageno){
//   return(
//     // const baseurl=
//     'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/'+
//     // const SearchQuery=
//     "Search?SearchQuery="+query
//     // +
//     // const page=
//     // '&PageSize=10&PageNumber='+pageno
//   );
// }


    // url for using API is => 'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=java' simple
    // 'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=java&PageSize=10&PageNumber=1' with pagenum

const JobCard = () => {
    const [myData, setmyData] = useState([]);
    // const [myApi, setmyApi] = useState([]);
    const [currPage ,setcurrPage] = useState(1);
    const [searchQuery,setSearchQuery] = useState('java');
    const [loading, setLoading] = useState(false);
    const [addtowish, setAddtowish] = useState(false);


    const classes = useStyles();
    const handleToggleWish = (e) => {
      console.log(e);
      // setAddtowish((prev) => !prev);
      e.target.innerHTML = "HI";
      // e.target = "<BsBookmarkStarFill/>";
      // e.target.style.color = "blue";

    };
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true) //set Loading as true when we are making api call
        const url = `https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=${searchQuery}&PageSize=10&PageNumber=${currPage}`; 
        // geturl(query,pageno);
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
          // setmyApi(result);
          setmyData(result.data);
        } catch (error) {
          console.error(error);
        }
        setLoading(false) // api call done
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      
      fetchData();
    }, [currPage,searchQuery]);
    
    const handleChange = (event, value) => {
      setcurrPage(value);
      console.log(value);
    };
    
    const handleSearch = (value) => {
      setSearchQuery(value);
      setcurrPage(1);  
      console.log(value);
    };

    return (
    <>
      <Searchbar onSearch={handleSearch} />
      {loading && (
        <div className="container">
          <div className="custom-div"></div>
        </div>
        )}
      {myData.length > 0 ? (
        myData.map((post) => {
        const { id, title, url, company,dateAdded,tags} = post;
        return (
        <Box p={5} className={classes.wrapper} key={id} m={1}>
          <Grid container alignContent="center"  >
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

            <Grid item container xs alignContent="center" ml={16}>
              {tags.map((tag) => (
                  <Grid key={tag.id} item>
                    <Box className={classes.skillChip}>{tag.text.charAt(0).toUpperCase() + tag.text.slice(1).toLowerCase()}</Box>
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
                <Box mt={1} display={"flex"} flexDirection={"row"}>
                  <Typography pt={1} pr={1} fontSize={'27px'} style={{cursor:"pointer"}} 
                  onClick={handleToggleWish
                    // console.log("kuch bhi ..")
                    
                  }>
                      {/* {!addtowish? <BsBookmarkStar/>:   <BsBookmarkStarFill/>} */}
                      <BsBookmarkStarFill/>
                  </Typography>
                  <Button variant="outlined" target='blank' href={url}>
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

        
      <Box justifyContent={"center"} alignContent="center" display={"flex"}
        sx={{
            margin: "20px 0px"
        }}>
        <Pagination
          count={30} 
          page={Number(currPage)}
          onChange={handleChange}
          size="large" color="primary"
        />
      </Box>

    </>
    );
  };
  
  export default JobCard;