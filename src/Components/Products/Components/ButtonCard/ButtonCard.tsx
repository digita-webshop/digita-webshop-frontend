import { Box} from "@mui/material";
import { StyledBtn } from "../../../../Styles/Products"

const ButtonCard = () => {
  return (
    <Box sx={{ margin: "2.2rem 0" }}>
      <StyledBtn variant="contained">shop now</StyledBtn>
    </Box>
  );
};

export default ButtonCard;