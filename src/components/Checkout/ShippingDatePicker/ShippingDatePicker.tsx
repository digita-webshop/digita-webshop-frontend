import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-horizontal-datepicker";
import { Box, Typography } from "@mui/material";
interface Props {
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

function ShippingDatePicker({ setSelectedDate }: Props) {
  const selectedDay = (val: any) => {
    setSelectedDate(val);
  };
  return (
    <Box
      sx={{
        textAlign: "center",
        fontFamily: "sans-serif",
        "& .Datepicker--MonthYearLabel": {
          color: "#f03637",
        },
        "& .Datepicker--button-prev, .Datepicker--button-next": {
          backgroundColor: "#f03637",
        },
        "& .DateDayItem--selected": {
          borderColor: "#f03637",
          color: "#f03637",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          fontSize: "14px",
          color: "common.digitaGrey",
          marginY: "10px",
        }}
      >
        <Typography>Order submission date</Typography>
      </Box>
      <DatePicker color="#f03637" getSelectedDay={selectedDay} shouldScroll={true} endDate={30} />
    </Box>
  );
}

export default ShippingDatePicker;
