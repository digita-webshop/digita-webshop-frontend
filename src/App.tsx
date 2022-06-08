import { Footer } from "./Components";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "./Components";
import { theme } from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>Hello</Typography>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
