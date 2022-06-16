import { Container, Grid, Box } from "@mui/material";
import SpecialHeader from "./Components/Header/SpecialHeader";
import SpecialItem from "./Components/SpecialItem/SpecialItem";
import { specialProducts } from "../../Services/Utils/Data/data";
import SupportItems from "./Components/SupportItems/SupportItems";
import SpecialCards from "./Components/SpecialCards/SpecialCards";

const Special = () => {
  return (
    <Container maxWidth={"lg"}>
      <SpecialHeader />

      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {specialProducts.map((item) => (
            <SpecialItem
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
  );
};

export default Special;
