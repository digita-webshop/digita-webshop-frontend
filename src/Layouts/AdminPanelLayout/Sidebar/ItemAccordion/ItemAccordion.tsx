import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Icon,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { Dispatch, SetStateAction } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  accordionDetailStyles,
  accordionSummaryStyles,
  PanelItem,
} from "../../styles";

interface I {
  id: string;
  name: string;
  route: string;
}

interface Props {
  title: string;
  icon: string;
  data: I[];
  menuOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

function ItemAccordion({ title, icon, data, menuOpen, setDrawerOpen }: Props) {
  const { pathname } = useLocation();
  return (
    <Accordion
      sx={{
        margin: "0 !important",
        "&:before": { display: "none !important" },
      }}
    >
      <PanelItem>
        <Box
          className={`link ${pathname.includes(title) && "active"}`}
          sx={{ padding: "0 !important" }}
        >
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls={`panel-item${title}`}
            id={`panel-item${title}`}
            sx={accordionSummaryStyles}
          >
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText
              sx={{ display: menuOpen ? "" : "none" }}
              primaryTypographyProps={{
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
              primary={title}
            />
          </AccordionSummary>
        </Box>
      </PanelItem>
      <AccordionDetails sx={accordionDetailStyles}>
        {data.map((item) => (
          <NavLink
            key={item.id}
            to={item.route}
            onClick={() => setDrawerOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default ItemAccordion;
