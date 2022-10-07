import { useEffect, useState, FormEvent } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Typography,
} from "@mui/material";
import { CheckoutInput } from "../../../Styles/Checkout";
import InputLabel from "./InputLabel/InputLabel";
import PlaceSelect from "./PlaceSelect/PlaceSelect";
import { IAddress } from "../../../Services/Types/user";
import { City, Country, State } from "country-state-city";
import { ICity, ICountry, IState } from "country-state-city/dist/lib/interface";
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

type Props = {
  addAddress: (address: IAddress, mode: string) => void;
  buttonText: string;
  currentAddress: IAddress | null;
};

function AddressForm({ addAddress, buttonText, currentAddress }: Props) {
  const [countryDropOpen, setCountryDropOpen] = useState(false);
  const [stateDropOpen, setStateDropOpen] = useState(false);
  const [cityDropOpen, setCityDropOpen] = useState(false);
  const [country, setCountry] = useState<ICountry>(initialCountryState);
  const [state, setState] = useState<IState>(initialStateState);
  const [city, setCity] = useState<ICity>(initialCityState);
  const [statesList, setStatesList] = useState<IState[]>([]);
  const [citiesList, setCitiesList] = useState<ICity[]>([]);
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredPostCode, setEnteredPostCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const allCountries = Country.getAllCountries();
  const allStates = State.getAllStates();
  const allCities = City.getAllCities();
  let selectedCountry: ICountry | undefined = country;

  const countrySelectHandler = (name: string) => () => {
    if (name === "") return;
    selectedCountry = allCountries.find((item) => item.name === name);
    const selectedStateList = allStates.filter(
      (item) => item.countryCode === selectedCountry?.isoCode
    );
    let selectedCityList: any = [];
    if (!selectedStateList) {
      selectedCityList = allCities.filter(
        (item) => item.countryCode === selectedCountry?.isoCode
      );
    }
    setState(initialStateState);
    setCity(initialCityState);
    setCountryDropOpen(false);
    setCitiesList(selectedCityList);
    setStatesList(selectedStateList);
    setCountry(selectedCountry || initialCountryState);
  };

  const stateSelectHandler = (name: string) => () => {
    const selectedState = allStates.find((item) => item.name === name);
    const selectedCityList = allCities.filter(
      (item) =>
        item.stateCode === selectedState?.isoCode &&
        item.countryCode === selectedCountry?.isoCode
    );
    setStateDropOpen(false);
    setState(selectedState || initialStateState);
    setCitiesList(selectedCityList);
  };

  const citySelectHandler = (cityName: string) => () => {
    const selectedCity = allCities.find(
      (item) =>
        item.name === cityName && item.countryCode === selectedCountry?.isoCode
    );

    setCityDropOpen(false);
    setCity(selectedCity || initialCityState);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (enteredPostCode.trim().length < 10) {
      setErrorMessage("your post code must contain at least 10 numbers");
      return;
    }
    const address: IAddress = {
      country: country?.name,
      state: state?.name,
      city: city?.name,
      postalCode: enteredPostCode,
      street: enteredStreet,
    };
    if (currentAddress) {
      address["_id"] = currentAddress?._id;
    }

    addAddress(address, buttonText);
  };
  useEffect(() => {
    if (currentAddress) {
      countrySelectHandler(currentAddress.country)();
      stateSelectHandler(currentAddress.state)();
      citySelectHandler(currentAddress.city)();
      setEnteredStreet(currentAddress.street);
      setEnteredPostCode(currentAddress.postalCode);
    }
  }, []);
  return (
    <Grid container spacing={2} component={"form"} onSubmit={submitHandler}>
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
            showPlaceholder={!!country?.name}
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
            showPlaceholder={!!country?.name}
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
          <CheckoutInput
            value={enteredPostCode}
            onChange={(e) => setEnteredPostCode(e.target.value)}
            placeholder=""
          />
          {errorMessage && (
            <Typography
              sx={{ color: "#f03637", fontSize: "14px", fontWeight: 500 }}
            >
              {errorMessage}
            </Typography>
          )}
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
          <CheckoutInput
            value={enteredStreet}
            onChange={(e) => setEnteredStreet(e.target.value)}
            placeholder=""
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{
            height: "40px",
            width: { xs: "100%", sm: "150px" },
            textTransform: "uppercase",
          }}
          type="submit"
        >
          {buttonText} ADDRESS
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddressForm;
