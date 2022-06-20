import {Container} from "@mui/material";
import {Products, Special, Header, ShopByCategories} from "../../../Components";

import OurBlog from "../../../Components/OurBlog/OurBlog";
import WhatClientSay from "../../../Components/WhatClientSay/WhatClientSay";

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
            <WhatClientSay/>
        </>
    );
}

export default Home;
