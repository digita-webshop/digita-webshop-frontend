import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { profileWrapper, topMenuItem, wrapper } from "styles/user";

function MyOrders({ sidebar }: { sidebar: boolean }) {
  const navigate = useNavigate();
  return (
    <Box sx={wrapper} className={sidebar ? "sidebar" : ""}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>My Orders</Typography>
        <Box sx={topMenuItem}>
          <Box sx={{ display: "flex", gap: 1 }} onClick={() => navigate("/user/orders")}>
            <Typography sx={{ fontSize: "18px" }}>See All</Typography>
            <KeyboardArrowRight className="navIcon" />
          </Box>
        </Box>
      </Box>

      <Grid container columnSpacing={3}>
        <Grid item xs={4} sm={4}>
          <Box sx={profileWrapper} onClick={() => navigate("/user/orders")}>
            <Box component="img" src="https://www.digikala.com/statics/img/svg/status-processing.svg" alt="order" />
            <Box>
              <Typography component={"span"} sx={{ fontSize: { xs: "13px", sm: "20px" } }}>
                0 Order
              </Typography>
              <Box
                sx={{
                  padding: { xs: "3px 6px", sm: "4px 10px" },
                  borderRadius: "10px",
                  background: "#CFD1F6",
                  marginTop: "4px",
                  color: "blue",
                }}
              >
                <Typography sx={{ fontSize: { xs: "10px", sm: "15px" } }}>Pending</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} sm={4}>
          <Box sx={profileWrapper} onClick={() => navigate("/user/orders")}>
            <Box
              component="img"
              src="https://www.digikala.com/statics/img/svg/status-delivered.svg"
              alt="order"
              className="itemImg"
            />
            <Box>
              <Typography component={"span"} sx={{ fontSize: { xs: "13px", sm: "20px" } }}>
                4 Order
              </Typography>
              <Box
                sx={{
                  padding: { xs: "3px 6px", sm: "4px 10px" },
                  borderRadius: "10px",
                  background: "#C4FCEF",
                  marginTop: "4px",
                  color: "green",
                }}
              >
                <Typography sx={{ fontSize: { xs: "10px", sm: "15px" } }}>Delivered</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} sm={4}>
          <Box sx={profileWrapper} onClick={() => navigate("/user/orders")}>
            <Box
              component="img"
              src="https://www.digikala.com/statics/img/svg/status-returned.svg"
              alt="order"
              className="itemImg"
            />
            <Box>
              <Typography component={"span"} sx={{ fontSize: { xs: "13px", sm: "20px" } }}>
                0 Order
              </Typography>
              <Box
                sx={{
                  padding: { xs: "3px 6px", sm: "4px 10px" },
                  borderRadius: "10px",
                  background: "#F9F871",
                  marginTop: "4px",
                  color: "#A45C40",
                }}
              >
                <Typography sx={{ fontSize: { xs: "10px", sm: "15px" } }}>Referred</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyOrders;
