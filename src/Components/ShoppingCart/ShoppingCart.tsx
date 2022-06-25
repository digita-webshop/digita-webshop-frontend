import React, {useEffect, useState} from 'react';
import DynamicButton from "./DynamicButton/DynamicButton";
import {Box, Container,} from "@mui/material";
import CartListTable from './Tables/CartListTable';
import CartTotalTable from "./Tables/CartTotalTable";
import CartUpdated, {UpdateType} from "./CartUpdated";
import CartItem from "./Types/CartItemType";

export type UpdateCart = {
    item?: CartItem
    type?: UpdateType
}

const ShoppingCart = () => {

    const [cartUpdated, setCartUpdated] = useState<UpdateCart | null>(null);
    const [values, setValues] = useState<number[]>([])
    const [cartList, setCartList] = useState([
        {
            id: 1,
            image: 'https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-6.jpg',
            product: 'Microsoft Xbox One SP',
            price: 5,
            quantity: 4,
            total: 3,
        },
        {
            id: 2,
            image: 'https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-6.jpg',
            product: 'Microsoft Xbox One SP',
            price: 4,
            quantity: 1,
            total: 3,
        },
        {
            id: 3,
            image: 'https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-7.jpg',
            product: 'Microsoft Xbox One S Blue Grey',
            price: 1,
            quantity: 1,
            total: 1,
        }
    ])

    useEffect(() => {
        const temp: number[] = []
        cartList.map((item) => {
            temp.push(item.quantity)
        })
        setValues(temp)
    }, [])

    const total = cartList.reduce((acc, curr) => {
        acc += curr.quantity * curr.price;
        return acc;
    }, 0);

    return (
        <Container sx={{padding: '50px 15px'}}>
            {cartUpdated && <CartUpdated item={cartUpdated.item} type={cartUpdated.type} setCartList={setCartList}/>}
            {cartList.length === 0 ?
                <Box sx={{padding: '35px 0 50px'}}>
                    <DynamicButton icon={true} title={'Return To Shop'} href={'/'}/>
                </Box> :
                <Box sx={{display: 'flex'}}>
                    <CartListTable cartList={cartList}
                                   setCartList={setCartList}
                                   values={values} setValues={setValues}
                                   setCartUpdated={setCartUpdated}/>
                    <CartTotalTable total={total}/>
                </Box>}
        </Container>
    );
};

export default ShoppingCart;