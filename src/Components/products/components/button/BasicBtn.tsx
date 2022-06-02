import { Box, Button, styled } from "@mui/material";

const CenterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: "2rem 0",
}));

const StyledBtn = styled(Button)`
background: '#333';
padding: 0.889rem 3rem;
textTransform: 'uppercase';
background-color: #333;
  &:hover {
    background-color: #FF0015;
  }
`;

const BasicBtn = () => {
  return (
    <CenterBox>
      <StyledBtn variant="contained">shop now</StyledBtn>
    </CenterBox>
  );
};

export default BasicBtn;
