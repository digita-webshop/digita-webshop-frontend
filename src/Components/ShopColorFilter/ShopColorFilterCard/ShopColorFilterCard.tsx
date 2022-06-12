import {
  Box,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

type ColorFilterProps = {
  isChecked: boolean;
  color: string;
  labelId: string;
  handleToggle: (value: string) => any;
};
function ShopColorFilterCard({
  isChecked,
  color,
  labelId,
  handleToggle,
}: ColorFilterProps) {
  return (
    <ListItem
      secondaryAction={
        <Box
          sx={{
            bgcolor: isChecked ? "red" : "#5454540D",
            color: isChecked ? "white" : "#333333 ",
            paddingY: "2.5px",
            paddingX: "12px",
            borderRadius: "20px",
            fontSize: "12px",
            border: "1px solid #5454540D",
            transition: "all 200ms ease-in",
          }}
          className="filter-color-badge"
        >
          4
        </Box>
      }
      sx={{
        "&:hover": {
          color: "#f03637",
          backgroundColor: "white",
          cursor: "pointer",
          transition: "all 200ms ease-in",
          "& .filter-color-text": {
            color: "#f03637",
          },
          "& .filter-color-badge": {
            border: "1px solid #f03637",
            color: isChecked ? "white" : "#f03637 ",
            bgcolor: isChecked ? "#f03637 " : "white",
          },
        },
      }}
      disablePadding
      onClick={handleToggle(color)}
    >
      <ListItemIcon sx={{ minWidth: 0 }}>
        <Checkbox
          sx={{
            padding: "0 8px 0 0 ",
            "&.Mui-checked": {
              color: "#f03637  ",
            },
          }}
          edge="start"
          checked={isChecked}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText
        id={labelId}
        primary={
          <Typography
            sx={{
              textTransform: "capitalize",
              color: "#333333",
              fontSize: "13px",
              transition: "all 200ms ease-in",
            }}
            className="filter-color-text"
          >
            {color}
          </Typography>
        }
      />
    </ListItem>
  );
}

export default ShopColorFilterCard;
