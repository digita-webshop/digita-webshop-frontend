import {Container} from "@mui/material";
import {Products, Special, Header, ShopByCategories} from "../../../Components";

function Home() {
    return (
        <>
            <Header/>
            <Container maxWidth={"xl"}>
                <Products/>
            </Container>
            <ShopByCategories/>
            <Container maxWidth={"xl"}>
                <Special/>
            </Container>
        </>
    );
}

export default Home;
