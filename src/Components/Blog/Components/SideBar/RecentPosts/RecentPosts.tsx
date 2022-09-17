import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import RecentPost from "./RecentPost/RecentPost";
import { articlesBlogPage } from "../../../../../Services/Data/data";
import { FilterTitleWrapper } from "../../../../../Styles/ShopPage";
import { Fragment } from "react";

function RecentPosts() {
  return (
    <Box
      sx={{
        border: "1px solid #e9e9e9",
        px: "10px",
        pt: "20px",
        pb: "30px",
        mb: "30px",
        mr: "15px",
      }}
    >
      <FilterTitleWrapper className="underline">
        <Typography
          component={"h4"}
          variant="body1"
          color="primary"
          fontWeight={600}
        >
          RECENT POSTS
        </Typography>
      </FilterTitleWrapper>
      {articlesBlogPage.map((post) =>
        post.id < 5 ? (
          <Fragment key={post.id}>
            <RecentPost
              id={post.id}
              title={post.title}
              image={post.image}
              date={post.releaseDate}
            />
            {post.id !== 4 ? <Divider sx={{ mb: "14px" }} /> : null}
          </Fragment>
        ) : null
      )}
    </Box>
  );
}

export default RecentPosts;
