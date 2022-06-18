import { Box } from "@mui/material";
import {posterStyle} from "../../../../Styles/About";

const Poster = () => {
  return (
    <Box
      component="img"
      sx={posterStyle}
      src="https://demo-61.woovinapro.com/wp-content/uploads/2022/04/about-1.jpg"
    />
  );
};

export default Poster;
