import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import avatar from "../../../../../../Assets/Images/Product/avatar.png";

function ReviewsList() {
  return (
    <>
      <Box sx={{ display: "flex", gap: "15px" }} mb={2}>
        <Box>
          <Avatar
            alt="avatar"
            src={avatar}
            sx={{
              width: "60px",
              height: "60px",
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="p"
              sx={{ fontSize: { xs: "12px", sm: "14px" } }}
            >
              <span className="userName">Peter Giroud </span>
              <time> – September 17, 2019</time>
            </Typography>
            <Rating name="read-only" defaultValue={5} size="small" readOnly />
          </Box>

          <Box sx={{ width: "100%", marginTop: "10px " }}>
            <Typography
              component="p"
              sx={{
                color: "common.digitaGrey",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam,
              purus eget sagittis vulputate, sapien libero hendrerit est
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ padding: "3px", width: "100%" }} />
    </>
  );
}

export default ReviewsList;
