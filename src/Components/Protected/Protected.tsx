import { Navigate, useLocation } from "react-router-dom";
interface Props {
  role: null | string;
  children: JSX.Element;
}

const Protected = ({ role, children }: Props) => {
  const location = useLocation().pathname.split("/");

  //* Admin dont have access to user
  if (role === "admin" && location[1] !== "user") {
    return children;
  }

  //* User dont have access to panel
  else if (role === "user" && location[1] !== "panel") {
    return <Navigate to="/user" replace />;
  }

  //* User dont access to panel and admin dont have access to user routes
  else if (
    (role === "user" && location[1] === "panel") ||
    (role === "admin" && location[1] === "user")
  ) {
    return <Navigate to="/" replace />;
  } else if (role === null) {
    return <Navigate to="/" replace />;
  }
  /* else if (role === "superadmin") {
    return <Navigate to="/panel/manage-access" replace />;
  } */
  return children;
};

export default Protected;
