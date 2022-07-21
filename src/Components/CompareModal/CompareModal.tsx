import { Close } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { productData } from "../../Services/Utils/Data/data";
import { CompareWrapper } from "../../Styles/Compare";
import ItemsTable from "./ItemsTable/ItemsTable";

interface Props {
  setOpenCompareModal: Dispatch<SetStateAction<boolean>>;
}

function CompareModal({ setOpenCompareModal }: Props) {
  return (
    <CompareWrapper>
      <Box sx={{ height: "90%", overflow: "auto" }}>
        <Box
          className="close-button"
          onClick={() => setOpenCompareModal(false)}
        >
          <Close />
        </Box>
        <Box className="title">
          <Typography component={"h2"}>Compare Products</Typography>
        </Box>
        <ItemsTable productData={productData.slice(0, 2)} />
      </Box>
    </CompareWrapper>
  );
}

export default CompareModal;
