import {Box, Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React, {Dispatch} from "react";
import DynamicButton from "../DynamicButton/DynamicButton";
import CartItem from "../Types/CartItemType";

export enum UpdateType {
    Remove = 1,
    Update,
}

type Props = {
    item?: CartItem
    type?: UpdateType;
    setCartList: Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartUpdated = ({item, type, setCartList}: Props) => {

    const handleUndo = () => {
        setCartList(prevState => {
            return [...prevState, item as CartItem]
        })
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
