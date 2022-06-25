import {Box, TextField} from "@mui/material";
import {CustomBtn} from "../../../Styles/Cart";
import React, {useEffect, useState} from "react";

type Props = {
    updateButtonDisabled: boolean;
    setUpdateButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
    cartList: any
    values: number[];
    setValues: React.Dispatch<React.SetStateAction<number[]>>
}

const QuantityInput = ({setUpdateButtonDisabled, id, values, setValues, updateButtonDisabled}: Props) => {

    const [quantity, setQuantity] = useState(values[id])

    useEffect(() => {
        setQuantity(values[id])
    }, [values])

    const handleDecValue = () => {
        if (values[id] > 0) {
            const a = [...values]
            a[id] = a[id] - 1
            setValues(a);
        }
        setQuantity(quantity - 1)

        updateButtonDisabled && setUpdateButtonDisabled(false)
    };

    const handleIncValue = () => {
        const a = [...values]
        a[id] = a[id] + 1
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