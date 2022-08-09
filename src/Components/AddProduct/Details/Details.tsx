import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction, useRef } from "react";
import { brands } from "../../../Services/Utils/Data/data";
import {
  CardWrapper,
  PFormControl,
  PFormLabel,
  PTextField,
} from "../../../Styles/panelCommon";
import ColorPickers from "./ColorPickers/ColorPickers";
interface IColors {
  first: string;
  second: string;
  third: string;
}
interface Props {
  enteredTitle: string;
  setEnteredTitle: Dispatch<SetStateAction<string>>;
  enteredSku: string;
  setEnteredSku: Dispatch<SetStateAction<string>>;
  selectedBrand: string;
  setSelectedBrand: Dispatch<SetStateAction<string>>;
  selectedColors: IColors;
  setSelectedColors: Dispatch<SetStateAction<IColors>>;
  enteredShortDesc: string;
  setEnteredShortDesc: Dispatch<SetStateAction<string>>;
}
function Details({
  enteredTitle,
  setEnteredTitle,
  enteredSku,
  setEnteredSku,
  selectedBrand,
  setSelectedBrand,
  selectedColors,
  setSelectedColors,
  enteredShortDesc,
  setEnteredShortDesc,
}: Props) {
  const firstColor = useRef<HTMLInputElement>(null);
  const secondColor = useRef<HTMLInputElement>(null);
  const thirdColor = useRef<HTMLInputElement>(null);

  const selectedBrandHandler = (event: SelectChangeEvent) => {
    setSelectedBrand(event.target.value);
  };

  const colorChangeHandler = (selectedColor: string, colorName: string) => {
    setSelectedColors((prevState) => ({
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
            <PFormLabel>product title</PFormLabel>
            <PTextField
              placeholder="Type Here"
              value={enteredTitle}
              onChange={(e) => setEnteredTitle(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <PFormLabel>SKU</PFormLabel>
            <PTextField
              placeholder="Type Here"
              value={enteredSku}
              onChange={(e) => setEnteredSku(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PFormControl size="small">
            <PFormLabel>brands</PFormLabel>
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
        <Grid item xs={12}>
          <PFormLabel>colors</PFormLabel>
          <ColorPickers
            color={selectedColors}
            colorChangeHandler={colorChangeHandler}
            colorClickHandler={colorClickHandler}
            firstColor={firstColor}
            secondColor={secondColor}
            thirdColor={thirdColor}
          />
        </Grid>
        <Grid item xs={12}>
          <PFormControl>
            <PFormLabel>short description</PFormLabel>
            <TextField
              placeholder="Type Here"
              multiline
              rows={4}
              sx={{ width: "100%" }}
              value={enteredShortDesc}
              onChange={(e) => setEnteredShortDesc(e.target.value)}
            />
          </PFormControl>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Details;
