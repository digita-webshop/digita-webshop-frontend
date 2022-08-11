import { Box, Button } from "@mui/material";
import { PButton, PTitle } from "../../../Styles/panelCommon";
import { Add } from "@mui/icons-material";
import { ContentWrapper, simpleBtn } from "../../../Styles/PanelProducts";

interface T {
  title: string;
}

const ContentHeader = ({title}: T) => {
  return (
    <ContentWrapper>
      <PTitle>{title}</PTitle>
      <Box sx={{display: "flex", gap: 1}}>
        <Button variant="outlined" sx={simpleBtn}>
          Export
        </Button>
        <Button variant="outlined" sx={simpleBtn}>
          Import
        </Button>
        <PButton variant="contained">
          <Add />
          create new
        </PButton>
      </Box>
    </ContentWrapper>
  );
};

export default ContentHeader;
