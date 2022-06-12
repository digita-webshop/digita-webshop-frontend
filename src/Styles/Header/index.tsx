import {styled} from "@mui/material/styles";
import {Box, Button} from "@mui/material";
import header1 from "../../Assets/Images/header1.jpg";
import header2 from "../../Assets/Images/header2.jpg";

export const Container = styled(Box)(({theme}) => ({
    ".swiper-slide img": {
        width: '100%'
    },
    ".swiper-pagination-bullet": {
        background: 'white',
        opacity: 1,
        margin:'10px!important'
    },
    ".swiper-horizontal>.swiper-pagination-bullets":{
        bottom:'170px'
    },
    ".swiper-pagination-bullet-active": {
        position: 'relative',
        '&::before': {
            animation:'spin-dot 2s linear infinite',
            top: '-103%',
            left: '-103%',
            borderRadius: '50%',
            position: 'absolute',
            content: '""',
            width: '22px',
            height: '22px',
            borderRight: ' 2px solid white',
            borderLeft: '2px solid transparent',
            borderTop: '2px solid white',
            borderBottom: '2px solid white',
        }
    },
    "@keyframes spin-dot": {
        "0%": {
            transform: "rotate(0deg)"
        },
        "100%": {
            transform: "rotate(360deg)"
        }
    },
    ".slide1": {
        background: `lightblue url(${header1}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
    },
    ".slide2": {
        background: `lightblue url(${header2}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
    }
}));

export const SlideItem = styled(Box)(({theme}) => ({
    position: 'relative',
    color: '#ffffff',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        height: '700px',
    },
    [theme.breakpoints.up('sm')]: {
        height: '867px',
    },
    ".header": {
        [theme.breakpoints.down('sm')]: {
            maxWidth:"100%",
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth:"43%",
        },
        position: 'absolute',
        top: "22%",
        left: "10%",
        animation: `fadeIn 3000ms ${theme.transitions.easing.easeInOut}`,
        "&-title": {
            [theme.breakpoints.down('sm')]: {
                fontSize: '14px',
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: '18px',
            },
            fontWeight: 500,
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            height: '68px',
            '&::before': {
                content: '""',
                bottom: '11px',
                width: '40px',
                backgroundColor: '#ffffff',
                height: '2px',
                display: 'inline-block',
                verticalAlign: 'middle',
                marginRight: '10px',
            }
        },
        "&-subtitle": {
            fontFamily: '"Jost", Sans-serif',
            color: '#FFFFFF',
            [theme.breakpoints.down('sm')]: {
                fontSize: '33px',
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: '50px',
            },
            fontWeight: '600',
            lineHeight: '1em',
            margin: '0 0 22px 0'
        },
        "&-desc": {
            marginBottom: '38px',
            fontFamily: '"Jost", Sans-serif',
            [theme.breakpoints.down('sm')]: {
                fontSize: '15px',
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: '16px',
            },
            fontWeight: 500,
            lineHeight: '24px',
        }
    },
    ".animatedBox": {
        animation: `fadeIn 1000ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0,
            transform: "translateY(200%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },
}));

export const ShopNowBtn = styled(Button)(({theme}) => ({
    fontFamily: '"Jost", Sans-serif',
    fontSize: '15px',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderWidth: '0px',
    borderRadius: '0px',
    color: '#333333',
    backgroundColor: '#FFFFFF',
    borderColor: '#333333',
    padding: '14px 50px',
    "&:hover": {
        color: '#FFFFFF'
    }
}));