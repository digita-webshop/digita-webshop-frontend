import { Box, Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

/* ============== Product Item =============== */
export const Div = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  ...theme.typography.button,
  backgroundColor: theme.palette.error.main,
  padding: "0 5px",
  color: "#fff",
}));

export const StyledIcons = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "84%",
  left: "50%",
  [theme.breakpoints.up("sm")]: {
    top: "78%",
  },
  transform: "translate(-50%,-50%)",
  transition: "all 0.3s",
  borderRadius: "7px",
  padding: "10px 20px",
}));

export const wishStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: 3,
};
/* ============== Product Item =============== */

/*  ============= Header =============   */
export const StyledProducts = styled("div")(({ theme }) => ({
  paddingTop: "3rem",
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const navStyle = {
  Button: {
    "&:hover": {
      transition: "all 0.4s",
      backgroundColor: "transparent",
      color: "#f03637",
    },
    "&:focus": {
      backgroundColor: "#FFE1E1",
      color: "#f03637",
    },
  },
};
/*  ============= Header =============   */

/* ============== ButtonCard =============*/
export const StyledBtn = styled(Button)`
  padding: 0.78rem 2.6rem;
  texttransform: "uppercase";
  font-size: 16px;
  background-color: #fff;
  color: #000;
  &:hover {
    color: #fff;
  }
`;
/* ============== ButtonCard =============*/

/*  ============= ProductCard =============   */
/*  ============= ProductCard =============   */

/*  ============= Product Cards =============   */
/*  ============= Product Cards =============   */

/*  ============= Modal View =============   */
export const StyledModal = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    "& .img-box": {
      width: "100%",
      height: "500px",
      objectFit: "cover",
    },
    "& .box": {
      width: "100%",
      height: "1100px",
      objectFit: "cover",
    },
    "& .rightBox": {
      width: "84%",
    },
  },
}));

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minHeight: "80%",
  width: { xs: "85%", sm: "450px", md: "75%", lg: "75%", xl: "1200px" },
  display: "flex",
  bgcolor: "background.paper",
  boxShadow: 24,
  Button: {
    width: "40%",
    display: "flex",
    padding: "0.8rem 0",
  },
};

export const modalLeft = {
  width: "65%",
  height: "100%",
  overflow: "hidden",
  overflowY: "scroll",
  display: "flex",
  alignItems: "center ",
  "& .img-box": {
    width: "100%",
    height: { xs: "100%", md: "65%" },
    aspectRatio: "1",
    objectFit: "contain",
  },
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#dedede",
    borderRadius: "50px",
  },
};
export const modalRight = {
  width: "50%",
  p: "2rem",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0",
  },
};

export const label = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: 1,
  transition: "0.3s",
  "&:hover": {
    color: "#f03637",
    "& .wish": {
      transition: "0.3s",
      color: "#f03637",
    },
  },
};

export const IconDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  ...theme.typography.button,
  backgroundColor: theme.palette.error.main,
  padding: "0 5px",
  color: "#fff",
}));
/*  ============= Modal View =============   */

/* ============== Cart MODAL =============== */
export const closeStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  display: "flex",
  cursor: "pointer",
  backgroundColor: "#f03637",
  transition: "all 0.2s",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#333",
  },
};

export const cartModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "450px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};
/* ============== Cart MODAL =============== */

export const RedTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f03637",
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#f03637",
  },
}));

export const styleContent = {
  padding: "2.2rem 2rem",
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  transition: "all 0.8s",
};

export const cardStyle = {
  position: "relative",
  transition: "1s ease-in-out",
  "&:hover": {
    "& .img-card": {
      filter: "brightness(70%)",
      transform: "scale(1.17)",
    },
    "& .card-content": {
      transform: "translateY(15px)",
    },
  },
};
export const AnimatedGrid = styled(Grid)(({ theme }) => ({
  "&.slideInFromLeft": {
    animation: `slideInFromLeft 1500ms ${theme.transitions.easing.easeInOut}`,
    "@keyframes slideInFromLeft": {
      "0%": {
        opacity: 0,
        transform: `translateX(-100% )`,
      },
      "100%": {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  },
  "&.slideInFromRight": {
    animation: `slideInFromRight 1500ms ${theme.transitions.easing.easeInOut}`,
    "@keyframes slideInFromRight": {
      "0%": {
        opacity: 0,
        transform: `translateX(100% )`,
      },
      "100%": {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  },
}));

export const contentStyle = {
  height: "340px",
  img: {
    width: "100%",
    height: "340px",
    transition: "all 800ms ease-in-out",
    objectFit: "cover",
  },
  overflow: "hidden",
};

export const subMainContainer = {
  paddingBottom: "30px ",
  "&.slideInFromBottom": {
    animation: (theme: any) =>
      `slideInFromBottom 1000ms ${theme.transitions.easing.easeInOut}`,
    "@keyframes slideInFromBottom": {
      "0%": {
        opacity: 0,
        transform: "translateY(50%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },
};
