import {
  Box,
  CardContent,
  Button,
  Card,
  CardMedia,
  Typography,
  Modal,
  Link,
} from "@mui/material";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { cartModal } from "../../../Styles/PanelProducts";
import { Link as RouterLink } from "react-router-dom";

import {
  cardWrapper,
  titleWrapper,
  deleteBtn,
  editBtn,   
} from "../../../Styles/PanelProducts";
import { titleStyle } from "../../../Styles/Articles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { Item } from "../../../Styles/Articles";

type T = {
  id: number;
  title: string;
  image: string;
  author: string;
  releaseDate: string;
  category: string;
  onRemove: Function;
};

const Article = ({
  id,
  title,
  image,
  author,
  releaseDate,
  category,
  onRemove,
}: T) => {
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <Card sx={cardWrapper}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt="green iguana"
        sx={{ backgroundColor: "#f2f2f3cc", objectFit: "contain" }}
      />
      <Box
        marginLeft="1rem"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="flex-end"
      >
        {/* Author article */}
        <Item>
          <Box display="flex" alignItems="flex-end">
            <PersonOutlineOutlinedIcon
              style={{ fontSize: "1rem" }}
              color="secondary"
            />
            <Link
              component={RouterLink}
              to={`/blog/${id}/author/${author.replace(/\s+/g, "-")}`}
              underline="none"
              color="secondary"
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
          <Box display="flex">
            &nbsp;
            <AccessTimeOutlinedIcon
              style={{ fontSize: "13px" }}
              color="secondary"
            />
            &nbsp;{releaseDate} -
          </Box>
        </Item>
        {/* category article */}
        <Item>
          <Box display="flex">
            &nbsp;
            <FolderOutlinedIcon
              style={{ fontSize: "13px" }}
              color="secondary"
            />
            <Link
              component={RouterLink}
              to={`/blog/${id}/category/${category.replace(/\s+/g, "-")}`}
              underline="none"
              color="secondary"
              sx={{
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

      <CardContent sx={titleWrapper}>
        <Typography component="p" sx={titleStyle}>
          {title}
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            sx={editBtn}
            component={RouterLink}
            to={`/panel/product/${id}`}
          >
            <EditIcon sx={{ margin: "0 0.2rem", color: "#999" }} />
            Edit
          </Button>
          <Button
            variant="contained"
            sx={deleteBtn}
            onClick={() => setOpenDelete(true)}
          >
            <DeleteForeverIcon sx={{ margin: "0 0.2rem" }} />
            Delete
          </Button>
        </Box>

        <Modal
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={cartModal}>
            <DeleteForeverIcon
              sx={{ fontSize: 110, fontWeight: 100, color: "#f03637", p: 2 }}
            />
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Delete this item?
            </Typography>
            <Box sx={{ display: "flex", gap: 3, margin: "1rem 0" }}>
              <Button
                variant="contained"
                sx={{
                  p: "0.8rem 2.2rem",
                  borderRadius: "4px",
                  fontSize: "15px",
                  height: "46px",
                }}
                onClick={() => setOpenDelete(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={() => onRemove(id)}
                variant="contained"
                sx={{
                  p: "0.8rem 2.2rem",
                  background: "#f03637",
                  borderRadius: "4px",
                  fontSize: "15px",
                  height: "46px",
                  "&:hover": { background: "#333" },
                }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Modal>
      </CardContent>
    </Card>
  );
};
export default Article;
