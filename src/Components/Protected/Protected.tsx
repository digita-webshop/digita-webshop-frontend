import { Navigate } from "react-router-dom";
interface Props {
  role: null | string;
  children: JSX.Element;
}

const Protected = ({ role, children }: Props) => {
  if (role === "admin") {
    return <Navigate to="/panel/*" replace />;
  } else if (role === "user") {
    return <Navigate to="/user/*" replace />;
  } /* else if (role === "superadmin") {
    return <Navigate to="/panel/manage-access" replace />;
  } */ else if (role === null) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
