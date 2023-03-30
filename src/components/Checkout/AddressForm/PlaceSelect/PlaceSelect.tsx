import { Dispatch, SetStateAction } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box, Fade } from "@mui/material";
import { InputWrapper } from "../../styles";
import { ICity, ICountry, IState } from "country-state-city/dist/lib/interface";

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
  const toggleHandler = () => {
    setDropdownOpen((prevState: any) => (showPlaceholder ? !prevState : false));
  };
  return (
    <InputWrapper>
      <Box className="input" onClick={toggleHandler}>
        <Box
          sx={{
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            textTransform: "capitalize",
            color: state.name ? "common.digitaBlack" : "common.digitaGrey3",
          }}
        >
          {state.name && state.name}
          {!state.name && showPlaceholder ? `select your ${placeholder}` : ""}
        </Box>
        <Box sx={{ display: "flex" }}>{dropDownOpen ? <ArrowDropUp /> : <ArrowDropDown />}</Box>
      </Box>
      <Fade in={dropDownOpen}>
        <ul>
          {places.map((item: any, index) => (
            <li key={index} value={item.name} onClick={selectHandler(item["name"])}>
              {item.name}
            </li>
          ))}
        </ul>
      </Fade>
    </InputWrapper>
  );
}

export default PlaceSelect;
