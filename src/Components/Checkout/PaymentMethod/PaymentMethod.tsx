import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Box, RadioGroup } from "@mui/material";
import {
  accordionDetailStyles,
  CustomRadio,
  paymentTitleStyles,
} from "../../../Styles/Checkout";
import IMAGES from "../../../Assets/Images";

function PaymentMethod() {
  const [expanded, setExpanded] = useState("cash");

  const accordionHandler = (panel: string) => () => {
    setExpanded(panel);
  };

  return (
    <Box sx={{ backgroundColor: "common.digitaGrey7", paddingY: "20px" }}>
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
        <AccordionDetails sx={accordionDetailStyles}>
          <Typography component={"span"}>
            Pay with cash upon delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "common.digitaGrey7",
          "&.MuiAccordion-root:before": {
            display: "none",
          },
        }}
        expanded={expanded === "paypal"}
        onChange={accordionHandler("paypal")}
      >
        <AccordionSummary
          expandIcon={
            <RadioGroup value={expanded}>
              <CustomRadio value={"paypal"} />
            </RadioGroup>
          }
          sx={{
            flexDirection: "row-reverse",
            img: { width: "20%" },
            alignItems: "center",
            "& .MuiAccordionSummary-content": {
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography sx={paymentTitleStyles}>PayPal</Typography>
            <Typography
              sx={{
                color: "common.digitaRed",
                fontWeight: 600,
                marginLeft: "10px",
              }}
            >
              What is Paypal?
            </Typography>
          </Box>
          <img src={`${IMAGES.paypal}`} alt="paypal" />
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailStyles}>
          <Typography component={"span"}>
            Pay via PayPal; you can pay with your credit card if you don’t have
            a PayPal account.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default PaymentMethod;
