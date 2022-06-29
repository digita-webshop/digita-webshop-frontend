import {
  Box,
  Button,
  Fade,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { CheckoutInput, InputWrapper } from "../../../Styles/Checkout";
import { Country, State, City } from "country-state-city";
import { useEffect, useState } from "react";
import { ICity, ICountry, IState } from "country-state-city/dist/lib/interface";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function CurrentAddressForm() {
  const [countryDropOpen, setCountryDropOpen] = useState(false);
  const [country, setCountry] = useState<ICountry>({
    isoCode: "",
    name: "",
    currency: "",
    flag: "",
    latitude: "",
    longitude: "",
    phonecode: "",
    timezones: [],
  });
  const [state, setState] = useState<IState>({
    isoCode: "",
    name: "",
    countryCode: "",
    latitude: "",
    longitude: "",
  });
  const [city, setCity] = useState<ICity>({
    countryCode: "",
    name: "",
    stateCode: "",
    latitude: "",
    longitude: "",
  });
  const [statesList, setStatesList] = useState<IState[]>([]);
  const [citiesList, setCitiesList] = useState<ICity[]>([]);

  const allCountries = Country.getAllCountries();
  const allStates = State.getAllStates();
  const allCities = City.getAllCities();

  const countrySelectHandler = (isoCode: string) => () => {
    if (isoCode === "") return;
    const [selectedCountry] = allCountries.filter(
      (item) => item.isoCode === isoCode
    );
    const selectedStateList = allStates.filter(
      (item) => item.countryCode === isoCode
    );
    console.log(selectedCountry);
    setCountryDropOpen(false);
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
        <FormControl
          sx={{ width: { xs: "100%", sm: "200px" } }}
          size="small"
          variant="standard"
        >
          <FormLabel
            color="primary"
            sx={{
              fontSize: "14px",
              color: "common.digitaGrey",
              display: "flex",
            }}
          >
            Country
            <Typography
              component={"span"}
              sx={{ color: "#f03637", marginLeft: "2px" }}
            >
              *
            </Typography>
          </FormLabel>

          <InputWrapper>
            <Box
              className="input"
              onClick={() => setCountryDropOpen(!countryDropOpen)}
            >
              <Box
                sx={{
                  color: country.name
                    ? "common.digitaBlack"
                    : "common.digitaGrey3",
                }}
              >
                {country.name ? country.name : "select your country"}
              </Box>
              <Box sx={{ display: "flex" }}>
                {countryDropOpen ? <ArrowDropUp /> : <ArrowDropDown />}
              </Box>
            </Box>
            <Fade in={countryDropOpen}>
              <ul>
                {allCountries.map((countryItem) => (
                  <li
                    value={countryItem.isoCode}
                    onClick={countrySelectHandler(countryItem.isoCode)}
                  >
                    {countryItem.name}
                  </li>
                ))}
              </ul>
            </Fade>
          </InputWrapper>
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
