import {styled} from "@mui/material/styles";
import {Box, Container} from "@mui/material";
import navigationIcon from "../../Assets/Icons/right-arrow-black.svg";

export const WrapperBox = styled(Box)(({theme}) => ({
    width: '100%',
    [theme.breakpoints.up("xs")]: {
        maxWidth: "90vw",
    },
    [theme.breakpoints.up("lg")]: {
        maxWidth: "1150px",
    },
    position: 'relative',
    ".swiper": {
        width: '100%',
    },
    ".swiper-button-next-blog,.swiper-button-prev-blog": {
        cursor:'pointer',
        zIndex: '1',
        position: 'absolute',
        border: '1px solid #777777CC',
        width: '43px',
        height: '43px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::after': {
            backgroundImage: `url(${navigationIcon})`,
            backgroundSize: "contain",
            width: '24px',
            height: '24px',
            content: '""',
        },
    },
    '.swiper-button-next-blog': {
        right: '-75px',
        top: '40%',
        [theme.breakpoints.down("lg")]: {
            right: '0',
            transform: 'translateX(50%)'
        },
    },
    ".swiper-button-prev-blog": {

        left: '-75px',
        top: '40%',
        [theme.breakpoints.down("lg")]: {
            left: '0',
            transform: 'translateX(-50%) scale(-1, 1)'
        },
        transform: 'scale(-1, 1)'
    },
}));
export const ContainerWrapper = styled(Container)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    height: "700px",
    padding: '77px 100px 80px!important',
    [theme.breakpoints.down("lg")]: {
        padding: '77px 0 80px!important',
    },
    marginTop: "-100px",
    marginBottom: "-100px",
    position: "relative",
    '.loading': {
        margin: '18px 0 42px'
    }

}));