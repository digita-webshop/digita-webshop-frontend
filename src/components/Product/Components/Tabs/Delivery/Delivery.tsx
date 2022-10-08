import { Typography, Box } from "@mui/material";
import {
  TabsTitrStyle,
  ProductContentStyle,
  ProductTextStyle,
} from "../../../styles";

const Delivery = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={ProductContentStyle}>
        <Typography variant="body2" component="p" sx={ProductTextStyle}>
          Aliquam a tortor vel ligula auctor laoreet. Nullam dignissim, arcu a
          tristique dictum, felis diam convallis nunc, nec gravida tortor erat
          non lectus. Fusce odio erat, dapibus sit amet suscipit quis, ultricies
          nec lectus. Nulla a nunc posuere, facilisis metus ac, pulvinar urna.
          Curabitur iaculis mi imperdiet, pellentesque odio ac, vehicula lacus
        </Typography>
        <Typography variant="body2" component="p" sx={ProductTextStyle}>
          Aenean finibus nunc vitae lacus mollis tincidunt. In vitae rhoncus
          felis. Fusce convallis erat eget orci placerat, vitae porta odio
          faucibus. Mauris lorem felis, lobortis ac condimentum finibus, luctus
          eget ligula. Sed placerat dui nulla, in condimentum dui mollis
          pretium. Suspendisse semper turpis nec tempus gravida. Aenean a erat
          orci. Aliquam semper diam nec maximus cursus.
        </Typography>
        <Typography variant="h2" component="h2" sx={TabsTitrStyle}>
          General Shipping Policies
        </Typography>

        <Typography variant="body2" component="p" sx={ProductTextStyle}>
          Pellentesque ut purus ullamcorper, porttitor lectus vitae, vehicula
          nulla. Aenean vestibulum efficitur neque eu fermentum. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Integer placerat ultrices odio sed tempus. In scelerisque
          mattis neque, ac porttitor magna egestas eu. Nulla massa augue,
          placerat non egestas sit amet, faucibus ac est. Curabitur id urna
          lacus. Ut suscipit non nisl sit amet suscipit.
        </Typography>
      </Box>
    </Box>
  );
};

export default Delivery;
