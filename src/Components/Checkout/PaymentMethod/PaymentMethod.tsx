import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Box, Radio, RadioGroup } from "@mui/material";
import { CustomRadio, paymentTitleStyles } from "../../../Styles/Checkout";

function PaymentMethod() {
  const [expanded, setExpanded] = useState("cash");

  const accordionHandler = (panel: string) => () => {
    setExpanded(panel);
  };

  return (
    <Box sx={{ backgroundColor: "common.digitaGrey7" }}>
      <Accordion
        sx={{ backgroundColor: "common.digitaGrey7" }}
        expanded={expanded === "cash"}
        onChange={accordionHandler("cash")}
      >
        <AccordionSummary
          expandIcon={
            <RadioGroup value={expanded}>
              <CustomRadio value={"cash"} />
            </RadioGroup>
          }
          sx={{ flexDirection: "row-reverse" }}
        >
          <Typography sx={paymentTitleStyles}>Cash on delivery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Pay with cash upon delivery.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ backgroundColor: "common.digitaGrey7" }}
        expanded={expanded === "paypal"}
        onChange={accordionHandler("paypal")}
      >
        <AccordionSummary
          expandIcon={
            <RadioGroup value={expanded}>
              <CustomRadio value={"paypal"} />
            </RadioGroup>
          }
          sx={{ flexDirection: "row-reverse" }}
        >
          <Typography sx={paymentTitleStyles}>PayPal</Typography>
          <Typography>What is Paypal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Pay via PayPal; you can pay with your credit card if you don’t have
            a PayPal account.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default PaymentMethod;
