import { Close } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../../store";
import { CompareWrapper } from "../../Styles/Compare";
import ItemsTable from "./ItemsTable/ItemsTable";

interface Props {
  setOpenCompareModal: Dispatch<SetStateAction<boolean>>;
}

function CompareModal({ setOpenCompareModal }: Props) {
  const compareList = useAppSelector(
    (state) => state.reducer.compare.compareList
  );
  return (
    <CompareWrapper>
      <Box sx={{ height: "90%", overflow: "auto", backgroundColor: "white" }}>
        <Box
          className="close-button"
          onClick={() => setOpenCompareModal(false)}
        >
          <Close />
        </Box>
        <Box className="title">
          <Typography component={"h2"}>Compare Products</Typography>
        </Box>
        {compareList.length === 0 ? (
          <Box>
            <Typography
              variant="h6"
              textTransform={"capitalize"}
              textAlign={"center"}
              my={4}
            >
              no products added in compare table
            </Typography>
          </Box>
        ) : (
          <ItemsTable productData={compareList} />
        )}
      </Box>
    </CompareWrapper>
  );
}

export default CompareModal;
