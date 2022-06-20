import {Container} from "@mui/material";
import {Products, Special, Header, ShopByCategories} from "../../../Components";
import OurBlog from "../../../Components/OurBlog/OurBlog";
import WhatClientSay from "../../../Components/WhatClientSay/WhatClientSay";

function Home() {
    return (
        <>
            <Header/>
            {/*<Container maxWidth={"xl"}>*/}
            {/*    <Products/>*/}
            {/*</Container>*/}
            <ShopByCategories/>
            {/*<Container maxWidth={"xl"}>*/}
            {/*    <Special/>*/}
            {/*</Container>*/}
            <WhatClientSay/>
            <Container maxWidth={"xl"}>
                <OurBlog/>
            </Container>
        </>
    );
}

export default Home;
