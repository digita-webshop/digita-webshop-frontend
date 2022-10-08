import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = { children: React.ReactNode };

const ScrollToTop: React.FC<Props> = ({ children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    document.getElementById(hash.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  }, [hash]);

  return <>{children}</>;
};

export default ScrollToTop;
