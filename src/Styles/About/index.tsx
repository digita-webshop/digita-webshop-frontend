export const posterStyle = {
  height: 500,
  width: "100%",
  maxHeight: { xs: 200, sm: 300, md: 400, lg: 600 },
  maxWidth: { xs: "100%", md: "100%" },
  backgroundSize: "cover",
  objectFit: "cover",
};

/* ================ Contents ============== */
export const subjectTitle = {
  fontSize: { xs: "24px", sm: "28px", md: "35px" },
  textAlign: "left",
  fontWeight: "700",
  color: "#333",
  margin: "3rem 0 0rem 0",
};

export const contentStyle = {
  textAlign: "left",
  width: { sm: "100%", md: "100%", lg: "90%" },
};

export const titleStyle = {
  padding: "1rem 0",
  fontWeight: "600",
  color: "#333",
  fontSize: { sm: "19px", md: "23px" },
};
/* ================ Contents ============== */

/* ================ Services ================= */

export const serviceStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: 1,
  color: "text.secondary",
  "& svg": {
    my: 1.5,
  },
};
export const serviceTitle = {
  color: "#333",
  fontSize: { xs: "26px", sm: "32px" },
  fontWeight: "600",
  marginBottom: "20px",
};

export const itemStyle = {
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
/* ================ Services ================= */

/* ================= TEAM ===================== */
export const teamTitleStyle = {
  padding: "8rem 0 1rem 0",
  color: "#333",
  fontSize: "32px",
  fontWeight: "600",
};

export const teamsStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
};

/* ================= TEAM ===================== */

/* ================ Team Member =============== */
export const avatarWrapper = {
  "& .imgBox": {
    objectFit: "cover",
    width: "100%",
  },
  position: "relative",
  "&:hover": {
    "& .imgBox": {
      opacity: "0.6",
      zIndex: "-1",
    },
    "& .iconBox": {
      display: "flex",
    },
  },
};

export const teamItemStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
};

export const iconStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  display: "none",
  zIndex: "1",
};

export const iconCircle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  mr: 1,
  cursor: "pointer",
};
/* ================ Team Member =============== */
