import { makeStyles } from '@material-ui/styles';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material'
import React from 'react'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import theme from '../../theme/theme'
import { useEffect } from 'react';
import { useState } from 'react';
import Searchbar from '../../components/searchbar/searchbar';
import './loading.css'
import axios from 'axios';
import { toast } from 'react-toastify';


const useStyles = makeStyles(() => ({
  wrapper: {
    border: '1px solid #c8c8c8',
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    "&:hover": {
      boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
      borderLeft: "6px solid #000",
    },
  },
  companyName: {
    fontSize: "13.5px",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: 600,
  },
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "15.5px",
    borderRadius: "5px",
    transition: ".2s",
    cursor: "pointer",
    fontWeight: 600,
    backgroundColor: theme.palette.dark.main,
    color: "#fff",
  }
}));

const JobCard = ({ themePage }) => {
  const [myData, setmyData] = useState([]);
  // const [myApi, setmyApi] = useState([]);
  const [currPage, setcurrPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('java');
  const [loading, setLoading] = useState(false);
  const [addtowish, setAddtowish] = useState(false);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const classes = useStyles();

  const handleToggleWish = async (title, url, company, dateAdded, tags) => {
    try {
      const { data } = await axios.post(`${BASE_URL}saved`,
        {
          title,
          url,
          company,
          dateAdded,
          tags
        }
      )
      console.log(data);
    }
    catch (err) {
      console.log(title, url, company, dateAdded, tags);
      console.log(err);
    }
  };

  const handleToggleApplied = async (title, url, company, dateAdded, tags) => {
    try {
      const { data } = await axios.post(`${BASE_URL}applied`,
        {
          title,
          url,
          company,
          dateAdded,
          tags
        }
      )
      console.log(data);
    }
    catch (err) {
      console.log(title, url, company, dateAdded, tags);
      console.log(err);
    }
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
  }, [currPage, searchQuery]);


  const handleChange = (event, value) => {
    setcurrPage(value);
    console.log(value);
  };

  const handleSearch = (value) => {
    console.log(value);
    setSearchQuery(value);
    setcurrPage(1);
    console.log(value);
  };

  return (
    <Grid item xs={10}>
      <div display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
        <Searchbar onSearch={handleSearch} style={{ borderRadius: '20px' }} />
        {loading && (
          <div className="container">
            <div className="custom-div"></div>
          </div>
        )}
        {myData.length > 0 ? (
          myData.map((post) => {
            const { title, url, company, dateAdded, tags } = post;
            // let icon ;
            return (
              <Box p={5} className={classes.wrapper} m={1} borderRadius={'25px'}
                style={{ backgroundColor: themePage ? theme.palette.dark.main : theme.palette.light.main }}
              >
                <Grid container alignContent="center">
                  <Grid item container xs direction="column">
                    <Grid item>
                      <Typography variant="subtitle1" fontSize={"21px"} style={{ color: themePage ? theme.palette.light.main : theme.palette.dark.main }}>{title}</Typography>
                    </Grid>

                    <Grid item>
                      <Typography className={classes.companyName} variant="subtitle2" pl={"5px"} pr={"5px"}>
                        {company}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs alignContent="center" ml={16}>
                    {tags.map((tag) => (
                      <Grid key={tag.id} item p={"5px"} borderRadius={"5px"}>
                        <Box className={classes.skillChip} pl={"10px"} pr={"10px"} style={{
                          color: themePage ? theme.palette.dark.main : theme.palette.light.main,
                          backgroundColor: themePage ? theme.palette.light.main : theme.palette.dark.main
                        }}>{tag.text.charAt(0).toUpperCase() + tag.text.slice(1).toLowerCase()}</Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Grid item container xs direction="column" alignItems="flex-end">
                    <Grid item>
                      <Typography variant="caption" style={{ color: themePage ? theme.palette.light.main : theme.palette.dark.main }}>
                        {`${dateAdded.slice(0, 10)}`} | Full time | Remote
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Box mt={1} display={"flex"} flexDirection={"row"}>

                        {/* <Bookmark /> */}
                        <Typography pt={1} pr={1} fontSize={'27px'} style={{ cursor: "pointer", color: themePage ? theme.palette.light.main : theme.palette.dark.main }}
                          onClick={() => {
                            localStorage.getItem('email') == undefined ? toast.warn('Please Login First', {
                              position: "top-center",
                              autoClose: 2000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: themePage? 'dark':'light',
                              }) :
                              handleToggleWish
                                (
                                  title,
                                  url,
                                  company,
                                  dateAdded,
                                  tags
                                )
                          }
                          }
                        >
                          <BsBookmarkStar />
                        </Typography>

                        <Button variant="outlined" target='blank' href={url} onClick={
                          () => {
                            localStorage.getItem('email') == undefined ? console.log('Please Login First') :
                              handleToggleApplied
                                (
                                  title,
                                  url,
                                  company,
                                  dateAdded,
                                  tags
                                )
                          }
                        }
                          style={{
                            color: themePage ? theme.palette.light.main : theme.palette.dark.main,
                            borderColor: themePage ? theme.palette.light.main : theme.palette.dark.main,
                          }}>
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
      <Box justifyContent="center" alignContent="center" display="flex" sx={{ margin: '20px 0px' ,'.Mui-selected':{
        color: theme.palette.light.main,
      }}}>
      <Pagination
        count={30}
        page={currPage}
        onChange={handleChange}
        size="large"
        color="primary"
        sx={{
          '& .Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.light.main,
          },
          
        }}
      />
    </Box>
      </div>
    </Grid>
  );
};

export default JobCard;