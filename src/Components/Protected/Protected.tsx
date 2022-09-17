import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store";
import jwt from "jwt-decode";
interface Props {
  children: JSX.Element;
}

const Protected = ({ children }: Props) => {
  const location = useLocation();
  const { pathname } = location;
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
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  if (role === "user" && pathname.includes("panel")) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  if (!role && (pathname.includes("user") || pathname.includes("panel"))) {
    return <Navigate to="/?login=open" replace state={{ from: location }} />;
  }

  return children;
};

export default Protected;
