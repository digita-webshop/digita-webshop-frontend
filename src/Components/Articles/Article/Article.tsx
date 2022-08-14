import {
  Box,
  CardContent,
  Button,
  Card,
  CardMedia,
  Menu,
  Typography,
  MenuItem,
  Modal,
  Link,
  Fade,
} from "@mui/material";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { cartModal } from "../../../Styles/PanelProducts";
import { Link as RouterLink } from "react-router-dom";

import { cardWrapper } from "../../../Styles/Articles";
import {
  titleStyle,
  titleWrapper,
  Item,
  editStyle,
  AuthorWrapper,
} from "../../../Styles/Articles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

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

  /* Edit part */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    setOpenDelete(true);
  };
  /* Edit part */

  return (
    <Card sx={cardWrapper}>
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt="green iguana"
        sx={{ backgroundColor: "#f2f2f3cc", objectFit: "contain" }}
      />
      <AuthorWrapper>
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
      </AuthorWrapper>

      <CardContent sx={titleWrapper}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography component="p" sx={titleStyle}>
            {title}
          </Typography>

          <Box>
            <Button
              id="fade-button"
              sx={editStyle}
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <EditIcon sx={{ color: "#999" }} />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>
                <Typography sx={{ color: "common.digitaRed" }}>
                  Delete
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </CardContent>

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
    </Card>
  );
};
export default Article;
