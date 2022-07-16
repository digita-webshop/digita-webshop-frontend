import {Box, Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React, {Dispatch} from "react";
import DynamicButton from "../DynamicButton/DynamicButton";
import CartItem from "../Types/CartItemType";
import store from "../../../redux/store";
import {useSelector} from "react-redux";
import actions from "../../../redux/actions";
import {UpdateCart} from "../ShoppingCart";

export enum UpdateType {
    Remove = 1,
    Update,
}

type Props = {
    item?: CartItem
    type?: UpdateType;
    setCartUpdated: React.Dispatch<React.SetStateAction<UpdateCart | null>>;
}

const CartUpdated = ({item, type, setCartUpdated}: Props) => {

    // @ts-ignore todo fix this later
    const cartList = useSelector(state => state.cartReducer.cartList);

    const handleUndo = () => {
        setCartUpdated(null)
        // @ts-ignore todo fix this later
        store.dispatch(actions.cart.setCart([...cartList, item as CartItem]));
        // @ts-ignore todo fix this later
        store.dispatch(actions.cart.setQuantity([...cartList, item as CartItem]));
    }

    return <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        margin: '0 0 30px',
        border: '1px solid #ddd'
    }}>
        <CheckIcon sx={{
            fontSize: '0.9rem',
            marginRight: '10px',
            color: '#ddd'
        }}/>
        <Typography sx={{
            fontSize: '14px',
            color: '#777'

        }}>
            {type === UpdateType.Remove ? `${`“${item?.product}“ removed.`}` : 'Cart updated.'}
        </Typography>
        {type === UpdateType.Remove && <Box sx={{marginLeft: 'auto'}}>
            <DynamicButton
                action={handleUndo}
                title={'Undo?'}
                classes={{
                    background: '#f03637',
                    padding: '6px 18px'
                }
                }/>
        </Box>}
    </Box>
}

export default CartUpdated;
