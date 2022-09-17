import {CloseRounded} from "@mui/icons-material";
import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
import CartItem from "../../../../Components/ShoppingCart/Types/CartItemType";
import {handleRowDelete} from "../../../../Components/ShoppingCart/Services";
import {GetAllCartItemsResponse, useGetAllCartItemQuery} from "../../../../features/cart/cartApi";

type Anchor = "left" | "right";
type ShopDrawerProps = {
    displayDrawer: { right: boolean; left: boolean };
    toggleDrawer: (anchor: Anchor, open: boolean) => () => void;
};

function ShopDrawer({displayDrawer, toggleDrawer}: ShopDrawerProps) {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.authReducer.user);
    const [cartList, setCartList] = useState<GetAllCartItemsResponse | undefined>(undefined);
    const {data: cartItems, isLoading, isError} = useGetAllCartItemQuery();

    useEffect(() => {
        if (user) {
            setCartList(cartItems)
        } else {
            const localCartList = localStorage.getItem('cartList') || ''
            setCartList(JSON.parse(localCartList))
        }
    }, [user, cartItems])

    console.log('zzz cartItems',cartItems)

    const subtotal = cartList?.data?.reduce((acc: number, curr: CartItem) => {
        acc += curr.quantity * curr.price;
        return acc;
    }, 0);

    if (cartList?.data?.length === 0) {
        return <></>
    }

    return (
        <Drawer
            anchor="right"
            open={displayDrawer["right"]}
            onClose={toggleDrawer("right", false)}
        >
            <Box padding={2} position={"relative"}>
                <Box
                    position={"absolute"}
                    right={4}
                    top={6}
                    sx={{cursor: "pointer"}}
                    onClick={toggleDrawer("right", false)}
                >
                    <CloseRounded fontSize="large" color="secondary"/>
                </Box>
                <Box textAlign={"center"} marginBottom={2}>
                    <Typography variant="h6" color="primary" fontWeight={600}>
                        CART
                    </Typography>
                    <Divider
                        sx={{
                            width: "40px",
                            marginX: "auto",
                            marginTop: "10px",
                            borderBottomWidth: "2px",
                        }}
                    />
                </Box>
                <Divider/>
                <List sx={{maxHeight: "360px", overflow: "auto"}}>
                    {cartList?.data?.map((item: CartItem) => {
                        return <ListItem key={item.id} disableGutters>
                            <img
                                src="https://demo-61.woovinapro.com/wp-content/uploads/2018/09/product-16-330x330.jpg"
                                alt="product"
                                width={75}
                                height={75}
                            />
                            <ListItemText sx={{marginLeft: "16px", marginRight: "40px"}}>
                                <Typography variant="body2" color={"primary"}>
                                    {item.product}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                    }}
                                >
                                    <Typography variant="subtitle1" color={"secondary"}>
                                        {item.quantity} x
                                    </Typography>
                                    <Typography variant="body2" color={"primary"}>
                                        {item.price.toFixed(2)}
                                    </Typography>
                                </Box>
                            </ListItemText>
                            <ListItemIcon>
                                <Box>
                                    <CloseRounded
                                        onClick={() => handleRowDelete(item.id)}
                                        sx={{
                                            border: "1px solid black",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            padding: "3px",
                                            "&:hover": {
                                                border: "1px solid red",
                                                color: "red",
                                            },
                                            cursor: "pointer",
                                        }}
                                    />
                                </Box>
                            </ListItemIcon>
                        </ListItem>
                    })}
                    <Divider/>
                </List>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "13px",
                    }}
                >
                    <Typography variant="subtitle2" color={"secondary"} fontWeight={400}>
                        SUBTOTAL:
                    </Typography>
                    <Typography variant="subtitle2" color={"primary"}>
                        {subtotal?.toFixed(2)}
                    </Typography>
                </Box>
                <Divider/>
                <Box
                    sx={{
                        display: "flex",
                        paddingY: "20px",
                        justifyContent: "space-between",
                        gap: "10px",
                    }}
                >
                    <Button
                        variant="contained"
                        fullWidth={true}
                        color="error"
                        sx={{
                            "&:hover": {backgroundColor: "#333333"},
                        }}
                        onClick={() => {
                            toggleDrawer("right", false)();
                            navigate("/cart");
                        }}
                    >
                        VIEW CARD
                    </Button>
                    <Button variant="contained" fullWidth={true}>
                        CHECKOUT
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
}

export default ShopDrawer;
