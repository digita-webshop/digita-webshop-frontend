import { ThemeProvider } from "@mui/material/styles";
import Products from "./Components/products/Products";
import Special from "./Components/Special/Special";
import { theme } from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Products />
    </ThemeProvider>
  );
}

export default App;
