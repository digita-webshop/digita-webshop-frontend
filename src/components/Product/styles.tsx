import {
  Box,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
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

export const filledPrice = {
  width: "100%",
  boxSizing: "border-box",
  maxWidth: "500",
  fontWeight: "600",
  fontSize: "26px",
  position: "relative",
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
  height: "45px",
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
  justifyContent: {
    xs: "space-around",
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
    color: "common.digitaBlack",
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

export const boughtTogether = {
  display: "flex",
  marginTop: "20px",
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
  marginTop: "10px",
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
  display: "flex",
  justifyContent: "space-between",
  overflowX: "hidden",
  margin: "0px -20px 20px",
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
};

// ===========================NextProductModal==================

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
    aspectRatio: "1",
    objectFit: "contain",
    "&:hover": {
      border: `1px solid ${theme.palette.common.digitaRed}`,
    },
  },
  "& .selected-slide": {
    border: `1px solid ${theme.palette.common.digitaRed}`,
  },
  "&.hidden": {
    display: "none",
  },
}));

export const swiperImageWrapper = {
  textAlign: "center",
  img: {
    border: {
      xs: "1px solid #e9e9e9",
      sm: "none",
      md: "1px solid #e9e9e9",
    },
    width: { xs: "99%", sm: "70%", md: "99%!important" },
    aspectRatio: "1",
    objectFit: "contain",
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
  "&.hidden": {
    display: "none",
  },
};

export const modalSwiperStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "1111",
  width: { md: "60vw", xl: "600px" },
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
  "&.swiper-pagination": {
    color: "white",
    marginLeft: "10px",
    cursor: "default",
    span: {
      margin: "0 5px",
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

export const mainSwiperWrapper = {
  position: "relative",
  "& .swiper-pagination-bullet-active-main": {
    backgroundColor: "#f03637 !important",
  },
};
export const GreyTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.digitaGrey,
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.digitaGrey,
  },
}));

export const ProductColor = styled(Box)(({ theme }) => ({
  width: "25px",
  height: "25px",

  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  marginLeft: "10px",
  transition: "all 150px",
  boxShadow: "0 0 8px 2px rgb(0 0 0 / 20%)",
  boxSizing: "border-box",
  "&.selected": {
    transform: "scale(1.2)",
  },
  "&.admin": {
    boxShadow: "0 0 2px 1px rgb(0 0 0 / 20%)",
    width: "30px",
    height: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px",
    },
    "&.selected": {
      boxShadow: "0 0 8px 2px rgb(0 0 0 / 20%)",
    },
  },
}));

export const colorBoxStyles = {
  backgroundColor: "#fafafa",
  padding: "5px",
  border: "1px solid #ddd",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: "common.digitaGrey3",
  width: { sm: "20%" },
};

//------------------------tabs--------------------

export const Tab = styled(TabUnstyled)`
  white-space: nowrap;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 19px 18px;
  line-height: 1;
  display: inline-block !important;
  background-color: #f5f5f5;
  border: none;
  color: #ababab;
  margin: 0 0.75rem;
  transition: all 150ms;
  cursor: pointer;

  &:hover {
    color: #333333;
  }
  &.${tabUnstyledClasses.selected} {
    border-bottom-style: solid;
    border-bottom-color: #f03637;
    color: #333333;
  }

  &.${buttonUnstyledClasses.disabled} {
  }
`;

export const TabPanel = styled(TabPanelUnstyled)`
  margin: 30px auto 0;
  width: 90%;
  text-align: center;
`;

export const TabsList = styled(TabsListUnstyled)`
  display: block;

  width: 100%;

  margin-bottom: 20px;
  text-align: center;
  padding: 0px 20px;
  margin-top: 0px;
  background-color: #f5f5f5;
  border: none;

  z-index: 1;
  box-sizing: border-box;

  border-color: #eaeaea;
`;

export const moreStyles = {
  display: "flex",
  color: "common.digitaGrey",
  fontWeight: 500,
  textTransform: "capitalize",
};

export const productIconWrapperStyles = {
  color: "gray",
  "&:hover": { color: "#f03637" },
  display: "flex",
  marginLeft: "10px",
  cursor: "pointer",
};
export const productIconStyles = {
  "&.wishLoading": {
    transition: "all 100ms",
    animation: "fav 600ms linear infinite",
    "@keyframes fav": {
      "0%": {
        transform: "scale(.8)",
      },
      "50%": {
        transform: "scale(1)",
      },
      "100%": {
        transform: "scale(1.2)",
      },
    },
  },
};
