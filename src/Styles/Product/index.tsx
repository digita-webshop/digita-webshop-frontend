
import { styled} from "@mui/material";
    /* ================   RELATED PRODUCTS ============== */
    export const teamTitleStyle = {
      padding: "8rem 0 1rem 0",
      color: "#333",
      fontSize: "32px",
      fontWeight: "600",
    };
//  /* ================  Product Details ============== */
export const ProductDetailsStyle={
  fontSize: "14px",
  lineHeight: "1.8",
  color: "#333333",
  marginTop: "20px",
  "& .paragraph":{
    lineHeight: "0.8",
  }
 
}
export const nextButtonStyle={
  borderWidth: "0.5px",
  lineHeight: "28px",
  minWidth: "30px",
  borderColor: "#d1d1d1",
  color: "#d1d1d1",
  backgroundColor: "#ffffff",
  border: "2px solid #e9e9e9",
  textAlign: "center",
  // display: "inline-block",
  margin: "0",
  padding: "10px",
  cursor: "pointer",
  fontSize:"5px",
      display: "flex",
     flexDirection: "row" ,
     alignItems: "center",
     justifyContent: "center",
     '&:hover': {
     color:"ffffff",
    
      backgroundcolor: '#F03637',
    }, 
    float:"right",

}
export const Modalstyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
export const nextButton={
  // position:"absolute",
  // right:"25",
  // top:"0",
  float:"right",

}
export const TitleSectionStyle={
  // position:"relative",
}
export const filledPrice ={
  fontWeight: "500",
  fontSize: "26px",
  color: "#333333",
  margin: "20px 0 0",
  marginTop: "25px!important",
  backgroundColor: "#f5f5f5",
  padding: "20px",
  lineHeight: "1",
}

export const productTitle ={
  fontWeight: "500",
  fontSize: "25px",
  lineHeight: "1.2",
  textTransform: "none",
  padding:" 0 80px 0 0px",
  color: "#333",
}
export const contentWrap={
  padding: "50px 15px",
  width: "auto !important",

}
export const addToCartButton ={
  float: "left",
  height: "50px",
  padding: "0 46px",
  fontSize: "15px",
  fontWeight: "600",
  marginBottom: "15px",
  textTransform: "capitalize",
  webkitBorderRadius: "0px",
  mozborderRadius: "0px",
  msBorderRadius: "0px",
  borderRadius: "0px",
  letterSpacing: "normal",
  marginRight: "15px",
  marginTop:"50px",
  display:"block",
  // backgroundColor: "#333333",
}
export const ViewCartButton={
  float: "left",
    backgroundColor: "#333333",
    border: "0",
    marginLeft: "0px",
    marginRight: "15px",
    lineHeight: "50px",
    padding: "0 46px",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "15px",
    textTransform: "capitalize",
    letterSpacing: "normal",

}
export const starRating={
  overflow: "hidden",
  position: "relative",
  height: "1em",
  lineHeight: "1em",
  fontSize: "14px",
  width: "5.4em",
  fontFamily: "star",
  float: "left",
  marginRight: "10px",
  marginTop: "20px",


}
export const PostStyle={
   width: '100%', maxWidth: "500", 
  color: "#333333",
 

}
export const productMetaStyle={
  fontWeight: "400",
  fontSize:"15px",
  color: "#333333",
  marginTop: "30px!important",
  borderBottom: 0,
  lineHeight:"2rem",
  paddingBottom: "10px",

}
export const linkStyle={
  '&:hover': {
     
    
      color: '#F03637',
    }, 
    "& .customerReview":{
      marginTop: "20px",
    },
    
 
}

  export const WishlistButton={

color:"#F03637",
padding:"10px 20px",
marginTop:"50px",
fontSize:"16px",
border:"none",

'&:hover': {
     
    
  color: '#F03637',
}, 
  }

  export const CompareButton ={
    transition: "all 0.4s ease",
    background: "transparent",
    lineHeight: "unset",
    
    textTransform: "capitalize",
    fontWeight: "500",
  
    color:"#333333",
    padding:"10px 20px",
    marginTop:"50px",
    fontSize:"16px",
    border:"none",
    '&:hover': {
     
    
      color: '#F03637',
    }, 
  }
//  /* ================  ProductSlider ============== */
export const zoomImg ={
  position: "absolute",
  top: "-238.398px",
  left: "-170.479px",
  opacity: "0",
  width: "670px",
  height: "670px",
  border: "none",
  maxWidth: "none",
  maxHeight: "none",
  backgroundColor: "#fff",
  verticalAlign: "middle"
}
export const slideImg={
  border: "1px solid #ebebeb",
  margin: "auto",
  opacity: "1",
  transition: "all 0.2s ease",
}
export const slickArrow={
  width: "30px !important",
  height: "30px",
  border: "1px solid #ebebeb",
  transform: "translateY(-50%)",
  backgroundColor: "#ffffff",
  transition: "all 0.3s",
  top: "50%",
  opacity: "0",
  right: "30px",
  cursor: "pointer",
}

    
//  /* ================  BoughtToGether ============== */
 export const allBought={
  paddingBottom:"1rem",
 }
 export const boughtTogether={
   margin:"-0.6rem",
  display: "flex",
  flexDirection:"row",
  justifyContent: "flex-start",
  alignItems: "center",
 }
 export const BoughtTextStyle={
  color:"#777",
  fontSize:{ sm: "14px", md: "14px" },
  margin:"2rem 0",
  lineHeight:"1.75rem"
 }
 export const BoughtButton ={
   flex: 1,
   padding:"8px 20px", 
   "&:hover": { backgroundColor: "#333" } ,
   fontWeight: "500",
   fontSize:"12px",
   marginTop:"-0.3rem",
 }
 export const imageBought={
  height:"4rem",
  padding: "1rem",
  display: "flex",
  flexDirection:"row",
  justifyContent: "center",
  alignItems: "center",

 }
 export const boughtPriceStyle={
  "& .boughtList":{
    listStyleType:"circle",
  },
  "& .newPrice":{
    color:"#F03637",
  },
  "& .previousPrice":{
    color:"#777777",
    
  }
 }
 export const boughttitleStyle={
  color:"#333333",
  fontSize: "28px",
    fontWeight: "400",
    textTransform: "uppercase",
    lineHeight: "1em",
    marginBottom: "0px",
    paddingBottom: "10px",
  
 

 }

// /* ================ End BoughtTogether ============== */

// /* ================ Tabs ============== */
// styled("div")(({ theme }) => (
export const ShowStyle ={
  "& .TabsShow":{
    display: {xs:"none", sm: "none", md: "block", lg: "block" },
  },
  "& .CascadinShow":{
    display: {xs:"block", sm: "block", md: "none", lg: "none" },
  },
}

  export const ProductTextStyle={
    color:"#777",
    fontSize:{ sm: "16px", md: "16px" },
    margin:"2rem 0",
    lineHeight:"1.75rem"
  }

  export const ProductContentStyle = {
  textAlign: "left",
  width: { sm: "100%", md: "100%", lg: "90%" },
  "& .descriptionList":{
    listStyleType:"none",
  },
};
 
export const CascadinTabs={
   paddingTop:"1rem",
 
    borderWeight:"10px",
    width:"100%",
    borderStyle:"solid none none none",
    borderColor: (theme: any) => ` ${theme.palette.divider}`,
  }

  export const TabsTitrStyle={
    color:"#777777",
    fontWeight: {xs:"500",sm:"500",md:"700",lg:"700"},
    margin:"2rem 0",
    lineHeight:"3rem",
    // fontSize:{xs:"20px",sm:"20px",md:"30px",lg:"30px"}

  }
   export const tabsStyle={
  display: "block",
  position: "relative",
  width: "100%",
  // borderTop: "1px solid",
  // borderBottom: "1px solid",
  border:"none",
  marginBottom: "0",
  textAlign: "center",
  padding: "0px 20px",
  marginTop: "0px",
  background: "#f5f5f5",
  color:"#f8f8f8",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "inherit",
  // overflowX: "hidden",

 }


 export const SubmitButton ={
  float: "left",
  height: "50px",
  padding: "0 36px",
  fontSize: "15px",
  fontWeight: "600",
  marginBottom: "15px",
  textTransform: "capitalize",
  webkitBorderRadius: "0px",
  mozborderRadius: "0px",
  msBorderRadius: "0px",
  borderRadius: "0px",
  letterSpacing: "normal",
  marginRight: "15px",
  marginTop:"50px",
  display:"block",
  // backgroundColor: "#333333",
}

//   /* ============== ShareProduct  =============== */


  // export const shareProductParent={
  //   display: "flex",
  //   flexDirection: { sm: "column", md: "column" ,lg:"row" },
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingTop: "50px",
  //   paddingBottom: "20px",
  //   border:"solid 1px #777777",
 

  // }

  // export const shareProductChaild={
  //   width:{ sm: "50%", md: "25%" ,lg:"25%" },
  //   padding: "1rem  3rem ",
  //   textAlign:"center",

  //   // border:"solid 1px #777777",
  //   margin:"auto 0",

    
  // }
  export const shareProductText={
    color:"#777777",
    fontSize:"13px" ,
    margin:"0",
    lineHeight:"0",
    float:"left", 
    paddingTop: "1.5rem ", 
    paddingBottom: "1.5rem ",
    marginLeft:"0.5rem" 

  }

  export const MailIconLayout={
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:"50%",
    backgroundColor: "#000000",
    width:"43px",
    height:"43px",
     float:"left",
    

  }
  // export const MailIconText={
  //   color:"#777777",
  //   fontSize:"13px" ,
  //   margin:"0",
  //   lineHeight:"0",
  //   float:"left", 
  //   paddingTop: "1.5rem ", 
  //   marginLeft:"1rem" ,


  // }
  export const TwitterIconLayout={
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:"50%",
    backgroundColor: "#000000",
    width:"43px",
    height:"43px",
     float:"left",
   

  }

    export const chanceMail={
   
    borderStyle:{xs:"solid none none none", sm:"solid none none none", md:"none none none solid", lg:"none none none solid", },
    borderColor: (theme: any) => ` ${theme.palette.divider}`,
    borderWidth:"0.5px",
    '&:hover': {
     
      "& .mailtext":{
        color: '#61CE70',
      }, 
      "& .mailback":{
        backgroundColor: '#61CE70',
      },
     
    },
    
  }
  export const chanceTwitter={
   
    
    borderStyle:"none none none solid",
    borderColor: (theme: any) => ` ${theme.palette.divider}`,
    borderWidth:"0.5px",
    '&:hover': {
     
      "& .Twittertext":{
        color:  '#0693e3',
      }, 
      "& .Twitterback":{
        backgroundColor: '#0693e3',
      },
     
    },
    
  }
  export const chanceFacebook={
 
    '&:hover': {
     
      "& .Facebooktext":{
        color: '#4267b2',
      }, 
      "& .Facebookback":{
        color: '#4267b2',
      },
     
    },
    
  }
 
  export const chancePinteres={
    height:"100%",
    
    borderStyle:{xs:"solid solid none none",sm:"solid solid none none",md:"none none none solid",lg:"none none none solid",},
    borderColor: (theme: any) => ` ${theme.palette.divider}`,
    borderWidth:"0.5px",
    '&:hover': {
     
      "& .Pinterestext":{
        color: '#E60023',
      }, 
      "& .Pinteresback":{
        color: '#E60023',
      },
     
    },
    
  }
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
  height:"4rem",
  padding: {xs:"2rem",sm:"2rem",md:"1rem",lg:"1rem"},
  flexDirection: {xs:"column",sm:"column",md:"row",lg:"row",},
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
// /* ============ ShareStyleItems Item ============== */

// /* ============ AddToCartModal ============== */

export const wooPopupInner={
  padding: "50px 25px 15px 25px",
  bordeRadius: "0",
  overFlow: "auto",
  width: "auto",
  height: "auto",
  maxWidth: "90%",
  maxHeight: "90%",
  display: "block",
  backgroundColor: "#fff",
  minWidth: "300px",
  margin: "0.5rem auto",
  textAlign: "center",
  zIndex: "1000",

}
export const wooPopupContent={
  position: "relative",
  transform: "none",
  top: "auto",
}
export const checkmark={
  boxShadow: "inset 0 0 0 #f03637",
  width: "60px",
  height: "60px",
  marginBottom: "20px",
  display: "block",
  borderRadius: "50%",
  strokeWidth: "2",
  stroke: "#fff",
  strokeMiterlimit: "10",
  margin: "0 auto 30px auto",
  animation: "fill .4s ease-in-out .4s forwards,scale .3s ease-in-out .9s both",
}

export const checkmarkCircle={
  stroke: "#f03637",
  strokeDasharray: "166",
  strokeDashoffset: "166",
  strokeWidth: "2",
  strokeMiterlimit: "10",
  fill: "none",
    animation: "stroke .6s cubic-bezier(.65,0,.45,1) forwards",
}

export const checkmarkCheck={
  transformOrigin: "50% 50%",
  strokeDasharray: "48",
  strokeDashoffset: "48",
  animation: "stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards",
}
export const popupTitle={
  fontSize: "20px",
  margin: "0 0 10px",
  letterSpacing: "0.6px",
  fontWeight: "500",
  color: "#333",
  lineHeight: "2",
}
export const popupContent={
  fontSize: "13px",
  marginBottom: "20px",
  color: "#777",
  textTransform: "uppercase",
}
export const buttonsWrap={
  display: "block",
    margin: "20px 0 0",
}
export const continueBtn={
  borderRadius: "0px",
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: "400",
  letterSpacing: "normal",
  marginBottom: "10px",
  borderColor: "#f03637",
  color: "#ffffff",
  backgroundColor: "#f03637",
  borderWidth: "3px",
}
export const cartBtn ={
  borderRadius: "0px",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "400",
    letterSpacing: "normal",
    marginBottom: "10px",
    borderColor: "#333333",
    color: "#ffffff",
    backgroundColor: "#333333",
    borderWidth: "3px",
    marginTop: "10px",
    display: "inlineblock",
    minWidth: "200px",
}
export const popupText={
  fontSize: "13px",
  marginTop: "20px",
  display: "block",
      color: "#666",
}

// ===========================NextProductModal==================
export const NextProductModalCart={
  height: "auto",
  maxWidth: "100%",
  verticalAlign: "middle",
}
export const NextProductModalText={
  lineHeight: "1.5em",
  marginTop: "10px",
  fontWeight: "500",
  display:"-webkit-box",
  overflow: "hidden",
  // webkitLineClamp: "2",
  // -webkit-box-orient: "vertical",
  color: "#333",
}