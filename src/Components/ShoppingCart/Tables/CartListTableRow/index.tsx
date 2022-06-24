import React, {Dispatch, useState} from "react";
import {Button, TableRow} from "@mui/material";
import {ImageBox, StyledTableCell} from "../../../../Styles/Cart";
import CloseIcon from "@mui/icons-material/Close";
import QuantityInput from "../../QuantityInput";
import CartItem from "../../Types/CartItemType";

type Props = {
    row: CartItem;
    index: number;
    cartList: CartItem[]
    setCartList: Dispatch<React.SetStateAction<CartItem[]>>;
    setUpdateButtonDisabled: Dispatch<React.SetStateAction<boolean>>;
    updateButtonDisabled: boolean
}

const CartListTableRow = ({row, index, cartList, setCartList, setUpdateButtonDisabled, updateButtonDisabled}: Props) => {
    const [quantity, setQuantity] = useState(cartList[index].quantity)

    const handleRowDelete = (index: number) => {
        setCartList(prevState => {
            return prevState.filter((item: CartItem, i: number) => i !== index)
        })
    }

    return <TableRow key={row.product}>
        <StyledTableCell align="left">
            <Button
                onClick={() => handleRowDelete(index)}
                sx={{
                    border: '1px solid #333333',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.1rem',
                    width: '25px',
                    minWidth: 'unset',
                    height: '25px',
                    "&:hover": {
                        backgroundColor: 'unset',
                        borderColor: '#f03637',
                        "svg": {
                            color: '#f03637'
                        }
                    }
                }}
            >
                <CloseIcon sx={{fontSize: 'inherit', color: '#333333'}}
                />
            </Button>
        </StyledTableCell>
        <StyledTableCell align="left">
            <ImageBox><img
                src={row.image}/></ImageBox>
        </StyledTableCell>
        <StyledTableCell align="left" component="th" scope="row">
            {row.product}
        </StyledTableCell>
        <StyledTableCell sx={{color: '#f03637'}} align="center">${row.price}</StyledTableCell>
        <StyledTableCell align="left">
            {row.total > 1 ?
                <QuantityInput setUpdateButtonDisabled={setUpdateButtonDisabled}
                               updateButtonDisabled={updateButtonDisabled} id={index}
                               quantity={quantity}
                               setQuantity={setQuantity}
                               cartList={cartList}
                />
                : row.quantity}</StyledTableCell>
        <StyledTableCell
            align="right"
            sx={{color: '#f03637'}}>${(quantity * +row.price).toFixed(2)}</StyledTableCell>
    </TableRow>
}

export default CartListTableRow