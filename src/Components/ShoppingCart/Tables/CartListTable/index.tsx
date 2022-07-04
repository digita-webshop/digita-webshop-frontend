import {Box, Paper, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import {StyledTableCell} from "../../../../Styles/Cart";
import DynamicButton from "../../DynamicButton/DynamicButton";
import React, {Dispatch, useState} from "react";
import CartItem from "../../Types/CartItemType";
import {columnsData} from "./data";
import CartListTableRow from "../CartListTableRow";
import {UpdateCart} from "../../ShoppingCart";
import {UpdateType} from "../../CartUpdated";

type Props = {
    cartList: CartItem[];
    values: CartItem[];
    setValues: React.Dispatch<React.SetStateAction<CartItem[]>>
    setCartUpdated: React.Dispatch<React.SetStateAction<UpdateCart | null>>
}

const CartListTable = ({cartList, values, setValues, setCartUpdated}: Props) => {
    const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);

    const handleUpdateCart = () => {
        //todo update cart with the new quantity values
        setUpdateButtonDisabled(true)
        setCartUpdated(prevState => {
            return {...prevState, type: UpdateType.Update}
        })
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
                {cartList.map((row,) => (
                    <CartListTableRow key={row.id} row={row} cartList={cartList}
                                      setUpdateButtonDisabled={setUpdateButtonDisabled}
                                      updateButtonDisabled={updateButtonDisabled}
                                      values={values} setValues={setValues}
                                      setCartUpdated={setCartUpdated}
                    />
                ))}
                <TableRow>
                    <StyledTableCell colSpan={6} align="left">
                        <Box sx={{maxWidth: '360px', margin: '0 auto'}}>
                            <DynamicButton title='Update cart'
                                           disabled={updateButtonDisabled}
                                           action={updateButtonDisabled ? undefined : handleUpdateCart}/>
                        </Box>
                    </StyledTableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
}

export default CartListTable
