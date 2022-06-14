import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  top: "85%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  transition: 'all 0.3s',
  width: "150px",
  borderRadius: "7px",
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
}
/* ============== Product Item =============== */

/*  ============= Header =============   */
export const StyledProducts = styled("div")(({ theme }) => ({
    paddingTop: "3rem",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "1.5rem",
    [theme.breakpoints.down("sm")]: {
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
padding: 0.780rem 2.6rem;
textTransform: 'uppercase';
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
      objectFit: 'cover'
    },
    "& .rightBox": {
      width: '80%',
    }
  },
}));

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "80%",
  width: "70%",
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
  "& .img-box": {
    width: "100%",
    height: "65%",
    objectFit: "cover",
  },
  "&::-webkit-scrollbar": {
    width: "1px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#b6b6b6",
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
    }
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
  padding: "3px 7px",
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