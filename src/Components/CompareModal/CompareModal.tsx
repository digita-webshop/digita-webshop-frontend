import { Close } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { CompareWrapper } from "../../Styles/Compare";

interface Props {
  setOpenCompareModal: Dispatch<SetStateAction<boolean>>;
}

function CompareModal({ setOpenCompareModal }: Props) {
  return (
    <CompareWrapper>
      <Box className="title">
        <Typography component={"h2"}>Compare Products</Typography>
        <Box onClick={() => setOpenCompareModal(false)}>
          <Close />
        </Box>
      </Box>
    </CompareWrapper>
  );
}

export default CompareModal;
