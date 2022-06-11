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

  backgroundColor: "#E9E9E9",
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

/*  ============= Product Item =============   */
/*  ============= Product Item =============   */
