import { IAddress, IUser } from "@/types/user";
import { Edit } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setDisplayCurrentAddress: Dispatch<SetStateAction<boolean>>;
  currentAddress: IAddress | null;
};
function CurrentAddress({ setDisplayCurrentAddress, currentAddress }: Props) {
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
      {currentAddress &&
        Object.entries(currentAddress)
          .filter(
            ([key, value]) =>
              key !== "_id" && key !== "updatedAt" && key !== "createdAt"
          )
          .map(([key, value]) => (
            <Grid key={value} item xs={12}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  component={"h4"}
                  sx={{
                    textTransform: "capitalize",
                    flexBasis: { xs: "50%", sm: "35%" },
                    color: "common.digitaGrey",
                  }}
                >
                  {key}
                </Typography>
                <Typography
                  component={"h6"}
                  sx={{
                    textTransform: "capitalize",
                    flexBasis:
                      key === "postalCode" ? "unset" : { xs: "50%", sm: "65%" },
                    wordBreak: "break-all",
                    width:
                      key === "postalCode" ? { xs: "35%", sm: "40%" } : "unset",
                  }}
                >
                  {value}
                </Typography>
              </Box>
            </Grid>
          ))}
      {!currentAddress && (
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              component={"h4"}
              sx={{
                textTransform: "capitalize",
                color: "common.digitaGrey",
                marginBottom: "40px",
              }}
            >
              you don't have any addresses yet, please first add an address
            </Typography>
          </Box>
        </Grid>
      )}
      <Button
        sx={{
          color: "common.digitaRed",
          textTransform: "capitalize",
          position: "absolute",
          right: "10px",
          bottom: "7px",
          "&:hover": { backgroundColor: "unset" },
        }}
        onClick={() => setDisplayCurrentAddress((prev) => !prev)}
      >
        {currentAddress ? "edit" : "add"}
        <Edit sx={{ fontSize: "15px", marginLeft: "4px  " }} />
      </Button>
    </Grid>
  );
}

export default CurrentAddress;
