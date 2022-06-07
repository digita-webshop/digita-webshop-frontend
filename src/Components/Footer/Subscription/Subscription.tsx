import React from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  InputBase,
  Box,
} from "@mui/material";
import { Facebook, Twitter, Google, Pinterest } from "@mui/icons-material";

const icons = [
  {
    icon: (
      <Facebook
        sx={{
          height: "1rem",
          width: "1rem",
          cursor: "pointer",
          "&:hover": { opacity: "0.7" },
        }}
      />
    ),
    color: "#3b5998",
  },
  {
    icon: (
      <Twitter
        sx={{
          height: "1rem",
          width: "1rem",
          cursor: "pointer",
          "&:hover": { opacity: "0.7" },
        }}
      />
    ),
    color: "#1da1f2",
  },
  {
    icon: (
      <Google
        sx={{
          height: "1rem",
          width: "1rem",
          cursor: "pointer",
          "&:hover": { opacity: "0.7" },
        }}
      />
    ),
    color: "#dd4b39",
  },
  {
    icon: (
      <Pinterest
        sx={{
          height: "1rem",
          width: "1rem",
          cursor: "pointer",
          "&:hover": { opacity: "0.7" },
        }}
      />
    ),
    color: "#bd081c",
  },
];

function Subscription() {
  return (
    <Grid
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      p="1rem"
    >
      <Typography variant="h6" mb={2.5} color="white">
        COMPANY INFO
      </Typography>
      <Typography variant="body1" mb={2.5} color="lightslategray">
        Subscribe to the weekly newsletter for all the latest updates & get a
        10% off bill offers.
      </Typography>
      <Grid width="100%">
        <FormControl
          sx={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <InputBase
            sx={{
              flex: "2",
              padding: "0.5rem",
              height: "3.4rem",
              backgroundColor: "#fff",
              border: "3px solid #fff",
            }}
            placeholder="Enter your email"
            required
          ></InputBase>
          <Button
            sx={{ flex: 1, "&:hover": { backgroundColor: "#333" } }}
            variant="contained"
            color="error"
          >
            Subscribe
          </Button>
        </FormControl>
      </Grid>
      <Typography
        component={"span"}
        mt={1.5}
        variant="body1"
        mb={2.5}
        color="lightslategray"
      >
        <Grid display="flex" justifyContent="space-around" alignItems="center">
          Or Follow us:
          {"  "}
          {icons.map((icon, index) => (
            <Box
              key={index}
              sx={{
                height: "1.6rem",
                width: "1.6rem",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                color: "#fff",
                margin: "0 0.2rem",
              }}
              bgcolor={icon.color}
            >
              {icon.icon}
            </Box>
          ))}
        </Grid>
      </Typography>
    </Grid>
  );
}

export default Subscription;
