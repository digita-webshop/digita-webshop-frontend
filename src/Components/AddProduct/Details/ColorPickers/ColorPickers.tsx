import { Box } from "@mui/material";
import { Ref, useState } from "react";
import { GreyTooltip, ProductColor } from "../../../../Styles/Product";

const dummyColors = [
  { id: "1", name: "red", hex: "#f03637" },
  { id: "2", name: "blue", hex: "#72bcfb" },
  { id: "3", name: "green", hex: "#00FF00" },
  { id: "4", name: "orange", hex: "#FFA500" },
  { id: "5", name: "black", hex: "#000000" },
  { id: "6", name: "purple", hex: "#A020F0" },
  { id: "7", name: "white", hex: "#FFFFFF" },
  { id: "8", name: "brown", hex: "#964B00" },
  { id: "9", name: "grey", hex: "#808080" },
  { id: "10", name: "yellow", hex: "#FFFF00" },
];
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
  const [selectedColor, setSelectedColor] = useState<string[]>([]);

  const selectColorHandler = (name: string) => () => {
    const currentIndex = selectedColor.indexOf(name);
    const colors = [...selectedColor];

    if (currentIndex === -1) {
      colors.push(name);
    } else {
      colors.splice(currentIndex, 1);
    }
    setSelectedColor(colors);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: "5px", xl: "40px" },
        justifyContent: { xs: "space-between" },
        marginTop: "4px",
      }}
    >
      {dummyColors.map(({ id, name, hex }) => (
        <GreyTooltip key={id} title={name} placement="top">
          <ProductColor
            sx={{ background: hex }}
            className={`${
              selectedColor.indexOf(name) !== -1 ? "selected" : ""
            } admin`}
            onClick={selectColorHandler(name)}
          ></ProductColor>
        </GreyTooltip>
      ))}
    </Box>
  );
}

export default ColorPickers;
