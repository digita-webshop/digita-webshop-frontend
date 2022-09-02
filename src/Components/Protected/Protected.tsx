import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store";
import jwt from "jwt-decode";
interface Props {
  children: JSX.Element;
}

const Protected = ({ children }: Props) => {
  const { pathname } = useLocation();
  const { token } = useAppSelector((state) => state.authReducer);

  let role = null;
  if (token) {
    const decodedToken = jwt(token) as any;
    role = decodedToken.role;
  }

  if (
    (role === "admin" && pathname.includes("user")) ||
    pathname === "/panel/manage-access"
  ) {
    return <Navigate to="/" replace />;
  }

  if (role === "user" && pathname.includes("panel")) {
    return <Navigate to="/" replace />;
  }

  if (!role && (pathname.includes("user") || pathname.includes("panel"))) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;
