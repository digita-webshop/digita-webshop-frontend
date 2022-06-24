import React, {useState} from 'react';
import DynamicButton from "./DynamicButton/DynamicButton";
import {
    Box,
    Container,
} from "@mui/material";
import CartListTable from './Tables/CartListTable';
import CartTotalTable from "./Tables/CartTotalTable";
import CartUpdated from "./CartUpdated";

const ShoppingCart = () => {
    const [cartUpdated, setCartUpdated] = useState(false);

    const [cartList, setCartList] = useState([
        {
            image: 'https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-6.jpg',
            product: 'Microsoft Xbox One SP',
            price: '82.00',
            quantity: 4,
            total: 3,
        },
        {
            image: 'https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-6.jpg',
            product: 'Microsoft Xbox One SP',
            price: '82.00',
            quantity: 1,
            total: 3,
        },
        {
            image: 'https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-7.jpg',
            product: 'Microsoft Xbox One S Blue Grey',
            price: '82.00',
            quantity: 1,
            total: 1,
        }
    ])

    return (
        <Container sx={{padding: '50px 15px'}}>
            {cartUpdated && <CartUpdated/>}
            {cartList.length === 0 ?
                <Box sx={{padding: '35px 0 50px'}}>
                    <DynamicButton icon={true} title={'Return To Shop'} href={'/'}/>
                </Box> :
                <Box sx={{display: 'flex'}}>
                    <CartListTable cartList={cartList} setCartList={setCartList}/>
                    <CartTotalTable cartList={cartList}/>
                </Box>}
        </Container>
    );
};

export default ShoppingCart;