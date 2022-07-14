import React, {Dispatch} from "react";
import {Button, TableRow} from "@mui/material";
import {ImageBox, StyledTableCell} from "../../../../Styles/Cart";
import CloseIcon from "@mui/icons-material/Close";
import QuantityInput from "../../QuantityInput";
import CartItem from "../../Types/CartItemType";
import {handleRowDelete} from "../../Services";
import {UpdateCart} from "../../ShoppingCart";
import {UpdateType} from "../../CartUpdated";

type Props = {
    row: CartItem;
    cartList: CartItem[]
    setUpdateButtonDisabled: Dispatch<React.SetStateAction<boolean>>;
    updateButtonDisabled: boolean
    values: CartItem[];
    setValues: React.Dispatch<React.SetStateAction<CartItem[]>>
    setCartUpdated: React.Dispatch<React.SetStateAction<UpdateCart | null>>
}

const CartListTableRow = ({row, cartList, values, setValues, setUpdateButtonDisabled, setCartUpdated, updateButtonDisabled}: Props) => {

    return <TableRow key={row.id}>
        <StyledTableCell align="left">
            <Button
                onClick={() => {
                    handleRowDelete(row.id)
                    setCartUpdated(prevState => {
                        return {...prevState, item: cartList.filter((item=>item.id==row.id))[0], type: UpdateType.Remove}
                    })
                }}
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
                <CloseIcon sx={{fontSize: 'inherit', color: '#333333'}}/>
            </Button>
        </StyledTableCell>
        <StyledTableCell align="left">
            <ImageBox>
                <img
                    alt={row?.alt}
                    src={row?.image}/>
            </ImageBox>
        </StyledTableCell>
        <StyledTableCell align="left" component="th" scope="row">
            {row?.product}
        </StyledTableCell>
        <StyledTableCell sx={{color: '#f03637'}} align="center">${row?.price.toFixed(2)}</StyledTableCell>
        <StyledTableCell align="left">
            {row?.total > 1 ?
                <QuantityInput setUpdateButtonDisabled={setUpdateButtonDisabled}
                               updateButtonDisabled={updateButtonDisabled} row={row}
                               cartList={cartList}
                               values={values}
                               setValues={setValues}
                />
                : row?.quantity}</StyledTableCell>
        <StyledTableCell
            align="right"
            sx={{color: '#f03637'}}>${(row?.quantity * +row.price).toFixed(2)}</StyledTableCell>
    </TableRow>
}

export default CartListTableRow