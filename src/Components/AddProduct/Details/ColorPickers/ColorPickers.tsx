import { Box } from "@mui/material";
import { Ref } from "react";
import { ColorInput, ColorPickerWrapper } from "../../../../Styles/AddProduct";

interface Props {
  color: any;
  colorChangeHandler: (event: string, colorName: string) => void;
  colorClickHandler: (type: string) => () => void;
  firstColor: Ref<HTMLInputElement>;
  secondColor: Ref<HTMLInputElement>;
  thirdColor: Ref<HTMLInputElement>;
}
function ColorPickers({
  color,
  colorChangeHandler,
  colorClickHandler,
  firstColor,
  secondColor,
  thirdColor,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "5px", xl: "40px" },
        justifyContent: { xs: "space-between", xl: "start" },
        marginTop: "4px",
      }}
    >
      <ColorPickerWrapper>
        <input
          type="color"
          defaultValue={color.first}
          onChange={(e) => colorChangeHandler(e.target.value, "first")}
          ref={firstColor}
        />
        <ColorInput
          sx={{ backgroundColor: color.first }}
          onClick={colorClickHandler("first")}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <input
          type="color"
          defaultValue={color.second}
          onChange={(e) => colorChangeHandler(e.target.value, "second")}
          ref={secondColor}
        />
        <ColorInput
          sx={{ backgroundColor: color.second }}
          onClick={colorClickHandler("second")}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <input
          type="color"
          defaultValue={color.third}
          onChange={(e) => colorChangeHandler(e.target.value, "third")}
          ref={thirdColor}
        />
        <ColorInput
          sx={{ backgroundColor: color.third }}
          onClick={colorClickHandler("third")}
        />
      </ColorPickerWrapper>
    </Box>
  );
}

export default ColorPickers;
