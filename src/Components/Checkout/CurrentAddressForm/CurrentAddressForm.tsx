import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Typography,
} from "@mui/material";
import { CheckoutInput } from "../../../Styles/Checkout";
import { Country, State, City } from "country-state-city";
import { useState } from "react";
import { ICity, ICountry, IState } from "country-state-city/dist/lib/interface";
import InputLabel from "./InputLabel/InputLabel";
import PlaceSelect from "./PlaceSelect/PlaceSelect";

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
    setState(initialStateState);
    setCity(initialCityState);
    setCountryDropOpen(false);
    setStatesList(selectedStateList);
    setCountry(selectedCountry);
  };

  const stateSelectHandler = (isoCode: string) => () => {
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
          sx={{ width: { xs: "100%" } }}
          size="small"
          variant="standard"
        >
          <InputLabel name="Country" />
          <PlaceSelect
            state={country}
            setDropdownOpen={setCountryDropOpen}
            dropDownOpen={countryDropOpen}
            places={allCountries}
            selectHandler={countrySelectHandler}
            showPlaceholder={true}
            placeholder={"country"}
          />
        </FormControl>
      </Grid>
      {/* STATE INPUT */}

      <Grid item xs={12} sm={6}>
        <FormControl sx={{ width: { xs: "100%" } }} size="small">
          <InputLabel name="State/Province" />
          <PlaceSelect
            state={state}
            setDropdownOpen={setStateDropOpen}
            dropDownOpen={stateDropOpen}
            places={statesList}
            selectHandler={stateSelectHandler}
            showPlaceholder={!!country.name}
            placeholder={"state"}
          />
        </FormControl>
      </Grid>
      {/* CITY INPUT  */}

      <Grid item xs={12} sm={6}>
        <FormControl sx={{ width: { xs: "100%" } }} size="small">
          <InputLabel name="City" />
          <PlaceSelect
            state={city}
            setDropdownOpen={setCityDropOpen}
            dropDownOpen={cityDropOpen}
            places={citiesList}
            selectHandler={citySelectHandler}
            showPlaceholder={!!state.name}
            placeholder={"city"}
          />
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

      <Grid item xs={12}>
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

      <Grid item xs={12} sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{ height: "40px", width: { xs: "100%", sm: "150px" } }}
        >
          UPDATE ADDRESS
        </Button>
      </Grid>
    </Grid>
  );
}

export default CurrentAddressForm;
