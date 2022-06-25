import {Box, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import {StyledTableCell} from "../../../../Styles/Cart";
import DynamicButton from "../../DynamicButton/DynamicButton";
import React, {Dispatch, useEffect, useState} from "react";
import CartItem from "../../Types/CartItemType";
import {CartListTableInput, columnsData} from "./data";
import CartListTableRow from "../CartListTableRow";

type Props = {
    cartList: CartItem[];
    setCartList: Dispatch<React.SetStateAction<CartItem[]>>;
    values: number[];
    setValues: React.Dispatch<React.SetStateAction<number[]>>
    setTotal: React.Dispatch<React.SetStateAction<number>>
    total: number
}

const CartListTable = ({cartList, setCartList, values, setValues, setTotal, total}: Props) => {
    const [coupon, setCoupon] = useState('');
    const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);
    const [list, setList] = useState<CartItem[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoupon(e.target.value)
    };

    console.log('CartListTable rendered')

    useEffect(() => {
        setList(cartList)
    }, [cartList])

    const handleUpdateCart = () => {

        const cartClone: CartItem[] = []
        cartList.map((item, i) => {
            cartClone.push({...cartList[i], quantity: values[i]})
        })
        setCartList(cartClone)

        const total = cartList.reduce((acc,curr)=>{
            acc += curr.quantity * curr.price;
            return acc;
        },0)

        setTotal(total)
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
                    <CartListTableRow row={row} index={index} setCartList={setCartList} cartList={cartList}
                                      setUpdateButtonDisabled={setUpdateButtonDisabled}
                                      updateButtonDisabled={updateButtonDisabled}
                                      values={values} setValues={setValues}
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
