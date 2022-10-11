import { CircularProgress } from "@mui/material";
import { PStack } from "styles/panel";

function PanelLoading() {
  return (
    <PStack>
      <CircularProgress color="error" />
    </PStack>
  );
}

export default PanelLoading;
