import DatePicker from "react-horizontal-datepicker";
import { Box, Typography } from "@mui/material";

function ShippingDatePicker() {
  const selectedDay = (val: any) => {
    console.log(val);
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
      <DatePicker
        color="#f03637"
        getSelectedDay={selectedDay}
        shouldScroll={true}
        endDate={30}
      />
    </Box>
  );
}

export default ShippingDatePicker;
