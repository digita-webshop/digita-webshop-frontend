import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  wrapper,
  topMenuItem,
  profileWrapper,
  cardWrapper,
} from "../../../Styles/User";
import { recentShopItems } from "../../../Services/Utils/Data/data";
import { titleStyle } from "../../../Styles/PanelProducts";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

interface T {
  id: number;
  image: string;
  name: string;
  price: number;
}

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Box sx={wrapper}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            Orders Status
          </Typography>
          <Box sx={topMenuItem}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ fontSize: "18px" }}>See All</Typography>
              <KeyboardArrowRightIcon className="navIcon" />
            </Box>
          </Box>
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box sx={profileWrapper} onClick={() => navigate('/user/orders')}>
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
            <Box sx={profileWrapper} onClick={() => navigate('/user/orders')}>
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
            <Box sx={profileWrapper} onClick={() => navigate('/user/orders')}>
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

      {/* ============== Recent Shops ============= */}

      <Box
        sx={{
          marginTop: "15px",
          border: "1px solid #d8d8d8",
          borderRadius: "12px",
          padding: "30px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          Latest Shops
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            overflowX: "scroll",
          }}
        >
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {recentShopItems.map((item: T) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.id}>
                <Card sx={cardWrapper}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={item.image}
                    alt="green iguana"
                    sx={{ backgroundColor: "#f2f2f3cc", objectFit: "contain" }}
                  />
                  <Box sx={{ m: "0 0.5rem" }}>
                    <Typography component="p" sx={titleStyle}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ pt: "2px", fontSize: "16px" }}
                    >
                      {"$" + item.price}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Profile;
