import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";


export default function AppPagination(){
    const [myData, setmyData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
  
          const url = 'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=java';
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
            console.log(result);
            setmyData(result);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    //   const [page, setPage] = useState(1);  
    //   const handleChange = (event, value) => {
    //       setPage(value);
    //   };

    return(
        <Box justifyContent={"center"} alignContent="center" display={"flex"}
        sx={{
            margin: "20px 0px"
        }}>
            <Pagination
                count={myData.totalPages} 
                // page={page}
                // onChange={handleChange}
                variant="outlined" size="large"
            />
        </Box>
    );
}