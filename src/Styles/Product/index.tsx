
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
  color: "#929292",
  marginTop: "20px",
  "& .paragraph":{
    lineHeight: "0.8",
  }
 
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
  // backgroundColor: "#333333",
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
  marginTop: "3px",


}
export const linkStyle={
  color: "#333333",
  '&:hover': {
   
      color: '#F03637',
    }, 

}
export const productMetaStyle={
  fontSize:"15px",
  color: "#333333",
  marginTop: "20px!important",
  borderBottom: 0,
 
  paddingBottom: "10px",
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
  fontWeight: "400",
  margin:"0.5rem 0",
  
 

 }

// /* ================ End BoughtToGether ============== */

// /* ================ Tabs ============== */

export const ShowStyle =styled("div")(({ theme }) => ({
  "& .TabsShow":{
    listStyleType:"none",
  },
  "& .CascadinShow":{
    listStyleType:"none",
  },
}));

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

  export const TabsTitrStyle={
    color:"#777777",
    fontWeight: "700",
    margin:"2rem 0",
    lineHeight:"3rem"

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
   
    borderStyle:"none none none solid",
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
    
    borderStyle:"none none none solid",
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
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
// /* ============ ShareStyleItems Item ============== */


 



