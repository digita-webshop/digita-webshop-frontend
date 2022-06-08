import { Footer } from "./Components";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "./Components";
import { theme } from "./Theme/theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        
        <Navbar />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
