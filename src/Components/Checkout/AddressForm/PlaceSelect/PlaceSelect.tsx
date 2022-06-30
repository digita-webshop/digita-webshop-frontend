import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box, Fade } from "@mui/material";
import { InputWrapper } from "../../../../Styles/Checkout";
import { ICity, ICountry, IState } from "country-state-city/dist/lib/interface";
import { Dispatch, SetStateAction } from "react";

type Props = {
  state: ICity | ICountry | IState;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
  dropDownOpen: boolean;
  places: any[];
  selectHandler: (code: string) => () => void;
  showPlaceholder: boolean;
  placeholder: string;
};

function PlaceSelect({
  state,
  setDropdownOpen,
  dropDownOpen,
  places,
  selectHandler,
  showPlaceholder,
  placeholder,
}: Props) {
  const property = placeholder === "city" ? "name" : "isoCode";

  const toggleHandler = () => {
    setDropdownOpen((prevState: any) => (showPlaceholder ? !prevState : false));
  };
  return (
    <InputWrapper>
      <Box className="input" onClick={toggleHandler}>
        <Box
          sx={{
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
            display: "-webkit-box",
            "-webkit-line-clamp": "1",
            textTransform: "capitalize",
            color: state.name ? "common.digitaBlack" : "common.digitaGrey3",
          }}
        >
          {state.name && state.name}
          {!state.name && showPlaceholder ? `select your ${placeholder}` : ""}
        </Box>
        <Box sx={{ display: "flex" }}>
          {dropDownOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        </Box>
      </Box>
      <Fade in={dropDownOpen}>
        <ul>
          {places.map((countryItem: any) => (
            <li
              value={countryItem.isoCode}
              onClick={selectHandler(countryItem[property])}
            >
              {countryItem.name}
            </li>
          ))}
        </ul>
      </Fade>
    </InputWrapper>
  );
}

export default PlaceSelect;
