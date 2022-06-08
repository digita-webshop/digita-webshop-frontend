import { Footer } from "./Components";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "./Components";
import { theme } from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
