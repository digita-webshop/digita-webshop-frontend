import { Box } from "@mui/material";
import iconLoading from "@/assets/Images/icon-loading.png";
import Slider from "./Slider/Slider";
import { boxStyles, Title, WrapperBox } from "./styles";
import { useInView } from "react-intersection-observer";

function ShopByCategories() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <WrapperBox className={inView ? "slideInFromBottom" : ""} ref={ref}>
      <Box sx={boxStyles}>
        <Title variant="h2">Shop By Categories</Title>
        <img className="loading" src={iconLoading} alt="loading" />
        <Slider />
      </Box>
    </WrapperBox>
  );
}

export default ShopByCategories;
