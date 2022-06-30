import { Country, State, City } from "country-state-city";
import { useState } from "react";
import { ICity, ICountry, IState } from "country-state-city/dist/lib/interface";
import AddressForm from "../AddressForm/AddressForm";

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
    <AddressForm
      country={country}
      setCountryDropOpen={setCountryDropOpen}
      countryDropOpen={countryDropOpen}
      allCountries={allCountries}
      countrySelectHandler={countrySelectHandler}
      state={state}
      setStateDropOpen={setStateDropOpen}
      stateDropOpen={stateDropOpen}
      statesList={statesList}
      stateSelectHandler={stateSelectHandler}
      city={city}
      setCityDropOpen={setCityDropOpen}
      cityDropOpen={cityDropOpen}
      citiesList={citiesList}
      citySelectHandler={citySelectHandler}
      buttonText={"update"}
    />
  );
}

export default CurrentAddressForm;
