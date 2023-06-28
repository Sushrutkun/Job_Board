import './App.css';
import React from 'react';
import { Grid, ThemeProvider} from '@mui/material';
// import theme from './theme/theme';
import Header from './components/header';
import Searchbar from './components/searchbar';
import theme from './theme/theme' 
import JobCard from './components/Job/JobCard';
// import jobdata from './dummyData'
// import AppPagination from './components/Job/pagination';



function App() 
{

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header/>
        <Grid container justifyContent={"center"}>
          <Grid item xs={10}>

            {/* <Searchbar/> */}
            {/* {jobdata.map(job => <JobCard key={job.id}{...job}/>)} */}
            <JobCard key ={"1"}/>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );

}

export default App;
