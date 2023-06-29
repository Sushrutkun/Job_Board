import { makeStyles } from "@material-ui/styles";
import { Box, Button,  MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react";


const useStyles = makeStyles(() => ({
    wrapper: {
      backgroundColor: "#fff",
      display: "flex",
      boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
      borderRadius: "5px",
      '& > *': {
        flex: 1,
        height: "45px",
        margin: "8px",
      },
    },
    textField: {
      minWidth: "200px", // Adjust the minimum width as needed
    },
  }));
function Searchbar({onSearch})
{
    const [inputData,setInputData]=useState('java');
    const handleChange= (event) => {
        setInputData(event.target.value)
    }
    const handleSearch = () => {
        // Handle the form submission with the input value
        // console.log('Input value:', inputData);
        onSearch(inputData);
      };
    const classes = useStyles();
    return(
        <Box p={3} mt={-4} mb={2} className={classes.wrapper}>
            {/* <Select disableUnderline defaultValue="Full-Time">
                <MenuItem value="Full-Time">Full-Time</MenuItem>
                <MenuItem value="Part-Time">Part-Time</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>
            </Select>
            <Select disableUnderline defaultValue="In-Office">
                <MenuItem value="In-Office">In-Office</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
            </Select> */}
            {/* this will be search for job_type and job_company */}
            <Box mt={1.5}>
              <TextField
                id="outlined-basic"
                label="Keyword"
                value={inputData}
                onChange={handleChange}
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
            </Box>
            <Select disableunderline="true" defaultValue="">
                <MenuItem value="In-Office">In-Office</MenuItem>
            </Select>
            <Box mt={1.5}>
            <Button variant="contained" disableElevation onClick={handleSearch}>Search</Button>
            </Box>
        </Box>
    )
}
export default Searchbar