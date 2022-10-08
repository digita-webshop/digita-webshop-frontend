import { Box, Link } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { Item } from "../../styles";

type props = {
  author: string;
  date: string;
  category: string;
};

const ArticleDescription = ({ author, date, category }: props) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="flex-end"
    >
      {/* Author article */}
      <Item>
        <Box display="flex" alignItems="center">
          <PersonOutlineOutlinedIcon
            style={{ fontSize: "15px" }}
            color="secondary"
          />
          <Link
            href="#"
            underline="none"
            color="secondary"
            sx={{
              fontSize: "12px",
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
        <Box display="flex">
          &nbsp;
          <AccessTimeOutlinedIcon
            style={{ fontSize: "15px" }}
            color="secondary"
          />
          &nbsp;{date} -
        </Box>
      </Item>
      {/* category article */}
      <Item>
        <Box display="flex" alignItems={"center"}>
          &nbsp;
          <FolderOutlinedIcon style={{ fontSize: "15px" }} color="secondary" />
          <Link
            href="#"
            underline="none"
            color="secondary"
            sx={{
              fontSize: "12px",
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
        <Box display="flex" alignItems="center">
          &nbsp;
          <ModeCommentOutlinedIcon
            style={{ fontSize: "15px" }}
            color="secondary"
          />
          <Link
            href="#"
            underline="none"
            color="secondary"
            sx={{
              fontSize: "12px",
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
