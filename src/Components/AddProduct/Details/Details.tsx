import {
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import { brands } from "../../../Services/Utils/Data/data";
import {
  CardWrapper,
  PFormControl,
  PTextField,
} from "../../../Styles/panelCommon";
import { formLabelStyles } from "../../../Styles/Settings";
import ColorPickers from "./ColorPickers/ColorPickers";

function Details() {
  const [selectedBrand, setSelectedBrand] = useState("apple");
  const [color, setColor] = useState({
    first: "#f03637",
    second: "#18e37d",
    third: "#4169e1",
  });

  const firstColor = useRef<HTMLInputElement>(null);
  const secondColor = useRef<HTMLInputElement>(null);
  const thirdColor = useRef<HTMLInputElement>(null);

  const selectedBrandHandler = (event: SelectChangeEvent) => {
    setSelectedBrand(event.target.value);
  };

  const colorChangeHandler = (selectedColor: string, colorName: string) => {
    setColor((prevState) => ({
      ...prevState,
      [colorName]: selectedColor,
    }));
  };
  const colorClickHandler = (type: string) => () => {
    if (type === "first") {
      firstColor.current?.click();
    }
    if (type === "second") {
      secondColor.current?.click();
    }
    if (type === "third") {
      thirdColor.current?.click();
    }
  };
  return (
    <CardWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel sx={formLabelStyles}>product title</FormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <FormLabel sx={formLabelStyles}>SKU</FormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
          <PFormControl size="small">
            <FormLabel sx={formLabelStyles}>brands</FormLabel>
            <Select
              variant="outlined"
              displayEmpty
              value={selectedBrand}
              onChange={selectedBrandHandler}
            >
              {brands.map(({ id, name }) => (
                <MenuItem key={id} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </PFormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormLabel sx={formLabelStyles}>colors</FormLabel>
          <ColorPickers
            color={color}
            colorChangeHandler={colorChangeHandler}
            colorClickHandler={colorClickHandler}
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
          />
        </Grid>
        <Grid item xs={12}>
          <PFormControl>
            <FormLabel sx={formLabelStyles}>short description</FormLabel>
            <TextField
              placeholder="Type Here"
              multiline
              rows={4}
              sx={{ width: "100%" }}
            />
          </PFormControl>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Details;
