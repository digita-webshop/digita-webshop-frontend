import { styled } from "@mui/material";
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
  lineHeight: "10px",
  minWidth: "30px",
  color: "(theme:any)=>theme.palette.common.digitaGrey8",
  backgroundColor: (theme: any) => theme.palette.common.digitaWhite,
  border: "1px solid #d1d1d1",
  // border: `1px solid ${theme.palette.common.digitaGrey8}`,
  textAlign: "center",
  marginRight: "10px",
  width: "30px",
  height: "30px",
  padding: "10px",
  cursor: "pointer",
  fontSize: "13px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    color: (theme: any) => theme.palette.common.digitaWhite,
    borderStyle: "none",
    backgroundColor: "#F03637",
  },
  "& .left": {
    marginRight: "3.5px",
  },
  "& .right": {
    marginLeft: "3.5px",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "13px",
    color: "common.digitBlack",
  },
};

export const nextButton = {
  float: "right",
  marginTop: "-1.5rem",
  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
export const TopSectionStyle = {
  marginBottom: "10px",
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
  lineHeight: "1.2",
  textTransform: "none",
  padding: " 0 80px 0 0px",
  color: (theme: any) => theme.palette.common.digitaBlack1,
};
export const contentWrap = {
  padding: "50px 15px",
  width: "auto !important",
};
export const addToCartButton = {
  float: "left",
  height: "50px",
  padding: { xs: "0 36px", sm: "0 36px", md: "0 46px", lg: "0 46px" },
  fontSize: { xs: "13px", sm: "13px", md: "15px", lg: "15px" },
  fontWeight: { xs: "300", sm: "300", md: "600", lg: "600" },
  textTransform: "capitalize",
  letterSpacing: "normal",
  marginRight: "15px",

  "&:active": {
    "& .ShowViewCart": {
      display: "flex",
    },
  },
  "&:focus": {
    "& .ShowViewCart": {
      display: "inline-block",
    },
  },
};
export const ShowViewCart = {
  // "& .ShowViewCart":{
  //   display:"none",
  // },
  "& .addCart": {
    "&:active": {
      "& .ShowViewCart": {
        display: "flex",
      },
    },
    "&:focus": {
      "& .ShowViewCart": {
        display: "inline-block",
      },
    },
  },
};
export const ViewCartButton = {
  backgroundColor: (theme: any) => theme.palette.common.digitaBlack,
  border: "0",
  marginLeft: "0px",
  marginRight: "15px",
  lineHeight: "50px",
  padding: "0 46px",
  color: (theme: any) => theme.palette.common.digitaWhite,
  fontSize: "15px",
  fontWeight: "600",
  textTransform: "capitalize",
  letterSpacing: "normal",
  display: "none",
};
export const CartButtonsStyle = {
  width: "100%",
  marginTop: "30px",
  marginBottom: "5px",
  flexDirection: "row",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  float: "left",
};

export const ComperWishStyle = {
  width: "100%",
  marginTop: "10px",
  marginBottom: "25px",

  display: "flex",

  float: "left",
  marginLeft: "-10px",
  flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
  justifyContent: {
    xs: "center",
    sm: "flex-start",
    md: "flex-start",
    lg: "flex-start",
  },

  alignItems: { xs: "flex-start", sm: "center", md: "center", lg: "center" },
};
export const starRating = {
  overflow: "hidden",
  position: "relative",
  height: "1em",
  marginBottom: "20px",
  fontSize: "14px",
  width: "5.4em",
  fontFamily: "star",
  float: "left",
  marginTop: "-5px",
};
export const show = {};
export const starLink = {
  width: "100%",
  marginRight: "10px",
  padding: "15px 0",
  flexDirection: "row",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  position: "static",

  "& .customerReview": {
    marginBottom: "20px",
    marginTop: "-5px",
    textDecoration: "none",
    "&:hover": {
      color: "#F03637",
    },
  },
};
export const PostStyle = {
  width: "100%",
  maxWidth: "500",
  color: (theme: any) => theme.palette.common.digitaBlack,
};
export const productMetaStyle = {
  fontWeight: "400",
  color: (theme: any) => theme.palette.common.digitaBlack,
  marginTop: "30px!important",
  borderBottom: 0,
  lineHeight: "2rem",
  paddingBottom: "10px",
  p: {
    fontSize: "20px",
    marginBottom: "4px",
  },
};
export const linkStyle = {
  "&:hover": {
    color: "#F03637",
  },
};

export const WishlistButton = {
  flexDirection: "row",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  color: (theme: any) => theme.palette.common.digitaRed,
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  float: "left",
  "&:hover": {
    color: "#F03637",
  },
  marginLeft: "-5px",
};

export const CompareButton = {
  float: "left",
  flexDirection: "row",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  transition: "all 0.4s ease",
  background: "transparent",
  lineHeight: "unset",
  textTransform: "capitalize",
  fontWeight: "500",
  color: (theme: any) => theme.palette.common.digitaBlack,
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  "&:hover": {
    color: "#F03637",
  },
};
//  /* ================  ProductSlider ============== */
// export const zoomImg ={
//   position: "absolute",
//   top: "-238.398px",
//   left: "-170.479px",
//   opacity: "0",
//   width: "670px",
//   height: "670px",
//   border: "none",
//   maxWidth: "none",
//   maxHeight: "none",
//   backgroundColor: "#fff",
//   verticalAlign: "middle"
// }
// export const slideImg={
//   border: "1px solid #ebebeb",
//   margin: "auto",
//   opacity: "1",
//   transition: "all 0.2s ease",
// }
// export const slickArrow={
//   width: "30px !important",
//   height: "30px",
//   border: "1px solid #ebebeb",
//   transform: "translateY(-50%)",
//   backgroundColor: (theme:any)=>theme.palette.common.digitaWhite,
//   transition: "all 0.3s",
//   top: "50%",
//   opacity: "0",
//   right: "30px",
//   cursor: "pointer",
// }

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
