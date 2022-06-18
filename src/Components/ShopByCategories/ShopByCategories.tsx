import React from "react";
import {Box, Typography} from "@mui/material";
import bgCat from '../../Assets/Images/ShopByCat/bg-cats.jpg'
import iconLoading from '../../Assets/Images/icon-loading.png'
import {styled} from "@mui/material/styles";
import Slider from "./Slider/Slider";

function ShopByCategories() {

    const WrapperBox = styled(Box)(({theme}) => ({
        width: '100%',
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${bgCat})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '175px 5px 205px',
        display: "flex",
        justifyContent: "center",
        ".loading": {
            alignSelf: "center",
            marginBottom: '45px'
        }
    }))

    const Title = styled(Typography)(({theme}) => ({
        color: "#FFFFFF",
        fontSize: '32px',
        fontWeight: 600,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: '12px'
    }));

    return (
        <WrapperBox>
            <Box sx={{display: "flex", justifyContent: "center", flexDirection: 'column'}}>
                <Title variant="h2">Shop By Categories</Title>
                <img className='loading' src={iconLoading}/>
                <Slider/>
            </Box>
        </WrapperBox>
    );
}

export default ShopByCategories;
