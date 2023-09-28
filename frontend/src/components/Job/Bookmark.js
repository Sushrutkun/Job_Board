import { Typography } from '@mui/material'
import React from 'react'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';

const Bookmark = ({ icon, handleToggleWish, post }) => {
    const { title, url, company, dateAdded, tags } = post;

    const switchIcon = (icon) => {
        if (icon) {
            return <BsBookmarkStarFill />
        }
        else {
            return <BsBookmarkStar />
        }
    }


    const changeIcon = () => {
       icon = !icon;
    }



    
    return (
        <div>
            <Typography pt={1} pr={1} fontSize={'27px'} style={{ cursor: "pointer" }}
            
                onclick={()=>{
                    handleToggleWish
                    (
                        title,
                        url,
                        company,
                        dateAdded,
                        tags
                    )
                
                }}
            >{
                    switchIcon(icon)}
                {/* {console.log(addtowish)} */}
            </Typography>
        </div>
    )
}

export default Bookmark
