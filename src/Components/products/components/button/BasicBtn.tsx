import { Box, Button, styled } from "@mui/material";

const CenterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: "2rem 0",
}));

const StyledBtn = styled(Button)`
padding: 0.899rem 3.2rem;
font-size: 16px;
textTransform: 'uppercase';
`;

const BasicBtn = () => {
  return (
    <CenterBox>
      <StyledBtn variant="contained">shop now</StyledBtn>
    </CenterBox>
  );
};

export default BasicBtn;
