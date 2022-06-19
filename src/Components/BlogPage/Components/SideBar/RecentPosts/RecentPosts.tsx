import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import RecentPost from "./RecentPost/RecentPost";
import { articlesBlogPage } from "../../../../../Services/Utils/Data/data";

function RecentPosts() {
  return (
    <Box
      sx={{
        border: "1px solid #e9e9e9",
        px: "20px",
        pt: "20px",
        pb: "30px",
        mb: "30px",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          pb: "20px",
        }}
      >
        RECENT POSTS
      </Typography>
      <Box sx={{ width: 40, borderBottom: "3px solid #f03637" }}></Box>
      <Divider sx={{ mb: "14px" }} />

      {articlesBlogPage.map((post) =>
        post.id < 5 ? (
          <>
            <RecentPost
              title={post.title}
              image={post.image}
              date={post.releaseDate}
            />
            <Divider sx={{ mb: "14px" }} />
          </>
        ) : null
      )}
    </Box>
  );
}

export default RecentPosts;
