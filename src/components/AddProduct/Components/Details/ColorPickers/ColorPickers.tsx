import { Dispatch, SetStateAction } from "react";
import { Box } from "@mui/material";
import { GreyTooltip, ProductColor } from "../../../../Product/styles";
import { colorsList } from "components/Product/Components/ProductDetails/ColorPicker/data";

interface Props {
  selectedColors: string[];
  setSelectedColors: Dispatch<SetStateAction<string[]>>;
}
function ColorPickers({ selectedColors, setSelectedColors }: Props) {
  const selectColorHandler = (name: string) => () => {
    const currentIndex = selectedColors.indexOf(name);
    const colors = [...selectedColors];

    if (currentIndex === -1) {
      colors.push(name);
    } else {
      colors.splice(currentIndex, 1);
    }
    setSelectedColors(colors);
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
      {colorsList.map(({ id, name, hex }) => (
        <GreyTooltip key={id} title={name} placement="top">
          <ProductColor
            sx={{ background: hex }}
            className={`${
              selectedColors.indexOf(name) !== -1 ? "selected" : ""
            } admin`}
            onClick={selectColorHandler(name)}
          ></ProductColor>
        </GreyTooltip>
      ))}
    </Box>
  );
}

export default ColorPickers;
