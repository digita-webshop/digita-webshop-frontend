import { Box, Typography } from "@mui/material";
import { wrapper, EmptyWishlistWrapper } from "../../../Styles/User";

const Wishlist = () => {
  const wish = 0;

  return (
    <>
      <Box sx={wrapper}>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          Wishlist
        </Typography>

        {/* =========== If wishlist is empty render this ==========  */}
        {wish > 0 && (
          <EmptyWishlistWrapper>
            <Box
              component="img"
              src="https://www.digikala.com/statics/img/svg/favorites-list-empty.svg"
              alt="empty"
              className="itemImg"
            />
            <Typography sx={{ fontWeight: "400", fontSize: "17px" }}>
              Your Wishlist is empty
            </Typography>
          </EmptyWishlistWrapper>
        )}
      </Box>
    </>
  );
};

export default Wishlist;
