import { Typography, Box } from "@mui/material";
import { TabsTitrStyle, ProductContentStyle, ProductTextStyle } from "../../styles";

const AboutBrand = ({ brand }: { brand: string }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={ProductContentStyle}>
        <Typography variant="body2" component="p" sx={ProductTextStyle}>
          Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>

        <Typography variant="h4" component="h2" sx={TabsTitrStyle}>
          Morbi sed sapien velit tincidunt, libero non semper vulputate
        </Typography>
        <Typography variant="body2" component="p" sx={ProductTextStyle}>
          Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>

        <Typography variant="h4" component="h2" sx={TabsTitrStyle}>
          Sed tincidunt, libero non semper vulputate, mauris
        </Typography>
        <Typography variant="body2" component="p" sx={ProductTextStyle}>
          Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutBrand;
