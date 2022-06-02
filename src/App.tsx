import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Products from "./Components/products/Products";
import { theme } from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Products />
    </ThemeProvider>
  );
}

export default App;
