import { useTheme } from "@mui/material/styles";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import SearchBar from "../Components/SideBar/SearchBar/SearchBar";
import RecentPosts from "../Components/SideBar/RecentPosts/RecentPosts";
import RecentComments from "../Components/SideBar/RecentComments/RecentComments";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import { articlesBlogPage } from "../../../Services/Utils/Data/data";
import { posterStyle } from "../../../Styles/About";
import ArticleDescription from "./articleDescription/ArticleDescription";
import Divider from "@mui/material/Divider";
import Contents from "./Contents/Contents";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { FormEvent, useState } from "react";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#F5F5F5",
    height: { xs: "50px", md: "40px" },
  },
};
function BlogArticle() {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";

  const emailRegex = /^\S+@\S+\.\S+$/;
  const emailIsValid = emailRegex.test(enteredEmail);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!emailIsValid && !nameIsValid) {
      return;
    }
  };
  // const { id } = useParams<{ id: string }>();
  const pathArray = window.location.pathname.split("/");
  const id = pathArray[pathArray.length - 1];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const article = articlesBlogPage.find((article) => article.id === +id);
  return (
    <Box bgcolor={"white"}>
      <Breadcrumbs title={"blog"} lastPath={article?.title} />
      <Grid container sx={{ py: 6.25, maxWidth: "1200px", mx: "auto", my: 0 }}>
        <Grid item md={9}>
          <Grid sx={{ ml: "15px" }}>
            {!matches ? <SearchBar></SearchBar> : null}
          </Grid>
          <Grid container px={"15px"} mb={"35px"}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "35px" },
                fontWeight: "400",
                color: "#333",
              }}
              mb={"15px"}
            >
              {article?.title}
            </Typography>
            <Grid container sx={{ mb: "20px" }}>
              <ArticleDescription
                author={String(article?.author)}
                category={String(article?.category)}
                id={+id}
                date={String(article?.releaseDate)}
              ></ArticleDescription>
            </Grid>
            <Box
              component="img"
              sx={posterStyle}
              src={article?.image}
              height="600px"
              maxWidth={"820px"}
              maxHeight={"600px"}
              marginBottom={"20px"}
            />
            <Typography color={"#f03637"} mb={"20px"}>
              Maecenas eget congue augue. Sed mollis tempor velit, et tempor
              justo cursus vel. Phasellus lacinia placerat lacus, vulputate
              volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non
              ultricies felis condimentum eget unc ornare susc
            </Typography>
            <Contents />
            <Contents />
            {/* TODO: add design is the silent section */}
            <Grid container sx={{ mb: "20px" }}>
              {/* <Divider orientation='vertical' flexItem sx={{ width: "10px" }} /> */}
            </Grid>
            <Contents />
            {/*  TODO: add article card section for article 1, 4 due to the similarity of the topic two articles */}
            <Divider />
            {/* comments */}
            <Box>
              <Typography fontWeight={500} marginBottom={4} variant="h6">
                LEAVE A REPLY
              </Typography>
              <form onSubmit={submitHandler}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        placeholder="Your Comment Here..."
                        multiline
                        rows={6}
                        sx={{
                          "& .MuiOutlinedInput-root": {},
                          backgroundColor: "#F5F5F5",
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <TextField
                        placeholder="Name (required)"
                        sx={inputStyles}
                        value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
                        onBlur={() => setNameTouched(true)}
                      />
                      {!nameIsValid && nameTouched && (
                        <Typography sx={{ color: "#f03637", marginTop: "2px" }}>
                          name is required
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <TextField
                        placeholder="Email (required)"
                        sx={inputStyles}
                        value={enteredEmail}
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        onBlur={() => setEmailTouched(true)}
                      />
                      {!emailIsValid && emailTouched && (
                        <Typography sx={{ color: "#f03637", marginTop: "2px" }}>
                          please enter a valid email address
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <TextField placeholder="Website" sx={inputStyles} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#f03637",
                              "&.Mui-checked": {
                                color: "#f03637",
                              },
                            }}
                          />
                        }
                        label="Save my name, email, and website in this browser for the next time I comment."
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      sx={{
                        width: { xs: "60%" },
                        height: "40px",
                        backgroundColor: "#f03637",
                        color: "white",
                        "&:hover": { backgroundColor: "#333333" },
                      }}
                    >
                      Post Comment
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid sx={{ ml: "15px" }}>
            {matches ? <SearchBar></SearchBar> : null}
            <RecentPosts></RecentPosts>
            <RecentComments></RecentComments>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BlogArticle;
