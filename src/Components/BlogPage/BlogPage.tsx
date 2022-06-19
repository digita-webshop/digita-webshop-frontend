import { Grid } from "@mui/material";
import Articles from "./Components/Articles/Articles";
import SearchBar from "./Components/SideBar/SearchBar/SearchBar";
import RecentPosts from "./Components/SideBar/RecentPosts/RecentPosts";
import RecentComments from "./Components/SideBar/RecentComments/RecentComments";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";

function BlogPage() {
  return (
    <>
      <CustomBreadcrumbs title={"blog"} />
      <Grid
        container
        sx={{ py: 6.25, px: "15px", maxWidth: "1200px", mx: "auto", my: 0 }}
      >
        <Grid item md={9}>
          <Articles></Articles>
        </Grid>
        <Grid item xs={12} md={3}>
          <SearchBar></SearchBar>
          <RecentPosts></RecentPosts>
          <RecentComments></RecentComments>
        </Grid>
      </Grid>
    </>
  );
}

export default BlogPage;
