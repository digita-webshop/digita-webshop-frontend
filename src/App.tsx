import { ShopByCategories } from "./Components";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>Hello</Typography>
      <ShopByCategories />
    </ThemeProvider>
  );
}

export default App;
