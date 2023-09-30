import './App.css';
import React, { useState } from 'react';
import { Button, Grid, ThemeProvider } from '@mui/material';
import Header from './components/header/header';
import theme from './theme/theme'
import JobCard from './pages/Jobs/JobCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import SavedJobs from './pages/SavedJobs';
import AppliedJobs from './pages/AppliedJobs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // if false light theme 
  // else dark theme
  const [themePage, setThemePage] = useState(false);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={
                <>
                  <Header themePage={themePage} setThemePage={setThemePage} />
                  {/* <Grid container justifyContent={"center"}
                    style={{ backgroundColor: themePage ? theme.palette.dark.main : theme.palette.light.main }}
                  > */}
                    <JobCard key={"1"} themePage={themePage} />
                  {/* </Grid> */}
                </>
              } />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/saved' element={
                <>
                  <Header themePage={themePage} setThemePage={setThemePage} />
                  <SavedJobs themePage={themePage} />
                </>
              } />
              <Route path='/applied' element={
                <>
                  <Header themePage={themePage} setThemePage={setThemePage} />
                  <AppliedJobs themePage={themePage} />
                </>
              } />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      <ToastContainer />
    </>
  );

}

export default App;
