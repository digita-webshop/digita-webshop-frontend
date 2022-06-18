import React from "react";
import {Box} from "@mui/material";
import iconLoading from '../../Assets/Images/icon-loading.png'
import Slider from "./Slider/Slider";
import {boxStyles, Title, WrapperBox} from "../../Styles/ShopByCategories";

function ShopByCategories() {

    return (
        <WrapperBox>
            <Box sx={boxStyles}>
                <Title variant="h2">Shop By Categories</Title>
                <img className='loading' src={iconLoading}/>
                <Slider/>
            </Box>
        </WrapperBox>
    );
}

export default ShopByCategories;
