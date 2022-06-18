import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Blog, ContactUs, Home, Shop } from "./Pages/Main";
import MainLayout from "./Layouts/MainLayout/MainLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<ContactUs />} />
            <Route path="/contact-us" element={<AboutUs />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
