import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>Hello</Typography>
    </ThemeProvider>
  );
}

export default App;
