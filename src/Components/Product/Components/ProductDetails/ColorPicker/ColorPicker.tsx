import { Box, Typography } from "@mui/material";
import {
  colorBoxStyles,
  GreyTooltip,
  ProductColor,
} from "../../../../../Styles/Product";
import { useState } from "react";

const dummyColors = [
  { id: "1", name: "red", hex: "#f03637" },
  { id: "2", name: "blue", hex: "#72bcfb" },
];

interface Props {
  colors: string[];
}
function ColorPicker({ colors }: Props) {
  const [selectedColor, setSelectedColor] = useState(dummyColors[0].name);

  const selectColorHandler = (name: string) => () => {
    setSelectedColor(name);
  };
  return (
    <Box
      sx={{
        marginY: "10px",
        display: "flex",
        height: "50px",
      }}
    >
      <Box sx={colorBoxStyles}>
        <Typography sx={{ fontWeight: 600 }}>color</Typography>:
        <Typography sx={{ fontWeight: 400 }}>{selectedColor}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ddd",
          width: "80%",
        }}
      >
        {dummyColors.map(({ id, name, hex }) => (
          <GreyTooltip key={id} title={name} placement="top">
            <ProductColor
              sx={{ background: hex }}
              className={selectedColor === name ? "selected" : ""}
              onClick={selectColorHandler(name)}
            ></ProductColor>
          </GreyTooltip>
        ))}
      </Box>
    </Box>
  );
}

export default ColorPicker;
