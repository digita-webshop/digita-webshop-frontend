import { Box } from "@mui/material";
import { PButton, PTitle } from "styles/panel";
import { Add } from "@mui/icons-material";
import { ContentWrapper } from "../styles";
import { useNavigate } from "react-router-dom";

interface T {
  title: string;
}

const ContentHeader = ({ title }: T) => {
  const navigate = useNavigate();
  return (
    <ContentWrapper>
      <PTitle>{title}</PTitle>
      <Box sx={{ display: "flex", gap: 1 }}>
        <PButton variant="contained" onClick={() => navigate(`/panel/${title.toLowerCase()}/add`)}>
          <Add />
          create new
        </PButton>
      </Box>
    </ContentWrapper>
  );
};

export default ContentHeader;
