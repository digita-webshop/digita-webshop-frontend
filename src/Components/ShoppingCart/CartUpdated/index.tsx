import {Box, Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

const CartUpdated = () => {
    return <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        margin: '0 0 30px',
        border: '1px solid #ddd'
    }}>
        <CheckIcon sx={{
            fontSize: '0.9rem',
            marginRight: '10px',
            color: '#ddd'
        }}/>
        <Typography sx={{
            fontSize: '14px',
            color: '#777'

        }}>Cart updated.</Typography>
    </Box>
}

export default CartUpdated;
