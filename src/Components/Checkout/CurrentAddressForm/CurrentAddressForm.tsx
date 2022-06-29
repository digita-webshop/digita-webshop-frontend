import {
  Box,
  Button,
  Fade,
  FormControl,
  FormLabel,
  Grid,
  Typography,
} from "@mui/material";
import { CheckoutInput, InputWrapper } from "../../../Styles/Checkout";
import { Country, State, City } from "country-state-city";
import { useState } from "react";
import { ICity, ICountry, IState } from "country-state-city/dist/lib/interface";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import InputLabel from "./InputLabel/InputLabel";

const initialCountryState = {
  isoCode: "",
  name: "",
  currency: "",
  flag: "",
  latitude: "",
  longitude: "",
  phonecode: "",
  timezones: [],
};
const initialStateState = {
  isoCode: "",
  name: "",
  countryCode: "",
  latitude: "",
  longitude: "",
};
const initialCityState = {
  countryCode: "",
  name: "",
  stateCode: "",
  latitude: "",
  longitude: "",
};

function CurrentAddressForm() {
  const [countryDropOpen, setCountryDropOpen] = useState(false);
  const [stateDropOpen, setStateDropOpen] = useState(false);
  const [cityDropOpen, setCityDropOpen] = useState(false);
  const [country, setCountry] = useState<ICountry>(initialCountryState);
  const [state, setState] = useState<IState>(initialStateState);
  const [city, setCity] = useState<ICity>(initialCityState);
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
    setCountryDropOpen(false);
    setStatesList(selectedStateList);
    setCountry(selectedCountry);
  };

  const stateSelectHandler = (isoCode: string) => () => {
    console.log(isoCode);
    const [selectedState] = allStates.filter(
      (item) => item.isoCode === isoCode
    );
    console.log(selectedState);
    const selectedCityList = allCities.filter(
      (item) =>
        item.stateCode === isoCode && item.countryCode === country.isoCode
    );
    setStateDropOpen(false);
    setState(selectedState);
    setCitiesList(selectedCityList);
  };

  const citySelectHandler = (cityName: string) => () => {
    const [selectedCity] = allCities.filter(
      (item) => item.name === cityName && item.countryCode === country.isoCode
    );
    setCityDropOpen(false);
    setCity(selectedCity);
  };

  return (
    <Grid container spacing={2}>
      {/* COUNTRY INPUT  */}
      <Grid item xs={12} sm={6}>
        <FormControl
          sx={{ width: { xs: "100%", sm: "200px" } }}
          size="small"
          variant="standard"
        >
          <InputLabel name="Country" />

          <InputWrapper>
            <Box
              className="input"
              onClick={() => setCountryDropOpen((prevState) => !prevState)}
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
      {/* STATE INPUT */}
      <Grid item xs={12} sm={6}>
        <FormControl sx={{ width: { xs: "100%", sm: "200px" } }} size="small">
          <InputLabel name="State" />
          <InputWrapper>
            <Box
              className="input"
              onClick={() => setStateDropOpen((prevState) => !prevState)}
            >
              <Box
                sx={{
                  color: state.name
                    ? "common.digitaBlack"
                    : "common.digitaGrey3",
                }}
              >
                {state.name && state.name}
                {!state.name && country.name ? "select your state" : ""}
              </Box>
              <Box sx={{ display: "flex" }}>
                {stateDropOpen ? <ArrowDropUp /> : <ArrowDropDown />}
              </Box>
            </Box>
            <Fade in={stateDropOpen}>
              <ul>
                {statesList.map((stateItem) => (
                  <li
                    value={stateItem.isoCode}
                    onClick={stateSelectHandler(stateItem.isoCode)}
                  >
                    {stateItem.name}
                  </li>
                ))}
              </ul>
            </Fade>
          </InputWrapper>
        </FormControl>
      </Grid>
      {/* CITY INPUT  */}

      <Grid item xs={12} sm={6}>
        <FormControl sx={{ width: { xs: "100%", sm: "200px" } }} size="small">
          <InputLabel name="City" />
          <InputWrapper>
            <Box
              className="input"
              onClick={() => setCityDropOpen((prevState) => !prevState)}
            >
              <Box
                sx={{
                  color: city.name
                    ? "common.digitaBlack"
                    : "common.digitaGrey3",
                }}
              >
                {city.name && city.name}
                {!city.name && state.name ? "select your city" : ""}
              </Box>
              <Box sx={{ display: "flex" }}>
                {cityDropOpen ? <ArrowDropUp /> : <ArrowDropDown />}
              </Box>
            </Box>
            <Fade in={cityDropOpen}>
              <ul>
                {citiesList.map((cityItem) => (
                  <li
                    value={cityItem.name}
                    onClick={citySelectHandler(cityItem.name)}
                  >
                    {cityItem.name}
                  </li>
                ))}
              </ul>
            </Fade>
          </InputWrapper>
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
