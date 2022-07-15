import { CardWrapper, PFormLabel } from "../../../Styles/panelCommon";
import TextEditor from "../../TextEditor/TextEditor";

function Description() {
  return (
    <CardWrapper mt={4}>
      <PFormLabel sx={{ display: "block", ml: "5px", mb: "10px" }}>
        description
      </PFormLabel>
      <TextEditor />
    </CardWrapper>
  );
}

export default Description;
