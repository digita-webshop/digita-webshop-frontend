import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link as RouterLink } from "react-router-dom";
import { getReadableDate } from "../../../../../../../Services/Utils/getReadableDate";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: 10,
}));

type props = {
  id: string;
  writer: string;
  createdAt: string;
  category: string;
};

const CardDescription = ({ id, writer, createdAt, category }: props) => {
  const date = getReadableDate(createdAt);
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
            style={{ fontSize: "1rem" }}
            color="secondary"
          />
          <Link
            component={RouterLink}
            to={`/blog/${id}/writer/${writer.replace(/\s+/g, "-")}`}
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
            {writer} -
          </Link>
        </Box>
      </Item>
      {/* Release createdAt article */}
      <Item>
        <Box display="flex" fontSize={"12px"}>
          &nbsp;
          <AccessTimeOutlinedIcon
            style={{ fontSize: "13px" }}
            color="secondary"
          />
          &nbsp;{date} -
        </Box>
      </Item>
      {/* category article */}
      <Item>
        <Box display="flex">
          &nbsp;
          <FolderOutlinedIcon style={{ fontSize: "13px" }} color="secondary" />
          <Link
            component={RouterLink}
            to={`/blog/${id}/category/${category.replace(/\s+/g, "-")}`}
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
            &nbsp;{category}
          </Link>
        </Box>
      </Item>
    </Box>
  );
};

export default CardDescription;
