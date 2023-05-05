import { makeStyles } from "@material-ui/styles";
import { Box, Button, MenuItem, Select } from "@mui/material"


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
  }));
function Searchbar()
{
    const classes = useStyles();
    return(
        <Box p={3} mt={-4} mb={2} className={classes.wrapper}>
            <Select disableUnderline defaultValue="Full-Time">
                <MenuItem value="Full-Time">Full-Time</MenuItem>
                <MenuItem value="Part-Time">Part-Time</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>
            </Select>
            <Select disableUnderline defaultValue="In-Office">
                <MenuItem value="In-Office">In-Office</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
            </Select>
            <Box mt={1.5}>
            <Button variant="contained" disableElevation>Search</Button>
            </Box>
        </Box>
    )
}
export default Searchbar