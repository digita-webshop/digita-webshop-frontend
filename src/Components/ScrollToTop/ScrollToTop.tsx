import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = { children: React.ReactNode };

const ScrollToTop: React.FC<Props> = ({ children }) => {
  const { pathname, hash, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    document
      .getElementById(hash.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
    // navigate({ pathname, search });
  }, [hash]);

  return <>{children}</>;
};

export default ScrollToTop;
