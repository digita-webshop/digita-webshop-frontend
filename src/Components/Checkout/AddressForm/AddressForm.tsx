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
import { ICity, ICountry, IState } from "country-state-city/dist/lib/interface";
import { Dispatch, SetStateAction } from "react";

type Props = {
  country: ICountry;
  setCountryDropOpen: Dispatch<SetStateAction<boolean>>;
  countryDropOpen: boolean;
  allCountries: ICountry[];
  countrySelectHandler: (code: string) => () => void;
  state: IState;
  setStateDropOpen: Dispatch<SetStateAction<boolean>>;
  stateDropOpen: boolean;
  statesList: IState[];
  stateSelectHandler: (code: string) => () => void;
  city: ICity;
  setCityDropOpen: Dispatch<SetStateAction<boolean>>;
  cityDropOpen: boolean;
  citiesList: ICity[];
  citySelectHandler: (code: string) => () => void;
  buttonText: string;
};

function AddressForm({
  country,
  setCountryDropOpen,
  countryDropOpen,
  allCountries,
  countrySelectHandler,
  state,
  setStateDropOpen,
  stateDropOpen,
  statesList,
  stateSelectHandler,
  city,
  setCityDropOpen,
  cityDropOpen,
  citiesList,
  citySelectHandler,
  buttonText,
}: Props) {
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
          sx={{
            height: "40px",
            width: { xs: "100%", sm: "150px" },
            textTransform: "uppercase",
          }}
        >
          {buttonText} ADDRESS
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddressForm;
