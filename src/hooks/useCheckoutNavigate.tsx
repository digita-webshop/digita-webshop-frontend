import { useAppSelector } from "@/features/store";
import { useLocation, useNavigate } from "react-router-dom";

export function useCheckoutNavigate() {
  const { user } = useAppSelector((state) => state.reducer.auth);

  const location = useLocation();
  const navigate = useNavigate();

  const checkoutHandler = () => {
    if (!user) {
      navigate(
        { pathname: location.pathname, search: "login=open" },
        { state: { from: { pathname: "/checkout" } }, replace: true }
      );
    } else {
      navigate({ pathname: "/checkout" });
    }
  };

  return { checkoutHandler };
}
