import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link as RouterLink } from "react-router-dom";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: 10,
}));

type props = {
  id: number;
  author: string;
  date: string;
  category: string;
};

const ArticleDescription = ({ id, author, date, category }: props) => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      flexWrap='wrap'
      alignItems='flex-end'
    >
      {/* Author article */}
      <Item>
        <Box display='flex' alignItems='flex-end'>
          <PersonOutlineOutlinedIcon
            style={{ fontSize: "15px" }}
            color='secondary'
          />
          <Link
            component={RouterLink}
            to={`/blog/${id}/author/${author.replace(/\s+/g, "-")}`}
            underline='none'
            color='secondary'
            sx={{
              "&:hover": {
                color: "#f03637",
                transition: "all 500ms",
              },
            }}
          >
            {author} -
          </Link>
        </Box>
      </Item>
      {/* Release date article */}
      <Item>
        <Box display='flex'>
          &nbsp;
          <AccessTimeOutlinedIcon
            style={{ fontSize: "15px" }}
            color='secondary'
          />
          &nbsp;{date} -
        </Box>
      </Item>
      {/* category article */}
      <Item>
        <Box display='flex'>
          &nbsp;
          <FolderOutlinedIcon style={{ fontSize: "15px" }} color='secondary' />
          <Link
            component={RouterLink}
            to={`/blog/${id}/category/${category.replace(/\s+/g, "-")}`}
            underline='none'
            color='secondary'
            sx={{
              "&:hover": {
                color: "#f03637",
                transition: "all 500ms",
              },
            }}
          >
            &nbsp;{category} -
          </Link>
        </Box>
      </Item>
      <Item>
        <Box display='flex' alignItems='flex-end'>
          &nbsp;
          <ModeCommentOutlinedIcon
            style={{ fontSize: "15px" }}
            color='secondary'
          />
          <Link
            href='#'
            underline='none'
            color='secondary'
            sx={{
              "&:hover": {
                color: "#f03637",
                transition: "all 500ms",
              },
            }}
          >
            &nbsp;0 Comments
          </Link>
        </Box>
      </Item>
    </Box>
  );
};

export default ArticleDescription;
