import { Box, Button, styled } from "@mui/material";

const CenterBox = styled(Box)(({ theme }) => ({
  margin: "3.5rem 0",
}));

const StyledBtn = styled(Button)`
background: '#333';
padding: 0.889rem 3rem;
textTransform: 'uppercase';
background-color: #fff;
color: #000;
  &:hover {
    background-color: #FF0015;
    color: #fff;
  }
`;

const ButtonOther = () => {
  return (
    <CenterBox>
      <StyledBtn variant="contained">shop now</StyledBtn>
    </CenterBox>
  );
};

export default ButtonOther;
