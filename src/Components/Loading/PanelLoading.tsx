import { CircularProgress } from "@mui/material";
import { PStack } from "../../Styles/panelCommon";

function PanelLoading() {
  return (
    <PStack>
      <CircularProgress color="error" />
    </PStack>
  );
}

export default PanelLoading;
