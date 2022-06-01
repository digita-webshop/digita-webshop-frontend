import { Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h1">Hello dream</Typography>
      </div>
      <Button variant="contained">primary</Button>
    </ThemeProvider>
  );
}

export default App;
