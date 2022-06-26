import {Box, TextField} from "@mui/material";
import {CustomBtn} from "../../../Styles/Cart";
import React, {useEffect, useState} from "react";
import CartItem from "../Types/CartItemType";

type Props = {
    updateButtonDisabled: boolean;
    setUpdateButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    row: CartItem;
    cartList: any
    values: CartItem[];
    setValues: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const QuantityInput = ({setUpdateButtonDisabled, row, values, setValues, updateButtonDisabled, cartList}: Props) => {

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setQuantity(cartList.filter((item:CartItem) => item.id === row.id)[0].quantity)
    }, [])

    const handleDecValue = () => {
        if (values[row.id].quantity > 0) {
            // const a = [...values]
            // a[row.id] = a[row.id] - 1
            // setValues();
        }
        setQuantity(quantity - 1)

        updateButtonDisabled && setUpdateButtonDisabled(false)
    };

    const handleIncValue = () => {
        const a = [...values]
        a[row.id].quantity = a[row.id].quantity + 1
        setValues(a);

        setQuantity(quantity + 1)
        updateButtonDisabled && setUpdateButtonDisabled(false)
    };

    return <Box
        sx={{
            p: "1rem 0",
            display: "flex",
            alignItems: "center",
            gap: 1,
        }}
    >
        <Box sx={{display: "flex", alignItems: "center", height: "3rem", border: '1px solid #e4e4e4'}}>
            <Box sx={CustomBtn} style={{borderRight: '1px solid #e4e4e4'}} onClick={handleDecValue}>
                -
            </Box>
            <TextField
                id="outlined-number"
                type="number"
                value={quantity}
                sx={{
                    width: "58px",
                    height: "50px",
                    "& .MuiInputBase-root": {
                        height: "100%",
                        borderRadius: "0",
                    },
                    "& .MuiInputBase-input": {
                        textAlign: "center",
                    },
                    ".MuiOutlinedInput-notchedOutline": {
                        border: 'none',
                    },
                    input: {
                        "&::-webkit-inner-spin-button": {appearance: "none"},
                    },
                }}
                size="small"
            />
            <Box sx={CustomBtn} onClick={handleIncValue} style={{borderLeft: '1px solid #e4e4e4'}}>
                +
            </Box>
        </Box>
    </Box>
}

export default QuantityInput