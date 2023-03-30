import { Dispatch, SetStateAction } from "react";
import { FormControl, Grid, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { CardWrapper, PFormControl, PFormLabel, PTextField } from "styles/panel";
import ColorPickers from "./ColorPickers/ColorPickers";
import { productBrands } from "components/Brands/data";

interface Props {
  enteredTitle: string;
  setEnteredTitle: Dispatch<SetStateAction<string>>;
  enteredSku: string;
  setEnteredSku: Dispatch<SetStateAction<string>>;
  selectedBrand: string;
  setSelectedBrand: Dispatch<SetStateAction<string>>;
  selectedColors: string[];
  setSelectedColors: Dispatch<SetStateAction<string[]>>;
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
  const selectedBrandHandler = (event: SelectChangeEvent) => {
    setSelectedBrand(event.target.value);
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
            <PTextField placeholder="Type Here" value={enteredSku} onChange={(e) => setEnteredSku(e.target.value)} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PFormControl size="small">
            <PFormLabel>productBrands</PFormLabel>
            <Select variant="outlined" displayEmpty value={selectedBrand} onChange={selectedBrandHandler}>
              {productBrands.map(({ id, name }) => (
                <MenuItem key={id} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </PFormControl>
        </Grid>
        <Grid item xs={12}>
          <PFormLabel>colors</PFormLabel>
          <ColorPickers selectedColors={selectedColors} setSelectedColors={setSelectedColors} />
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
