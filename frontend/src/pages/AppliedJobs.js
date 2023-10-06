import React from 'react'
import Header from '../components/header/header'
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material'
import { AiOutlineDelete } from 'react-icons/ai'
import theme from '../theme/theme'
import { useEffect } from 'react';
import { useState } from 'react';
import Searchbar from '../components/searchbar/searchbar';
import './Jobs/loading.css'
import axios from 'axios';
import PagePagination from '../components/pagination/pagePagination';

const useStyles = makeStyles(() => ({
  wrapperlight: {
    border: '1px solid #c8c8c8',
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    "&:hover": {
      boxShadow: "0px 5px 25px rgba(0,0,0,0.5)",
      borderLeft: "6px solid #000",
      borderRight: "1px solid #000",
      borderTop: "1px solid #000",
      borderBottom: "1px solid #000",
    },
  },
  wrapperdark: {
    border: '1px solid #333',
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0px 1px 5px rgba(255,255,255,0.4)",
    borderRadius: "5px",
    "&:hover": {
      boxShadow: "0px 1px 25px rgba(255,255,255,0.5)",
      borderLeft: "6px solid #FFF",
      borderRight: "1px solid #FFF",
      borderTop: "1px solid #FFF",
      borderBottom: "1px solid #FFF",
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

const AppliedJobs = ({themePage}) => {
  const [myData, setmyData] = useState([]);
  // const [myApi, setmyApi] = useState([]);
  const [currPage, setcurrPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('java');
  const [loading, setLoading] = useState(false);
  const [addtowish, setAddtowish] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // console.log(process.env.REACT_APP_BASE_URL);

  const convertToUppercase = (str) => {
    if (typeof str === 'undefined') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const classes = useStyles();
  const fetchData = async () => {
    setLoading(true) //set Loading as true when we are making api call
    try {
      const url = `${BASE_URL}applied`
      const { data } = await axios.get(url,
      {
        params: {
          username: localStorage.getItem("username"),
        },
      });
      console.log(data);
      setmyData(data);
    }
    catch (err) {
      console.log(err);
    }
    setLoading(false) // api call done
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteIt = async (_id) => {
    try {
      const url = `${BASE_URL}applied`
      const data = await axios.delete(url, { data: { _id } });
      fetchData();
      console.log(data);
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event, value) => {
    setcurrPage(value);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    setcurrPage(1);
    // console.log(value);
  };
  return (
    <div >
      <Grid container justifyContent={"center"} style={{ backgroundColor: themePage ? theme.palette.dark.main : theme.palette.light.main }}>
        <Grid item xs={10}>
          <div display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            {/* <Searchbar onSearch={handleSearch} /> */}
            {loading && (
              <div className="container">
                <div className="custom-div"></div>
              </div>
            )}
            {myData && myData.length > 0 ? (
              myData.map((post , index) => {
                const { _id, title, url, company, dateAdded, tags } = post;
                // console.log(post);
                return (
                  <Box p={5} className={themePage ? classes.wrapperdark : classes.wrapperlight} m={1} 
                  borderRadius={'25px'}
                  style={{ backgroundColor: themePage ? "#0B0B15" : theme.palette.light.main }}
                  >
                    <Grid container alignContent="center" >
                      <Grid item container xs direction="column">
                        <Grid item>
                          <Typography variant="subtitle1" fontSize={"21px"} style={{color:themePage? theme.palette.light.main: theme.palette.dark.main}}>{title}</Typography>
                        </Grid>

                        <Grid item>
                          <Typography className={classes.companyName} variant="subtitle2" pl={"5px"} pr={"5px"}>
                            {company}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container xs alignContent="center" ml={16}>
                        {/* {console.log(tags)} */}
                        {tags.map((tag) => (
                          <Grid key={tag._id} item p={"5px"} borderRadius={"5px"}>
                            <Box className={classes.skillChip} pl={"10px"} pr={"10px"}
                             style={{
                              color: themePage ? theme.palette.dark.main : theme.palette.light.main,
                              backgroundColor: themePage ? theme.palette.light.main : theme.palette.dark.main
                            }}
                            >{convertToUppercase(tag.text)}</Box>
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
                          <Button variant="outlined" onClick={() => deleteIt(_id)} 
                          style={{
                            color:themePage ? theme.palette.light.main:theme.palette.dark.main,
                            borderColor:themePage? theme.palette.light.main:theme.palette.dark.main,
                            }} fontSize="20px">
                            <AiOutlineDelete />
                          </Button>
                        </Grid>
                      </Grid>

                    </Grid>
                  </Box>
                );
              })
            ) : (
              <p>No data available.</p>
            )}


            {/* <Box justifyContent={"center"} alignContent="center" display={"flex"}
              sx={{
                margin: "20px 0px"
              }}>
              <PagePagination currPage={currPage} handleChange={handleChange} themePage={themePage} />
            </Box> */}

          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default AppliedJobs
