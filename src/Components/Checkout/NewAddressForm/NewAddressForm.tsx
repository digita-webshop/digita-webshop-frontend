import { City, Country, State } from "country-state-city";
import { ICity, ICountry, IState } from "country-state-city/dist/lib/interface";
import { useState } from "react";
import { IAddress } from "../../../Services/Types/user";
import AddressForm from "../AddressForm/AddressForm";

interface Props {
  submitHandler?: (address: IAddress) => void;
}

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

function NewAddressForm({ submitHandler }: Props) {
  return (
    <></>
    // <AddressForm
    //   country={country}
    //   setCountryDropOpen={setCountryDropOpen}
    //   countryDropOpen={countryDropOpen}
    //   allCountries={allCountries}
    //   countrySelectHandler={countrySelectHandler}
    //   state={state}
    //   setStateDropOpen={setStateDropOpen}
    //   stateDropOpen={stateDropOpen}
    //   statesList={statesList}
    //   stateSelectHandler={stateSelectHandler}
    //   city={city}
    //   setCityDropOpen={setCityDropOpen}
    //   cityDropOpen={cityDropOpen}
    //   citiesList={citiesList}
    //   citySelectHandler={citySelectHandler}
    //   buttonText={"add"}
    //   submitHandler={submitHandler}
    // />
  );
}

export default NewAddressForm;
