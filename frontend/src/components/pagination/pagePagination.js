import { Pagination, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import theme from '../../theme/theme';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const pagePagination = ({ handleChange, currPage, themePage}) => {
    return (
        <ThemeProvider theme={themePage? darkTheme:lightTheme }>
            <Pagination
                count={30}
                page={currPage}
                onChange={handleChange}
                size="large" 
                color={themePage? "standard":"primary"}
            />
        </ThemeProvider>
    )
}

export default pagePagination
