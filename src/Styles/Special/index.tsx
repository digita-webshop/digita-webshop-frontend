/* ============ Special Card ============== */
export const styleContent = {
  padding: "2.2rem 2rem",
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  transition: "0.8s",
};

export const cardStyle = {
  position: "relative",
  transition: "1s ease-in-out",
  "&:hover": {
    "& .img-card": {
      filter: "brightness(70%)",
      transform: "scale(1.17)",
    },
    "& .card-content": {
      transform: "translateY(15px)",
    },
  },
};

export const contentStyle = {
  height: "340px",
  img: {
    width: "100%",
    height: "340px",
    transition: "all 800ms ease-in-out",
    objectFit: "cover",
  },
  overflow: "hidden",
};
/* ============ Special Card ============== */

/* ============ Special Item ============== */
export const itemContent = {
  paddingTop: "0.4rem",
  Button: {
    margin: "0.9rem 0",
  },
};
/* ============ Special Item ============== */

/* ============ SupportItems Item ============== */
export const supportStyle = {
  margin: "4rem 0",
  display: "flex",
  alignItems: "center",
  width: "100%",
  border: (theme: any) => `1px solid ${theme.palette.divider}`,
  borderRadius: 1,
  bgcolor: "background.paper",
  color: "text.secondary",
  "& svg": {
    m: 1.5,
  },
  "& hr": {
    mx: 0.5,
  },
  "&.slideInFromBottom": {
    animation: (theme: any) =>
      `slideInFromBottom 1000ms ${theme.transitions.easing.easeInOut}`,
  },
};

export const itemStyle = {
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
/* ============ SupportItems Item ============== */
