import { Navigate } from "react-router-dom";
interface Props {
  role: string;
  children: JSX.Element;
}

const Protected = ({ role, children }: Props) => {
  if (role === "admin") {
    return <Navigate to="/panel" replace />;
  } else if (role === "user") {
    return <Navigate to="/user" replace />;
  }
  return children;
};

export default Protected;
