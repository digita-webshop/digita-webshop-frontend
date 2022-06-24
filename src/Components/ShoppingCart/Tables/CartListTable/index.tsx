import {Box, Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {ImageBox, StyledTableCell} from "../../../../Styles/Cart";
import DynamicButton from "../../DynamicButton/DynamicButton";
import React, {Dispatch, useEffect, useState} from "react";
import QuantityInput from "../../QuantityInput";
import CartItem from "../../Types/CartItemType";
import {CartListTableInput, columnsData} from "./data";
import CustomTableRow from "../CartListTableRow";

type Props = {
    cartList: CartItem[];
    setCartList: Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartListTable = ({cartList, setCartList}: Props) => {
    const [coupon, setCoupon] = useState('');
    const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoupon(e.target.value)
    };

    const handleUpdateCart = () => {
        console.log('Update cart', cartList)
    }

    const handleApplyCoupon = () => {
        console.log('apply coupon')
    }

    return <TableContainer component={Paper} sx={{height: '100%'}}>
        <Table
            sx={{minWidth: 700, border: '1px solid #ebebeb'}} aria-label="customized table">
            <TableHead>
                <TableRow>
                    {columnsData.map((column) => {
                        return <StyledTableCell key={column.id} width={column.width}>{column.name}</StyledTableCell>
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {cartList.map((row, index) => (
                    <CustomTableRow row={row} index={index} setCartList={setCartList} cartList={cartList}
                                    setUpdateButtonDisabled={setUpdateButtonDisabled}
                                    updateButtonDisabled={updateButtonDisabled}
                    />
                ))}
                <TableRow>
                    <StyledTableCell colSpan={6} align="left">
                        <Box sx={{display: 'flex'}}>
                            <Box
                                sx={{display: 'flex', alignItems: 'center'}}>
                                <TextField
                                    onChange={handleChange}
                                    id="outlined-number"
                                    type="text"
                                    placeholder="Coupon code"
                                    value={coupon}
                                    sx={CartListTableInput}
                                    size="small"
                                />
                                <Box>
                                    <DynamicButton title='Apply coupon' action={handleApplyCoupon}/>
                                </Box>
                            </Box>
                            <Box sx={{marginLeft: 'auto'}}>
                                <DynamicButton title='Update cart'
                                               disabled={updateButtonDisabled}
                                               action={updateButtonDisabled ? undefined : handleUpdateCart}/>
                            </Box>
                        </Box>
                    </StyledTableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
}

export default CartListTable
