import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/store";
interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();
  const { pathname } = location;
  const { role } = useAppSelector((state) => state.reducer.auth);

  console.log(pathname);

  if (role === "superAdmin" && pathname.includes("/user")) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  if (role === "admin" && (pathname.includes("/user") || pathname === "/panel/manage-access")) {
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

export default PrivateRoute;
