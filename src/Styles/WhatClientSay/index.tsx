import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import bgCat from "../../Assets/Images/WhatClientSayAssets/bg-testimonials.jpg";
import navigationIcon from "../../Assets/Icons/right-arrow.svg";

interface StyledTypography {
  fontWeight: string;
  smallSizeFontSize: string;
  mediumSizeFontSize: string;
  component: string;
  children: string;
}

export const ReusableTypography = styled((props: StyledTypography) => {
  const { smallSizeFontSize, mediumSizeFontSize, ...rest } = props;
  return <Typography {...rest} />;
})(({ theme, smallSizeFontSize, mediumSizeFontSize }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: smallSizeFontSize,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: mediumSizeFontSize,
  },
}));

export const WrapperBox = styled(Box)(({ theme }) => ({
  backgroundAttachment: "fixed",
  backgroundImage: `url(${bgCat})`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "166px 0px 205px 0px",
  [theme.breakpoints.down("sm")]: {
    padding: "100px 0px 100px 0px",
  },

  height: "332px",
  display: "flex",
  justifyContent: "center",
  ".loading": {
    alignSelf: "center",
    marginBottom: "45px",
  },
  ".swiper": {
    paddingBottom: "70px",
    width: "100%",
  },
}));

export const boxStyles = {
  width: "920px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    maxWidth: "90vw",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "1150px",
  },
  ".swiper-pagination-bullet": {
    background: "white",
    opacity: 1,
    margin: "10px!important",
  },
  ".swiper-horizontal>.swiper-pagination-bullets": {
    bottom: "0",
  },
  ".swiper-pagination-bullet-active": {
    position: "relative",
    "&::before": {
      animation: "spin-dot 2s linear infinite",
      top: "-110%",
      left: "-110%",
      borderRadius: "50%",
      position: "absolute",
      content: '""',
      width: "22px",
      height: "22px",
      borderRight: " 2px solid white",
      borderLeft: "2px solid transparent",
      borderTop: "2px solid white",
      borderBottom: "2px solid white",
    },
  },
  ".swiper-button-next-client,.swiper-button-prev-client": {
    zIndex: "1",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    border: "1px solid rgba(255, 255, 255, 0.3)",
    width: "43px",
    height: "43px",
    "&::after": {
      backgroundImage: `url(${navigationIcon})`,
      backgroundSize: "contain",
      opacity: "0.3",
      width: "24px",
      height: "24px",
      content: '""',
    },
    "&:hover": {
      border: "1px solid rgba(255, 255, 255, 1)",
      "&:after": {
        opacity: "1",
      },
    },
  },
  ".swiper-button-next-client": {
    [theme.breakpoints.up("md")]: {
      right: "-25px",
    },
    [theme.breakpoints.up("lg")]: {
      right: "-130px",
    },
    top: "40%",
  },
  ".swiper-button-prev-client": {
    [theme.breakpoints.up("md")]: {
      left: "-25px",
    },
    [theme.breakpoints.up("lg")]: {
      left: "-130px",
    },
    top: "40%",
    transform: " scale(-1, 1)",
  },
}));
