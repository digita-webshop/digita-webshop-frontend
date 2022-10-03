import { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/theme";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import { useAppSelector } from "./features/store";
import { ScrollToTop } from "./Components";
import { logout, setCredentials } from "./features/auth/authSlice";
import { useGetUserQuery } from "./features/user/userApi";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { id } = useAppSelector((state) => state.reducer.auth);

  const dispatch = useDispatch();

  const { data: userData } = useGetUserQuery(id);
  const user = userData?.data;

  useEffect(() => {
    if (user) {
      dispatch(
        setCredentials({
          user,
          role: user.role!,
          email: null,
        })
      );
    } else {
      dispatch(logout());
    }
  }, [user, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
