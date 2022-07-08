import { Box, List, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import { panelSettingItems } from "../../../Services/Utils/Data/data";
import { PanelItem } from "../../../Styles/Panel";

function Sidebar() {
  return (
    <Box
      sx={{
        paddingX: { lg: "15px" },
        borderRight: { lg: "1px solid " },
        borderRightColor: { lg: "common.panelHoverDarkGrey" },
        height: "100%",
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "row", lg: "column" },
          gap: { xs: "10px", lg: "0" },
        }}
      >
        {panelSettingItems.map(({ id, title, route }) => (
          <PanelItem key={id}>
            <NavLink to={route}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
                primary={title}
              />
            </NavLink>
          </PanelItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
