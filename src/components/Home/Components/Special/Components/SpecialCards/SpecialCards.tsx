import SpecialCard from "../SpecialCard/SpecialCard";
import { Grid } from "@mui/material";
import { specialEdition } from "../../data";

const SpecialCards = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ marginTop: "1rem" }}>
        {specialEdition.map((item, index) => (
          <SpecialCard
            key={index}
            id={index}
            title={item.title}
            name={item.name}
            image={item.image}
          />
        ))}
      </Grid>
    </>
  );
};

export default SpecialCards;
