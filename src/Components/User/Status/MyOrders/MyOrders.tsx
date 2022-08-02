import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { profileWrapper, topMenuItem, wrapper } from "../../../../Styles/User";

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
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          My Orders
        </Typography>
        <Box sx={topMenuItem}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ fontSize: "18px" }}>See All</Typography>
            <KeyboardArrowRight className="navIcon" />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box sx={profileWrapper} onClick={() => navigate("/user/orders")}>
            <Box
              component="img"
              src="https://www.digikala.com/statics/img/svg/status-processing.svg"
              alt="order"
              className="itemImg"
            />
            <Box>
              <Typography sx={{ fontSize: "20px" }}>0 Order</Typography>
              <Box
                sx={{
                  padding: "4px 10px",
                  borderRadius: "10px",
                  background: "#CFD1F6",
                  marginTop: "4px",
                  color: "blue",
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>Pending</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box sx={profileWrapper} onClick={() => navigate("/user/orders")}>
            <Box
              component="img"
              src="https://www.digikala.com/statics/img/svg/status-delivered.svg"
              alt="order"
              className="itemImg"
            />
            <Box>
              <Typography sx={{ fontSize: "20px" }}>4 Order</Typography>
              <Box
                sx={{
                  padding: "4px 10px",
                  borderRadius: "10px",
                  background: "#C4FCEF",
                  marginTop: "4px",
                  color: "green",
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>Delivered</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box sx={profileWrapper} onClick={() => navigate("/user/orders")}>
            <Box
              component="img"
              src="https://www.digikala.com/statics/img/svg/status-returned.svg"
              alt="order"
              className="itemImg"
            />
            <Box>
              <Typography sx={{ fontSize: "20px" }}>0 Order</Typography>
              <Box
                sx={{
                  padding: "4px 10px",
                  borderRadius: "10px",
                  background: "#F9F871",
                  marginTop: "4px",
                  color: "#A45C40",
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>Referred</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyOrders;
