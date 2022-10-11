import { FormLabel, Typography } from "@mui/material";

function InputLabel({ name }: { name: string }) {
  return (
    <FormLabel
      color="primary"
      sx={{
        fontSize: "14px",
        color: "common.digitaGrey",
        display: "flex",
      }}
    >
      {name}
      <Typography component={"span"} sx={{ color: "#f03637", marginLeft: "2px" }}>
        *
      </Typography>
    </FormLabel>
  );
}

export default InputLabel;
