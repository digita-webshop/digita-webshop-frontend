import { Edit } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const currentAddress = [
  {
    id: 1,
    field: "country",
    desc: "USA",
  },
  {
    id: 2,
    field: "state",
    desc: "california",
  },
  {
    id: 3,
    field: "city",
    desc: "los angeles",
  },
  {
    id: 4,
    field: "street",
    desc: "4001 Providence Lane",
  },
  {
    id: 5,
    field: "postcode",
    desc: "90017",
  },
];
type Props = {
  setDisplayCurrentAddress: Dispatch<SetStateAction<boolean>>;
};
function CurrentAddress({ setDisplayCurrentAddress }: Props) {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "common.digitaGrey7",
        padding: "15px",
        position: "relative",
      }}
      spacing={1}
    >
      {currentAddress.map((address) => (
        <Grid item xs={12}>
          <Box sx={{ display: "flex" }}>
            <Typography
              component={"h4"}
              sx={{
                textTransform: "capitalize",
                flexBasis: { xs: "50%", sm: "35%" },
                color: "common.digitaGrey",
              }}
            >
              {address.field}
            </Typography>
            <Typography
              component={"h6"}
              sx={{
                textTransform: "capitalize",
                flexBasis: { xs: "50%", sm: "65%" },
              }}
            >
              {address.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
      <Button
        sx={{
          color: "common.digitaRed",
          position: "absolute",
          right: "10px",
          bottom: "7px",
          "&:hover": { backgroundColor: "unset" },
        }}
        onClick={() => setDisplayCurrentAddress((prevState) => !prevState)}
      >
        Edit
        <Edit sx={{ fontSize: "15px", marginLeft: "4px  " }} />
      </Button>
    </Grid>
  );
}

export default CurrentAddress;
