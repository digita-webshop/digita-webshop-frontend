import { Box, Button, styled } from "@mui/material";

const CenterBox = styled(Box)(({ theme }) => ({
  margin: "3.5rem 0",
}));

const StyledBtn = styled(Button)`
padding: 0.780rem 2.6rem;
textTransform: 'uppercase';
font-size: 16px;
background-color: #fff;
color: #000;
  &:hover {
    color: #fff;
  }
`;

const ButtonCard = () => {
  return (
    <CenterBox>
      <StyledBtn variant="contained">shop now</StyledBtn>
    </CenterBox>
  );
};

export default ButtonCard;
