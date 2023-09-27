import './App.css';
import React from 'react';
import { Button, Grid, ThemeProvider } from '@mui/material';
import Header from './components/header';
import theme from './theme/theme'
import JobCard from './components/Job/JobCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import SavedJobs from './components/User/SavedJobs';
import AppliedJobs from './components/User/AppliedJobs';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <>
                <Header />
                <Grid container justifyContent={"center"}>
                  <Grid item xs={10}>
                    <JobCard key={"1"} />
                  </Grid>
                </Grid>
              </>
            } />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/saved' element={<SavedJobs />} />
            <Route path='/applied' element={<AppliedJobs />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );

}

export default App;
