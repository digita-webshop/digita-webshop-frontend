import { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./routes";
import { useAppSelector } from "./redux/store";
import ScrollToTop from "./routes/ScrollToTop";
import { logout, setCredentials } from "./redux/auth/authSlice";
import { useGetUserMutation } from "./redux/user/userApi";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { id } = useAppSelector((state) => state.reducer.auth);

  const dispatch = useDispatch();

  const [getUser] = useGetUserMutation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(id).unwrap();
        const user = response.data;
        dispatch(setCredentials({ user, role: user.role!, email: null }));
      } catch (err) {
        dispatch(logout());
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id, dispatch, getUser]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <AppRoutes />
        </ScrollToTop>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
