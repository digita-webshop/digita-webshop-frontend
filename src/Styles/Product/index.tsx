import { Box, styled } from "@mui/material";
/* ================   RELATED PRODUCTS ============== */
export const teamTitleStyle = {
  padding: "8rem 0 1rem 0",
  color: (theme: any) => theme.palette.common.digitaBlack1,
  fontSize: "32px",
  fontWeight: "600",
  textAlign: "center",
};
//  /* ================  Product Details ============== */
export const ProductDetailsStyle = {
  fontSize: "14px",
  lineHeight: "1.8",
  color: (theme: any) => theme.palette.common.digitaBlack,
  marginTop: "20px",
  "& .paragraph": {
    lineHeight: "0.8",
  },
};
export const nextButtonStyle = {
  boxSizing: "border-box",
  borderWidth: "0.4px",
  minWidth: "30px",
  color: "(theme:any)=>theme.palette.common.digitaGrey8",
  backgroundColor: (theme: any) => theme.palette.common.digitaWhite,
  border: "1px solid #d1d1d1",
  textAlign: "center",
  marginRight: "10px",
  width: "30px",
  height: "30px",
  padding: "10px",
  cursor: "pointer",
  fontSize: "13px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  "&:hover": {
    borderStyle: "none",
    backgroundColor: "#F03637",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },

  "& .MuiSvgIcon-root": {
    fontSize: "13px",
    color: "#d1d1d1",
  },
};

export const nextButton = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  justifyContent: "center",
};

export const filledPrice = {
  width: "100%",
  boxSizing: "border-box",
  maxWidth: "500",
  fontWeight: "600",
  fontSize: "26px",
  color: (theme: any) => theme.palette.common.digitaBlack,
  backgroundColor: "#f5f5f5",
  padding: "20px",
  lineHeight: "1",
  display: "static",
  fontFamily: "Jost",
};

export const productTitle = {
  fontWeight: "500",
  fontSize: "25px",
  textTransform: "capitalize",
  color: (theme: any) => theme.palette.common.digitaBlack1,
};

export const CartButtonsStyle = {
  width: "100%",
  marginTop: "30px",
  marginBottom: "5px",
  display: "flex",
  alignItems: "center",
  height: "50px",
  gap: "10px",
  button: {
    height: "100%",
    padding: { xs: "0", sm: "0 40px" },
    fontSize: "16px",
    width: { xs: "50%", sm: "auto" },
  },
};

export const productButtonStyles = {
  width: "100%",
  marginTop: "10px",
  marginBottom: "25px",
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: {
    xs: "center",
    sm: "flex-start",
  },
  alignItems: { xs: "flex-start", sm: "center" },
  gap: "20px",
  button: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    transition: "all 0.4s ease",
    textTransform: "capitalize",
    fontWeight: "500",
    gap: "4px",
    color: (theme: any) => theme.palette.common.digitaBlack,
    padding: "10px 0px",
    fontSize: "16px",
    "&:hover": {
      color: "#F03637",
    },
  },
};
export const starRating = {
  position: "relative",
  height: "1em",
  fontSize: "14px",
  width: "5.4em",
  fontFamily: "star",
};
export const starLink = {
  width: "100%",
  marginRight: "10px",
  padding: "15px 0",
  display: "flex",
  alignItems: "center",
  "& .customerReview": {
    fontFamily: "jost",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "13px",
    "&:hover": {
      color: "#F03637",
    },
  },
};

export const productMetaStyle = {
  color: (theme: any) => theme.palette.common.digitaBlack,
  marginTop: "15px!important",
  paddingBottom: "10px",
  "& .span": {
    fontSize: "16px",
    marginBottom: "4px",
    display: "inline",
  },
  span: {
    fontSize: "20px",
  },
};
export const linkStyle = {
  textDecoration: "none",
  fontFamily: "jost",
  cursor: "pointer",
  "&:hover": {
    color: "#F03637",
  },
};

//  /* ================  BoughtToGether ============== */
export const allBought = {
  paddingBottom: "1rem",
  marginLeft: { xs: "30px", sm: "10px", md: "5px", lg: "5px" },
};
export const boughtTogether = {
  margin: "-0.6rem",
  display: "flex",
  flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
  justifyContent: {
    xs: "center",
    sm: "flex-start",
    md: "flex-start",
    lg: "flex-start",
  },

  alignItems: { xs: "flex-start", sm: "center", md: "center", lg: "center" },
  marginLeft: "-1rem",
};
export const BoughtTextStyle = {
  color: "#777",
  fontSize: { sm: "14px", md: "14px" },
  margin: "2rem 0",
  lineHeight: "1.75rem",
};
export const BoughtButton = {
  flex: 1,
  padding: "8px 20px",
  "&:hover": {
    backgroundColor: (theme: any) => theme.palette.common.digitaBlack1,
  },
  fontWeight: "500",
  fontSize: "12px",
  marginTop: "-0.3rem",
};
export const imageBought = {
  height: "4rem",
  padding: "1rem",
  display: "flex",

  marginTop: { xs: "30px", sm: "0", md: "0", lg: "0" },
  flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
  justifyContent: {
    xs: "center",
    sm: "flex-start",
    md: "flex-start",
    lg: "flex-start",
  },

  alignItems: { xs: "flex-start", sm: "center", md: "center", lg: "center" },
};
export const boughtPriceStyle = {
  "& .boughtList": {
    listStyleType: "circle",
  },
  "& .newPrice": {
    color: (theme: any) => theme.palette.common.digitaRed,
  },
  "& .previousPrice": {
    color: (theme: any) => theme.palette.common.digitaGrey,
  },
};
export const boughttitleStyle = {
  color: (theme: any) => theme.palette.common.digitaBlack,
  fontSize: "28px",
  fontWeight: "400",
  textTransform: "uppercase",
  lineHeight: "1em",
  marginBottom: "0px",
  paddingBottom: "10px",
};

// /* ================ End BoughtTogether ============== */

// /* ================ Tabs ============== */
export const TabsTitrStyle = {
  fontSize: "36px",
  color: (theme: any) => theme.palette.common.digitaGrey,
  fontWeight: "600",
  margin: "2rem 0",
  lineHeight: "3rem",
  // fontSize:{xs:"20px",sm:"20px",md:"30px",lg:"30px"}
};
export const ShowStyle = {
  "& .TabsShow": {
    display: { xs: "none", sm: "none", md: "block", lg: "block" },
  },
  "& .CascadinShow": {
    display: { xs: "block", sm: "block", md: "none", lg: "none" },
  },
};
export const reviewsRating = {
  color: "#ddd",
  "&:hover": {
    color: (theme: any) => theme.palette.common.digitaYellow,
  },
  margin: "5px",
  height: "1em",
  lineHeight: "1em",
  fontSize: "20px",
  width: "5.4em",
  fontFamily: "star",
};
export const ProductTextStyle = {
  color: "#777",
  fontSize: { sm: "16px", md: "16px" },
  margin: "2rem 0",
  lineHeight: "1.75rem",
  "& .answer": {
    width: "60px",
    display: "inline-block",
    margin: "0 20px",
  },
  "& .Checkbox": {
    marginBottom: "0",
    marginTop: "15px",
  },
};

export const ProductContentStyle = {
  textAlign: "left",
  width: { sm: "100%", md: "100%", lg: "90%" },
  "& .descriptionList": {
    listStyleType: "none",
    textIndet: "0",
    marginLeft: "-1rem",
  },
  "& .userName": {
    fontWeight: "600",
    color: "#222",
  },
  "& .input": {
    "&:focus": {
      borderColor: "#F03637",
    },
  },
};

export const CascadingTabs = {
  background: "#f5f5f5",
  padding: "1rem ",
  width: "100%",
  display: "block",
  overflowX: "hidden",
  margin: "20px -20px",
  textAlign: "left",
};

export const CascadingTabsTitle = {
  color: "#ababab",
  fontWeight: "500!important",
  fontSize: "20px",
  textIndet: "20px",
};

export const SubmitButton = {
  float: "right",
  height: "36px",
  padding: "0 23px",
  fontSize: "13px",
  fontWeight: "600",
  marginBottom: "50px",
  textTransform: "capitalize",
  webkitBorderRadius: "0px",
  mozborderRadius: "0px",
  msBorderRadius: "0px",
  borderRadius: "0px",
  letterSpacing: "normal",
  marginRight: "15px",
  marginTop: "15px",
  display: "block",
  // backgroundColor: (theme:any)=>theme.palette.common.digitaBlack,
};

//   /* ============== ShareProduct  =============== */

export const shareProductText = {
  color: (theme: any) => theme.palette.common.digitaGrey,
  fontSize: { xs: "14px", sm: "13px", md: "13px", lg: "13px" },
  margin: "0",
  lineHeight: "0",
  float: "left",
  paddingTop: "1.5rem ",
  paddingBottom: "1.5rem ",
  marginLeft: "0.5rem",
};

export const MailIconLayout = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "#000000",
  width: "43px",
  height: "43px",
  float: "left",
};

export const TwitterIconLayout = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "#000000",
  width: "43px",
  height: "43px",
  float: "left",
};

export const chanceMail = {
  borderStyle: {
    xs: "solid none none none",
    sm: "solid none none none",
    md: "none none none solid",
    lg: "none none none solid",
  },
  borderColor: (theme: any) => ` ${theme.palette.divider}`,
  borderWidth: "0.5px",
  "&:hover": {
    "& .mailtext": {
      color: "#61CE70",
    },
    "& .mailback": {
      backgroundColor: "#61CE70",
    },
  },
};
export const chanceTwitter = {
  borderStyle: {
    xs: "none none none none",
    sm: "none none none solid",
    md: "none none none solid",
    lg: "none none none solid",
  },
  borderColor: (theme: any) => ` ${theme.palette.divider}`,
  borderWidth: "0.5px",
  "&:hover": {
    "& .Twittertext": {
      color: "#0693e3",
    },
    "& .Twitterback": {
      backgroundColor: "#0693e3",
    },
  },
};
export const chanceFacebook = {
  "&:hover": {
    "& .Facebooktext": {
      color: "#4267b2",
    },
    "& .Facebookback": {
      color: "#4267b2",
    },
  },
};

export const chancePinteres = {
  height: "100%",

  borderStyle: {
    xs: "solid none none none",
    sm: "solid solid none none",
    md: "none none none solid",
    lg: "none none none solid",
  },
  borderColor: (theme: any) => ` ${theme.palette.divider}`,
  borderWidth: "0.5px",
  "&:hover": {
    "& .Pinterestext": {
      color: "#E60023",
    },
    "& .Pinteresback": {
      color: "#E60023",
    },
  },
};
//   /* ==============  End SharProduct  =============== */

/* ============ ShareStyleItems Item ============== */
export const ShareStyle = {
  margin: "4rem 0",
  display: "flex",
  alignItems: "center",
  width: "100%",
  border: (theme: any) => `1px solid ${theme.palette.divider}`,
  borderRadius: 1,
  bgcolor: "background.paper",
  color: "text.secondary",
  "& svg": {
    m: 1.5,
  },
  "& hr": {
    mx: 0.5,
  },
};

export const itemStyle = {
  height: "4rem",
  padding: { xs: "2rem", sm: "2rem", md: "1rem", lg: "1rem" },
  flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
// /* ============ ShareStyleItems Item ============== */

// /* ============ AddToCartModal ============== */

export const PopupInner = {
  padding: "50px 25px 15px 25px",
  bordeRadius: "0",
  overFlow: "hidden",
  width: "auto",
  height: "auto",
  maxWidth: "90%",
  maxHeight: "90%",
  // display: "block",
  backgroundColor: "#fff",
  minWidth: "300px",
  margin: "0.5rem auto",
  textAlign: "center",
  zIndex: "1000",

  "& .price": {
    color: "#F03637",
  },
};
export const popupWrap = {
  // flexDirection: "row",

  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export const PopupContent = {
  position: "relative",
  transform: "none",
  top: "auto",
};

export const popupTitle = {
  fontSize: "20px",
  // margin: " 10%",
  textAlign: "center",
  letterSpacing: "0.6px",
  fontWeight: "500",
  color: (theme: any) => theme.palette.common.digitaBlack1,
  lineHeight: "2",
};
export const popupContent = {
  fontSize: "13px",
  marginBottom: "20px",
  color: "#777",
  textTransform: "uppercase",
};
export const buttonsWrap = {
  margin: "20px 0 0",
  flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
  display: "flex",
  justifyContent: {
    xs: "center",
    sm: "center",
    md: "space-between",
    lg: "space-between",
  },

  alignItems: "center",
};

export const continueBtn = {
  height: "50px",
  Width: "190px",
  borderRadius: "0px",
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: "400",
  letterSpacing: "normal",
  marginBottom: "10px",
  borderColor: (theme: any) => theme.palette.common.digitaRed,
  color: (theme: any) => theme.palette.common.digitaWhite,
  backgroundColor: (theme: any) => theme.palette.common.digitaRed,
  borderWidth: "3px",
  marginTop: { xs: "0", sm: "0", md: "10px", lg: "10px" },

  minWidth: "190px",
  "&:hover": {
    backgroundColor: (theme: any) => theme.palette.common.digitaBlack,
  },
};
export const space = {
  height: { xs: "0", sm: "0", md: "50px", lg: "50px" },
  width: { xs: "0", sm: "0", md: "20px", lg: "20px" },
  color: (theme: any) => theme.palette.common.digitaWhite,
};
export const cartBtn = {
  Width: "190px",
  height: "50px",
  marginnRight: { xs: "0", sm: "0", md: "5px", lg: "5px" },
  borderRadius: "0px",
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: "400",
  letterSpacing: "normal",
  marginBottom: "10px",
  borderColor: (theme: any) => theme.palette.common.digitaBlack,
  color: (theme: any) => theme.palette.common.digitaWhite,
  backgroundColor: (theme: any) => theme.palette.common.digitaBlack,
  borderWidth: "3px",
  marginTop: "10px",
  display: "inlineblock",
  minWidth: "190px",
};
export const popupText = {
  fontSize: "13px",
  marginTop: "20px",
  display: "block",
  color: "#666",
  marginLeft: "20px",
};

// ===========================NextProductModal==================
export const NextProductModalCart = {
  height: "auto",
  maxWidth: "100%",
  verticalAlign: "middle",
};
export const NextProductModalText = {
  lineHeight: "1.5em",
  marginTop: "10px",
  fontWeight: "500",
  display: "-webkit-box",
  overflow: "hidden",
  color: (theme: any) => theme.palette.common.digitaBlack1,
};

export const GallerySwiperWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  marginTop: "20px",
  transition: "all 150ms",
  "&:hover .gallery-swiper-button-prev": {
    opacity: "1",
    zIndex: "1111",
  },
  "&:hover .gallery-swiper-button-next": {
    opacity: "1",
    zIndex: "1111",
  },
  "& .gallery-swiper-button-prev, .gallery-swiper-button-next": {
    border: "1px solid #ebebeb",
    width: "30px",
    height: "30px",
    backgroundColor: "white",
    position: "absolute",
    transition: "all 150ms ",
    cursor: "pointer",
    display: "flex",
    top: "32%",
    opacity: "0",
    "&:hover": {
      backgroundColor: theme.palette.common.digitaRed,
      borderColor: theme.palette.common.digitaRed,
      "& .MuiSvgIcon-root": {
        color: "white",
      },
    },
    "& .MuiSvgIcon-root": {
      transition: "all 150ms ",
      margin: "auto",
    },
  },
  "& .gallery-swiper-button-prev": {
    left: "4px",
  },
  "& .gallery-swiper-button-next": {
    right: "4px",
  },
  "& .slider-img": {
    width: "100%",
    cursor: "pointer",
    border: `1px solid white`,
    transition: "all 150ms",
    "&:hover": {
      border: `1px solid ${theme.palette.common.digitaRed}`,
    },
  },
  "& .selected-slide": {
    border: `1px solid ${theme.palette.common.digitaRed}`,
  },
}));

export const swiperImageWrapper = {
  textAlign: "center",
  backgroundColor: { xs: "#f2f2f3cc", md: "unset" },
  img: {
    border: {
      xs: "1px solid #e9e9e9",
      sm: "none",
      md: "1px solid #e9e9e9",
    },
    width: { xs: "100%", sm: "70%", md: "100%" },
  },
};

export const magnifyButtonStyles = {
  position: "absolute",
  top: "6px",
  right: "6px",
  zIndex: "111",
  cursor: "pointer",
  backgroundColor: "#eee",
  padding: "6px",
  display: "flex",
  border: "1px solid #e9e9e9",
  "& .MuiSvgIcon-root": {
    margin: "auto",
  },
};

export const modalSwiperStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "1111",
  width: "60vw",
  img: {
    width: "100%",
    height: "100%",
  },
  "& .swiper-pagination": {
    position: "absolute",
    color: "red",
  },
};
export const galleryModalButtonStyles = {
  float: "right",
  zIndex: "1111",
  cursor: "pointer",
  margin: "20px 20px 0 0",
  "& .MuiSvgIcon-root": {
    transition: "all 150ms",
    color: "#fff",
    fontSize: "32px",
    opacity: 0.75,
    "&:hover": {
      opacity: 1,
    },
  },
};

export const GalleryModalWrapper = styled(Box)(({ theme }) => ({
  "& .modal-gallery-swiper-button-prev,.modal-gallery-swiper-button-next": {
    position: "absolute",
    cursor: "pointer",
    top: "45%",
    display: "flex",
    "& .MuiSvgIcon-root": {
      transition: "all 150ms",
      color: "#fff",
      fontSize: "32px",
      opacity: 0.75,
      "&:hover": {
        opacity: 1,
      },
    },
  },
  "& .modal-gallery-swiper-button-prev": {
    left: "8px",
  },
  "& .modal-gallery-swiper-button-next": {
    right: "8px",
  },
}));
