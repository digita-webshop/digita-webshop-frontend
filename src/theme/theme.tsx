import { createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#777777",
    },
    error: {
      main: "#f03637",
    },
  },
  typography: {
    fontFamily: ["jost", "sans-serif"].join(","),
    h1: {
      fontSize: 68,
    },
    h3: {
      fontSize: 40,
    },
    h4: {
      fontSize: 32,
    },
    subtitle1: {
      fontSize: 15,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#f03637",
          },
          textTransform: "capitalize",
        },
      },
    },
  },
  shadows: Array(25).fill("none") as Shadows,
});
