import { Container, Grid, Box } from "@mui/material";
import SpecialHeader from "./Components/Header/SpecialHeader";
import SpecialItem from "./Components/SpecialItem/SpecialItem";
import { specialProducts } from "../../Services/Utils/Data/data";
import SupportItems from "./Components/SupportItems/SupportItems";
import SpecialCards from "./Components/SpecialCards/SpecialCards";
import { useInView } from "react-intersection-observer";

const Special = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        position: "relative",
        backgroundColor: "white",
        marginY: "-120px",
        width: "96%",
        zIndex: "10",
      }}
      ref={ref}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          overflow: "hidden",
          paddingY: "20px",
          animation: (theme) =>
            inView
              ? `slideInFromBottom 1000ms ${theme.transitions.easing.easeInOut}`
              : "",
        }}
      >
        <SpecialHeader />

        <Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {specialProducts.map((item) => (
              <SpecialItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                offPrice={item.offPrice}
                price={item.price}
                starRate={item.starRate}
              />
            ))}
          </Grid>
        </Box>
        <SpecialCards />
        <SupportItems />
      </Container>
    </Container>
  );
};

export default Special;
