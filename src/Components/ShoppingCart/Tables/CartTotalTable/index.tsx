import {Button, Paper, Table, TableCell, TableContainer, Typography, TableHead, TableRow, Box} from "@mui/material";
import React, {useState} from "react";
import {CalculateShopping, StyledTableCell, TotalTextStyle} from "../../../../Styles/Cart";
import DynamicButton from "../../DynamicButton/DynamicButton";
import CartItem from "../../Types/CartItemType";

type Props = {
    total: number
}

const CartTotalTable = ({total}: Props) => {

    console.log('zzzCartTotalTable rendered')


    const TotalTextStyle = {
        fontSize: '14px',
        color: '#777',
        lineHeight: '1.5em',
        textTransform: 'capitalize'
    }

    return <TableContainer
        sx={{
            maxWidth: 360,
            marginLeft: '30px',
            height: 'max-content',
            border: '1px solid #ebebeb',
        }} component={Paper}>
        <Typography sx={{
            padding: '0.7em 0',
            fontSize: '1.077em',
            fontWeight: 600,
            textAlign: 'center',
            lineHeight: 1.4,
            borderBottom: '1px solid #ebebeb',
            width: '100%'
        }}>Cart totals</Typography>
        <Box sx={{width: '100%', padding: '0 20px 20px', boxSizing: ' border-box'}}>
            <Table sx={{border: '0', margin: '0 0 20px'}}>
                <TableRow>
                    <StyledTableCell variant="head">Subtotal</StyledTableCell>
                    <TableCell sx={{
                        borderLeft: '1px solid #ebebeb',
                        borderColor: '#ebebeb',
                        color: '#f03637',
                    }}>${total.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                    <StyledTableCell variant="head">Shipping</StyledTableCell>
                    <TableCell sx={{borderLeft: '1px solid #ebebeb', borderColor: '#ebebeb'}}>
                        <Typography sx={TotalTextStyle}>Enter Your Address To View Shipping Options.</Typography>
                        <Button sx={CalculateShopping}>
                            CALCULATE SHIPPING
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <StyledTableCell sx={{lineHeight: '1.5em'}} variant="head">Total</StyledTableCell>
                    <TableCell sx={{borderLeft: '1px solid #ebebeb', borderColor: '#ebebeb'}}>
                        <Typography sx={Object.assign({...TotalTextStyle}, {
                            fontWeight: 600, color: '#f03637'
                        })}>
                            ${total.toFixed(2)}
                        </Typography>
                    </TableCell>
                </TableRow>
            </Table>
            <DynamicButton classes={{padding: '14px 20px'}} title={'Proceed to checkout'}/>
        </Box>
    </TableContainer>
}

export default CartTotalTable;