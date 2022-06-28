import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { CheckoutInput } from "../../../Styles/Checkout";
import { Country, State, City } from "country-state-city";
import { useEffect, useState } from "react";

function CurrentAddressForm() {
  const [country, setCountry] = useState<any>({
    isoCode: "US",
    name: "United States",
  });
  const [state, setState] = useState<any>({ isoCode: "", name: "" });
  const [city, setCity] = useState<any>({
    countryCode: "",
    name: "",
    stateCode: "",
  });
  const [statesList, setStatesList] = useState<any>([]);
  const [citiesList, setCitiesList] = useState<any>([]);

  const allCountries = Country.getAllCountries();
  const allStates = State.getAllStates();
  const allCities = City.getAllCities();

  const countrySelectHandler = (event: SelectChangeEvent) => {
    const [selectedCountry] = allCountries.filter(
      (item) => item.isoCode === event.target.value
    );
    const selectedStateList = allStates.filter(
      (item) => item.countryCode === event.target.value
    );
    setStatesList(selectedStateList);
    setCountry(selectedCountry);
  };
  const stateSelectHandler = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    const [selectedState] = allStates.filter(
      (item) => item.isoCode === event.target.value
    );
    console.log(selectedState);
    const selectedCityList = allCities.filter(
      (item) =>
        item.stateCode === event.target.value &&
        item.countryCode === country.isoCode
    );
    console.log(selectedCityList);
    setState(selectedState);
    setCitiesList(selectedCityList);
  };
  const citySelectHandler = (event: SelectChangeEvent) => {
    const [selectedCity] = allCities.filter(
      (item) =>
        item.name === event.target.value && item.countryCode === country.isoCode
    );
    console.log(selectedCity);
    setCity(selectedCity);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <FormControl sx={{ width: { xs: "100%", sm: "200px" } }} size="small">
          <Select
            variant="outlined"
            displayEmpty
            value={country.isoCode}
            onChange={countrySelectHandler}
          >
            {allCountries.map((countryItem) => (
              <MenuItem value={countryItem.isoCode}>
                {countryItem.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl sx={{ width: { xs: "100%", sm: "200px" } }} size="small">
          <Select
            variant="outlined"
            displayEmpty
            value={state.isoCode}
            onChange={stateSelectHandler}
          >
            {statesList.map((stateItem: any) => (
              <MenuItem value={stateItem.isoCode}>{stateItem.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl sx={{ width: { xs: "100%", sm: "200px" } }} size="small">
          <Select
            variant="outlined"
            displayEmpty
            value={city.name}
            onChange={citySelectHandler}
          >
            {citiesList.map((cityItem: any) => (
              <MenuItem value={cityItem.name}>{cityItem.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <FormLabel
            color="primary"
            sx={{
              fontSize: "14px",
              color: "common.digitaGrey",
              display: "flex",
            }}
          >
            Town / City
            <Typography
              component={"span"}
              sx={{ color: "#f03637", marginLeft: "2px" }}
            >
              *
            </Typography>
          </FormLabel>
          <CheckoutInput placeholder="" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <FormLabel
            color="primary"
            sx={{
              fontSize: "14px",
              color: "common.digitaGrey",
              display: "flex",
            }}
          >
            street
            <Typography
              component={"span"}
              sx={{ color: "#f03637", marginLeft: "2px" }}
            >
              *
            </Typography>
          </FormLabel>
          <CheckoutInput placeholder="" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <FormLabel
            color="primary"
            sx={{
              fontSize: "14px",
              color: "common.digitaGrey",
              display: "flex",
            }}
          >
            postcode
            <Typography
              component={"span"}
              sx={{ color: "#f03637", marginLeft: "2px" }}
            >
              *
            </Typography>
          </FormLabel>
          <CheckoutInput placeholder="" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "right" }}>
        <Button variant="contained">UPDATE ADDRESS</Button>
      </Grid>
    </Grid>
  );
}

export default CurrentAddressForm;
