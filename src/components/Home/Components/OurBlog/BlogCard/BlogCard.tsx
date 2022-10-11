import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Card, iconStyle, textStyle } from "./Styles";
import { Link } from "react-router-dom";
import { IArticle } from "types/article";

interface Props {
  item: IArticle;
}

function BlogCard({ item }: Props) {
  return (
    <Card>
      <Box>
        <Link to={`/article/${item._id}`}>
          <img src={item.image} alt="article" />
        </Link>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "12px",
                }}
              >
                <PermIdentityIcon sx={iconStyle} />
                <Typography sx={textStyle}>{item.writer}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTimeIcon sx={iconStyle} />
                <Typography sx={textStyle}>{item.createdAt}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: "0!important" }}>
            <Typography
              variant="h2"
              sx={{
                lineHeight: "1.3",
                fontSize: "20px",
                fontWeight: 500,
                a: {
                  color: "#333333",
                  textDecoration: "none",
                  transition: "all 200ms",
                  "&:hover": {
                    color: "common.digitaRed",
                  },
                },
              }}
            >
              <Link to={`article/${item._id}`}>{item.title}</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default BlogCard;
