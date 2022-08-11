import { Close } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CompareWrapper } from "../../Styles/Compare";
import ItemsTable from "./ItemsTable/ItemsTable";

interface Props {
  setOpenCompareModal: Dispatch<SetStateAction<boolean>>;
}

function CompareModal({ setOpenCompareModal }: Props) {
  const compareList = useSelector(
    (state: RootState) => state.compareReducer.compareList
  );
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
        <ItemsTable productData={compareList} />
      </Box>
    </CompareWrapper>
  );
}

export default CompareModal;
